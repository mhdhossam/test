import React, { useContext, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const  accessToken  = useContext(AuthContext);

  return accessToken ? <>{children}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;
