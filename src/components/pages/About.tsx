import "../CSS/Home.css";
import Footer from "../Footer";
import { Navbar } from "../Navbar";
import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Slick from "../Slick";
import TeamCard from "../TeamCard";
import videoUrl from "../../assets/videos/intro_daleel.mp4";
import img2 from "../../assets/images/special3.jpeg";
import ImagesClasses from "../ImagesClasses";
import image1 from "../../assets/images/alaa.jpg";
import image2 from "../../assets/images/ali.jpg";
import image3 from "../../assets/images/esayed.jpg";
import image4 from "../../assets/images/ibrahim.jpg";
import image5 from "../../assets/images/eman.jpg";
import image6 from "../../assets/images/mahmoud.jpg";
import image7 from "../../assets/images/eng.eman.jpg";
import image8 from "../../assets/images/mhd.jpg";
import image9 from "../../assets/images/tefa.jpg";
import image10 from "../../assets/images/salah.jpg";

// Define a type for team member objects
interface TeamMember {
  name: string;
  image: string;
  description: string;
}

export const About: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const navigate = useNavigate();

  // Check for login status and navigate if not logged in
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      //  //navigate("/login");
    } else {
      setLoggedIn(true);
    }
  }, [navigate]);

  // Memoizing the team data array
  const team: TeamMember[] = useMemo(
    () => [
      { name: "Eng. Eman Ahmed", image: image7, description: "Founder Daleel" },
      {
        name: "Mostafa Sayed",
        image: image9,
        description: "Technical Front-End",
      },
      {
        name: "Mohamed Hossam",
        image: image8,
        description: "Technical Back-End",
      },
      {
        name: "Mohamed Salah",
        image: image10,
        description: "Technical Back-End",
      },
      { name: "Alaa Nasser", image: image1, description: "Customer service" },
      { name: "Ali Gamal", image: image2, description: "Coach" },
      { name: "Esayd Mohammed", image: image3, description: "Coach" },
      { name: "Ibrahim", image: image4, description: "Voice over" },
      { name: "Eman Ahmed", image: image5, description: "Assistant Manager" },
      {
        name: "Mahmoud Mohamed",
        image: image6,
        description: "Assistant Manager",
      },
    ],
    []
  );

  return (
    <>
      <Navbar
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        setToken={function (): void {
          throw new Error("Function not implemented.");
        }}
      />

      <div className="background">
        <h1>About Us</h1>
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

      <div className="background">
        <h1>Our Team</h1>
      </div>

      <section>
        <div className="team-cards">
          {team.map(({ name, image, description }, index) => (
            <TeamCard
              key={index}
              name={name}
              image={image}
              description={description}
            />
          ))}
        </div>
      </section>

      <div className="background">
        <h1>Our Courses</h1>
      </div>

      <section>
        <ImagesClasses />
      </section>

      <section>
        <Slick />
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
};
