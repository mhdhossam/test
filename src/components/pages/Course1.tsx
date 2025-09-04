import "../CSS/CourseInfo.css";
import img1 from "../../assets/images/Perfumes.jpg";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Navbar";
import courseVideo from "../../assets/videos/perfumeCourse.mp4"; // Add your video file

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

const Course1: React.FC = () => {
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

  const courseData: CourseData = {
    title: "كورس تركيب العطور لذوي الهمم",
    description:
      "دورة شاملة لتعليم فنون تركيب العطور، مُخصصة للأفراد من ذوي الهمم، لتعلم كيفية صنع العطور الخاصة بهم.",
    duration: "4 أسابيع",
    price: "500",
    syllabus: [
      "مقدمة في تركيب العطور",
      "أنواع الزيوت",
      "أنواع الكحول",
      "ازاي أركب عطر",
    ],
    image: img1, // Use the course image here
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
            <h1> من اكتر الصناعات المربحه الفتره دي هي صناعه العطور </h1>
            <p>
              انت عارف انك تقدر تعمل دخل ثابت من غير اي مهارات وبكل سهوله
              <br />
              ودا من خلال ورشه عمل صناعه لان هدفنا في الاخر انك تتعلم المهنه صح
              وتنتج عطور وتقدر تسوقها على ابلكيشن شركه دليل ويبقى ليك مصدر للدخل
            </p>
          </div>
        </div>
      </div>
      {/* Video Section (Right After Banner) */}

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
        <img src={image} className="course-image-info" alt="Perfume Making" />
      </div>
      <Footer />
    </>
  );
};

export default Course1;
