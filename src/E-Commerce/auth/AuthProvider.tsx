import React, {
  createContext,
  useReducer,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import {jwtDecode} from "jwt-decode"; // Corrected import for jwt-decode
import { login, logout, refreshToken } from "../utils/Api";

interface DecodedToken {
  username: string;
  email: string;
  user_type: string;
  exp: number;
}

interface User {
  username: string;
  email: string;
  userType: string;
}

interface AuthState {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
}

interface AuthContextType extends AuthState {
  handleLogin: (username: string, password: string) => Promise<void>;
  handleLogout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const initialState: AuthState = {
  user: null,
  accessToken: null,
  isAuthenticated: false,
};

enum AuthActions {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
  REFRESH = "REFRESH",
}

type AuthAction =
  | { type: AuthActions.LOGIN; payload: { user: User; accessToken: string } }
  | { type: AuthActions.LOGOUT }
  | { type: AuthActions.REFRESH; payload: { accessToken: string } };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActions.LOGIN:
      return {
        ...state,
        user: action.payload.user,
        accessToken: action.payload.accessToken,
        isAuthenticated: true,
      };
    case AuthActions.LOGOUT:
      return { ...initialState };
    case AuthActions.REFRESH:
      return {
        ...state,
        accessToken: action.payload.accessToken,
      };
    default:
      return state;
  }
};

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const decodeToken = (token: string): DecodedToken => {
    return jwtDecode<DecodedToken>(token);
  };

  const handleLogin = async (username: string, password: string) => {
    const data = await login(username, password);
    const decoded = decodeToken(data.access);

    const user: User = {
      username: decoded.username,
      email: decoded.email,
      userType: decoded.user_type,
    };

    dispatch({
      type: AuthActions.LOGIN,
      payload: { user, accessToken: data.access },
    });

    localStorage.setItem("accessToken", data.access);
    localStorage.setItem("refreshToken", data.refresh);
  };

  const handleLogout = useCallback(async () => {
    try {
      await logout();
    } catch {
      // Fallback for cases where logout endpoint fails
    }
    dispatch({ type: AuthActions.LOGOUT });
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }, []);

  const attemptTokenRefresh = useCallback(async () => {
    try {
      const { access } = await refreshToken();
      const decoded = decodeToken(access);

      dispatch({
        type: AuthActions.REFRESH,
        payload: { accessToken: access },
      });

      localStorage.setItem("accessToken", access);

      // Schedule next token refresh
      const expirationTime = decoded.exp * 1000 - Date.now() - 5000;
      setTimeout(attemptTokenRefresh, expirationTime);
    } catch {
      handleLogout();
    }
  }, [handleLogout]);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const decoded = decodeToken(token);
      const expirationTime = decoded.exp * 1000 - Date.now() - 5000;

      if (Date.now() >= decoded.exp * 1000) {
        handleLogout();
      } else {
        setTimeout(attemptTokenRefresh, expirationTime);
      }
    }
  }, [attemptTokenRefresh, handleLogout]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        handleLogin,
        handleLogout,
        accessToken: state.accessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
