import React from "react";
import "./CSS/Footer.css";
import logo from "../assets/images/logoFina2.png";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="logoo">
            <img src={logo} alt="Logo" />
            <p>
              Empowering people with disabilities economically, professionally,
              and psychologically by providing training courses, handicraft
              workshops, grants, and marketing products, as well as offline and
              online counseling sessions (through the "Daleel" app) to create
              job opportunities for individuals with disabilities and prepare
              them for the Egyptian market according to Egypt's Vision 2030.
              <br />
              <span>#Daleel_The_First_and_Leading</span>
            </p>
          </div>

          <div className="nav-links">
            <ul>
              <li>
                <Link to="/" 
                // onClick={() => (window.location.href = "/")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" 
                // onClick={() => (window.location.href = "/about")}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" 
                // onClick={() => (window.location.href = "/services")}
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/contact" 
                // onClick={() => (window.location.href = "/contact")}
                >
                  Contact Us
                </Link>
              </li>
              {/* <li>
                <Link to="/scholarship" 
                // onClick={() => (window.location.href = "/scholarship")}
                >
                  Scholarship
                </Link>
              </li> */}
            </ul>
          </div>

          <div className="contact-info">
            <p>
              <i className="fas fa-phone"></i> <br />
              Phone: 01558626814
            </p>
            <p>
              <i className="fas fa-envelope"></i>
              <span>Email: startupdaleel@gmail.com</span>
            </p>
          </div>

          <div className="social-links">
            <a
              href="https://www.facebook.com/profile.php?id=61556817412722&mibextid=kFxxJD"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.tiktok.com/@daleel.institution?fbclid=IwY2xjawFRI5RleHRuA2FlbQIxMAABHSv4MMpMikqga1-I3kyChT7-eUhep_kNttf0MUU2CMy9ONM7Ty_cGefM-g_aem_jaadnUtc8NbLhtS-m_Aw9Q"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-tiktok"></i>
            </a>
            <a
              href="https://www.whatsapp.com/channel/0029Vacx0BB30LKIXMctCk0o?fbclid=IwY2xjawFRI89leHRuA2FlbQIxMAABHSMDC88OuOgaqm7QcWbeEQuw0mV5LU32A1wi6mN1n-6WHxNAkGNTz11yGg_aem_VSMJhqD6nTEcOouLrSiQSw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/daleel-institution-125496309?fbclid=IwY2xjawFRIwdleHRuA2FlbQIxMAABHSMDC88OuOgaqm7QcWbeEQuw0mV5LU32A1wi6mN1n-6WHxNAkGNTz11yGg_aem_VSMJhqD6nTEcOouLrSiQSw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>

          <div className="copyright">
            <p>
              &copy; 2024 <span>Daleel</span> . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
