import "../CSS/Courses.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../CSS/Home.css";
import img from "../../assets/images/coursesimage.png";
import Tracks from "../Tracks";
import Footer from "../Footer";
import { Navbar } from "../Navbar";

// Define types for props if necessary
// interface NavbarProps {
//   loggedIn: boolean;
//   setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
// }

export const Services: React.FC = () => {
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
      <div className="course-container">
        <div className="course-image">
          <img decoding="async" src={img} alt="Courses" />
        </div>
        <div className="course-text">
          <h1>مرحبًا بكم في عالم الكورسات الخاصة بنا</h1>
          <p>
            هنا، سوف نشارك كل ما تحتاج لمعرفته عن الكورسات المميزة لذوي الهمم.
            من المهارات إلى التطوير الشخصي، القصص الملهمة، والأحداث القادمة، هذا
            هو مكانك للنمو والتعلم.
          </p>
        </div>
      </div>
      <div className="background shape">
        <h1>Our Tracks</h1>
      </div>

      <div className="cards-container">
        <Tracks />
        <div className="dots dots-up"></div>
        <div className="dots dots-down"></div>
      </div>

      {/* <div className="background shape">
        <h1>Testimonials</h1>
      </div> */}

      {/* <section className="testimonials">
        <Testimonials />
      </section> */}

      <Footer />
    </>
  );
};
