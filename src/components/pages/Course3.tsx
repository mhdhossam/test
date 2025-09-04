import "../CSS/CourseInfo.css";
import img1 from "../../assets/images/Crochet.jpg";
import courseVideo from "../../assets/videos/Crochet.mp4"; // Add your video file

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Navbar";
import Footer from "../Footer";

// Define the structure of course data
interface CourseData {
  title: string;
  description: string;
  duration: string;
  price: string;
  syllabus: string[];
  image: string;
}

const Course3: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      //navigate("/login");
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  }, [navigate]);

  const courseData: CourseData = {
    title: "كورس الكروشية لذوي الهمم",
    description:
      "دورة شاملة لتعليم فنون الكروشية، مُخصصة للأفراد من ذوي الهمم، لتعلم كيفية صنع قطع الكروشية المختلفة.",
    duration: "4 أسابيع",
    price: "500",
    syllabus: [
      "أنواع الخيوط والأبر",
      "أساسيات الكروشية (السلاسل والغرزة المنزلقة)",
      "ما هو فن الكروشية و انواعة",
      "كيفية مسك الابرة",
    ],
    image: img1, // Use the provided image for this course
  };

  const { title, description, duration, price, syllabus, image } = courseData;

  return (
    <>
      <Navbar
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        setToken={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      {/* Text-only Banner */}
      <div className="course-banner">
        <div className="course-video-section">
          <video className="course-video" controls>
            <source src={courseVideo} type="video/mp4" />
            متصفحك لا يدعم عرض الفيديو.
          </video>
        </div>
        <div className="banner-content">
          <div className="content-info">
            <h1>عايزة تتعلمي فن يشغل وقت وكمان يقدر يكون سبب في زيادة دخلك</h1>
            <p>
              زهقتي من الموبايل والوقت اللي بيضيع بدون فائدة وعايزة تستفادي بيه
              <br />و نفسك تعملي شنطه أو كوفيه عشان كدا شركة دليل الرائده
              والاولي في مصر بتوفرلك كورس الكروشية الفن الجميل المميزة
            </p>
          </div>
        </div>
      </div>

      {/* Course Information */}
      <div className="course-info">
        <div className="courses-info-container">
          <div className="course-header">
            <div className="course-details">
              <h1>{title}</h1>
              <p>{description}</p>
              <p className="pha">
                {" "}
                <span>المدة:</span> {duration}
              </p>
              <p className="pha">
                <span>السعر:</span>
                {price}
              </p>
            </div>
          </div>

          <h3 className="title-info1">المنهج:</h3>
          <div className="list">
            <ul>
              {syllabus.map((topic, index) => (
                <li key={index}>{topic}</li>
              ))}
            </ul>
          </div>

          <button className="enroll-btn">سجل الآن</button>
        </div>
        <img src={image} className="course-image-info" alt="Crochet Course" />
      </div>
      <Footer />
    </>
  );
};

export default Course3;
