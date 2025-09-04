import React, { useState, ChangeEvent, FormEvent } from "react";
import "./Register.css";
import { registerVendor } from "../utils/Api";
import { Link } from "react-router-dom";

interface VendorFormData {
  email: string;
  username: string;
  password: string;
  business_name: string;
  business_address: string;
}

const VendorRegister: React.FC = () => {
  const [formData, setFormData] = useState<VendorFormData>({
    email: "",
    username: "",
    password: "",
    business_name: "",
    business_address: "",
  });

  const [successMessage, setSuccessMessage] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await registerVendor(formData);
      setSuccessMessage("Vendor registered successfully!");
      setFormData({
        email: "",
        username: "",
        password: "",
        business_name: "",
        business_address: "",
      });
    } catch {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className="register-container">
      {/* Left Section with Image Background */}
      <div className="register-left">
        {/* Background image will be added through CSS */}
      </div>
      {/* Right Section with Form */}
      <div className="register-right">
        <div className="register-form">
          <h1 className="welcome-text-register">
            Hello <span>there!</span>
          </h1>
          <p className="subtitle-register">Create your account to continue</p>

          {/* Success/Error Message */}
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
          {error && <p className="error-message">{error}</p>}

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                name="email"
                type="email"
                placeholder="awesome@user.com"
                className="input-field"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <i className="fas fa-envelope input-icon"></i>
            </div>
            <div className="input-group">
              <input
                name="username"
                type="text"
                placeholder="UserName"
                className="input-field"
                value={formData.username}
                onChange={handleChange}
                required
              />
              <i className="fas fa-user input-icon"></i>
            </div>
            <div className="input-group">
              <input
                name="password"
                type="password"
                placeholder="●●●●●●●●●●●●"
                className="input-field"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <i className="fas fa-lock input-icon"></i>
            </div>
            <div className="input-group">
              <input
                name="business_name"
                type="text"
                placeholder="Business Name"
                className="input-field"
                value={formData.business_name}
                onChange={handleChange}
                required
              />
              <i className="fas fa-building input-icon"></i>
            </div>
            <div className="input-group">
              <input
                name="business_address"
                type="text"
                placeholder="Business Address"
                className="input-field"
                value={formData.business_address}
                onChange={handleChange}
                required
              />
              <i className="fas fa-map-marker-alt input-icon"></i>
            </div>

            {/* Register Button */}
            <button className="register-btn" type="submit">
              Register
            </button>
          </form>

          {/* Login Link */}
          <p className="signup-link">
            Do you have an account?{" "}
            <Link to="/login" className="signup-link-highlight">
              LogIn!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VendorRegister;
