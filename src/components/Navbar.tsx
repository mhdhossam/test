import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logoFina2.png";
// import Button from "@mui/material/Button";
import "./CSS/Navbar.css";

// Define the props type
interface NavbarProps {
  loggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
  setToken: (token: string | null) => void;
}
export const Navbar: React.FC<NavbarProps> = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   localStorage.removeItem("accessToken");
  //   localStorage.removeItem("refresh_token");
  //   setLoggedIn(false);
  //    //navigate("/login");
  // };

  return (
    <nav className="courses-container">
      <div className="logo">
        <Link to="/" className="logo">
          <img src={logo} alt="Daleel Logo" />
        </Link>
        <div className="title">
          <h1>
            <span>D</span>aleel
          </h1>
        </div>
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setMenuOpen(false)}
          >
            Courses
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/soon"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setMenuOpen(false)}
          >
            Scholarship
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/home2"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setMenuOpen(false)}
          >
            E-commerce
          </NavLink>
        </li>
        {/* More NavLinks... */}

        <div className="field-wrapper">
          {/* {!loggedIn ? ( */}
          {/* <>
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                <Button className="btn1" variant="contained">
                  Login
                </Button>
              </Link>
              <Link to="/register" onClick={() => setMenuOpen(false)}>
                <Button className="btn2" variant="outlined">
                  Register
                </Button>
              </Link>
            </> */}
          {/* // ) : (
          //   <Button className="btn2" variant="outlined" >
          //     LogOut
          //   </Button>
          // )
          } */}
        </div>
      </ul>
    </nav>
  );
};
