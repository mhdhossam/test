import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Contact.css";
import "../CSS/Home.css";
import ContactForm from "../ContactForm";
import Footer from "../Footer";
import { Navbar } from "../Navbar";

// interface ContactProps {
//   loggedIn: boolean;
//   setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
// }

export const Contact: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      //  //navigate("/login");
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  }, [navigate]);

  return (
    <>
      <Navbar
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        setToken={function (): void {
          throw new Error("Function not implemented.");
        }}
      />

      <div className="background back">
        <h1>Contact Us</h1>
      </div>
      <div className="txt-contact">
        <h4>
          Get In <span>Touch</span>
        </h4>
      </div>

      <section className="contact-section">
        <ContactForm />
      </section>
      <Footer />
    </>
  );
};
