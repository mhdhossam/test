import React, { useEffect, useState } from "react";
import "../CSS/Home.css";
import videoUrl from "../../assets/videos/intro_daleel.mp4";
import { useNavigate } from "react-router-dom";

import img2 from "../../assets/images/special3.jpeg";
import Services from "../Services";
import Gallery from "../Gallery";
import Footer from "../Footer";
import Slick from "../Slick";
import Counter from "../Counter";
import { Navbar } from "../Navbar";
import Tesimonials_grid from "../CardsGrid";

// Define the type for the props of the Navbar component
// interface NavbarProps {
//   loggedIn: boolean;
//   setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
// }

export const Home: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const navigate = useNavigate();

  // Authentication check
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      //  //navigate("/login");
    } else {
      setLoggedIn(true);
    }
  }, [navigate]);

  // Memoize services to prevent unnecessary recalculations on each render
  // const services = useMemo(() => [
  //   { title: 'Service 1', description: 'This is service 1' },
  //   { title: 'Service 2', description: 'This is service 2' },
  //   { title: 'Service 3', description: 'This is service 3' },
  // ], []);

  return (
    <>
      <Navbar
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        setToken={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <div className="title_banner">
        <div className="right-banner">
          <h1 data-aos="fade-up-right">Daleel</h1>
          <br />
          <h2 className="fancy">
            PEABLE WITH <span>Daleel</span> SPECIAL NEEDS
          </h2>
          <div className="butt">
            <button className="btn">Get Started</button>
          </div>
        </div>
      </div>

      <section className="about-us">
        <div className="video-container">
          <video src={videoUrl} poster={img2} controls loop />
        </div>
        <div className="text-container">
          <h2>تمكين ذوي الهمم اقتصاديا ومهنيا ونفسيا</h2>
          <p>
            من خلال توفير دورات تدريبيه وكورسات حرف يدويه ومنح وتسويق منتجات
            وجلسات ارشاديه اوفلاين واونلاين (من خلال ابلكيشن دليل) لتوفير فرص
            عمل لذوي الهمم وتأهيلهم في السوق المصري طبقا لرؤيه مصر 2030✨♥
          </p>
          <h3>#دليل_الاولي_والرائدة</h3>
        </div>
      </section>

      <div className="background shape">
        <h1>Courses</h1>
      </div>
      <section className="section">
        <Services />
      </section>

      <section>
        <Counter />
      </section>

      <div className="background shape">
        <h1>Gallery</h1>
      </div>
      <section>
        <Gallery />
      </section>

      <div className="background shape">
        <h1>Testimonials</h1>
      </div>
      <section className="testimonials">
        <Tesimonials_grid />
      </section>

      <section>
        <Slick />
      </section>

      <section className="box-empty" />

      <section>
        <Footer />
      </section>
    </>
  );
};
