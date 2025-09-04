import React, { useState, useContext, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { AuthContext } from "../auth/AuthProvider";

const Login: React.FC = () => {
  const authContext = useContext(AuthContext);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  if (!authContext) {
    throw new Error("AuthContext is not provided. Wrap your component with AuthProvider.");
  }

  const { handleLogin } = authContext;

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await handleLogin(username, password);
      navigate("/"); // Redirect on successful login
    } catch {
      setError("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      {/* Left Section with Image Background */}
      <div className="login-left">{/* Background image */}</div>

      {/* Right Section with Form */}
      <div className="login-right">
        <div className="login-form">
          <h1 className="welcome-text">
            <span>Welcome</span> Back to <span>Daleel</span>
          </h1>
          <p className="subtitle">Log in to your account to continue</p>
          <form onSubmit={onSubmit}>
            <div className="input-group">
              <input
                type="text"
                placeholder="Username or Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input-field"
                required
              />
              <i className="fas fa-user input-icon"></i>
            </div>
            <div className="input-group">
              <input
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
                required
              />
              <i className="fas fa-lock input-icon"></i>
            </div>
            {error && <p className="error-message">{error}</p>}
            <button className="login-btn" type="submit" disabled={loading}>
              {loading ? "Logging In..." : "Log In"}
            </button>
          </form>
          <p className="signup-link">
            Don’t have an account?{" "}
            <Link to="/register" className="signup-link-highlight">
              Register!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
