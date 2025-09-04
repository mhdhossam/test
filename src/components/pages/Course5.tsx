import "../CSS/CourseInfo.css";
import img1 from "../../assets/images/programming.jpg";
import img2 from "../../assets/images/courses-image.png";

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

const Course5: React.FC = () => {
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
    title: "كورس البرمجة لذوي الهمم",
    description:
      "دورة شاملة لتعليم أساسيات البرمجة، مُخصصة للأفراد من ذوي الهمم، لتعلم لغات البرمجة وتقنيات التطوير البرمجي.",
    duration: "6 أسابيع",
    price: "600",
    syllabus: ["مقدمة في البرمجة", " تعلم حل المشكلات ", " ازاي تبني برنامج "],
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
        <div className="course-image-section">
          <img src={img2} alt="image-course" />
        </div>
        <div className="banner-content">
          <div className="content-info">
            <h1> في دليل بنقدم ليك تجربة تعلم مختلفة ومتميزة</h1>
            <p>
              بداية من الفريق الاكاديمي المتخصص في تقديم المحتوي بشكل سلس وممتع
              <br />و اللي بيوصلنا للمعلومة والتطبيق العملي بتاعها في شكل بسيط .
              كمان بنوفر لك بيئة تعليمية مختلفة تهيأك لسوق العمل بشكل كامل
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
        <img
          src={image}
          className="course-image-info"
          alt="Programming Course"
        />
      </div>
      <Footer />
    </>
  );
};

export default Course5;
