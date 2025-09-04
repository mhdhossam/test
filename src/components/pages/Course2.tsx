import "../CSS/CourseInfo.css";
import img1 from "../../assets/images/candles.jpg";
import courseVideo from "../../assets/videos/candles.mp4"; // Add your video file
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

const Course2: React.FC = () => {
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
    title: "كورس صناعة الشموع لذوي الهمم",
    description:
      "دورة شاملة لتعليم فنون صناعة الشموع، مُخصصة للأفراد من ذوي الهمم، لتعلم كيفية صنع الشموع الخاصة بهم.",
    duration: "4 أسابيع",
    price: "500",
    syllabus: [
      "مقدمة في صناعة الشموع",
      "أنواع الشموع",
      "أدوات صناعة الشموع",
      "العطور و تعتيق الشموع",
      "تكنيك صناعة الشموع ",
    ],
    image: img1,
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
            <h1>
              إحجز مكانك فى كورس تعليم الشموع مع الشركة الاولي والرائدة في مجال
              التأهيل شركة دليل المتميزه
            </h1>
            <p>
              هنخصصك في بيع وتصنيع وتعليم صناعة جميع أنواع الشموع المعطرة
              والديكورية بجميع أنواعها، بنوفرلك دعم فني مجاني وبنوفرلك كل
              الخامات والقوالب المستوردة والاكسسوارات اللي تخليكي مميزة في
              منتجاتك الشمعية ونتابع معاكي خطوة بخطوة لحد ما تعملي البراندالخاص
              بيكي
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
        <img src={image} className="course-image-info" alt="Candle Making" />
      </div>
      <Footer />
    </>
  );
};

export default Course2;
