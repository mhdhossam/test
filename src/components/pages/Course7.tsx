import "../CSS/CourseInfo.css";
import img1 from "../../assets/images/german.jpg";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Navbar";
import Footer from "../Footer";
import video from "../../assets/videos/german.mp4";

// Define the structure of course data
interface CourseData {
  title: string;
  description: string;
  duration: string;
  price: string;
  syllabus: string[];
  image: string;
}

const Course7: React.FC = () => {
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
    title: "كورس الماني لذوي الهمم",
    description:
      "دورة شاملة لتعليم اللغة الألمانية، مُخصصة للأفراد من ذوي الهمم، لتعلم أساسيات اللغة الألمانية ومهارات التواصل بها.",
    duration: "6 أسابيع",
    price: "500",
    syllabus: [
      "مقدمة في اللغة الألمانية",
      "حروف الأبجدية الألمانية والنطق",
      "المفردات الأساسية في الحياة اليومية",
      "قواعد اللغة الألمانية (الزمن الحاضر، المستقبل، الماضي)",
      "التمارين على المحادثات اليومية",
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
            <source src={video} type="video/mp4" />
            متصفحك لا يدعم عرض الفيديو.
          </video>
        </div>
        <div className="banner-content">
          <div className="content-info">
            <h1>
              {" "}
              عايز تتعلم اللغة الألمانية وتفتح لنفسك أبواب جديدة في المستقبل
            </h1>
            <p>
              دليل بنقدملكم كورس مميز في اللغة الألمانية، مناسب لكل المستويات!
              سواء كنت مبتدئ أو عايز تطور مهاراتك
              <br />
              الكورس ده ليك! احنا هنا لإعانة ومساعدة كل شخص حابب يطور من نفسه في
              اللغة الألمانية
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
          className="course-image-info german"
          alt="German Course"
        />
      </div>
      <Footer />
    </>
  );
};

export default Course7;
