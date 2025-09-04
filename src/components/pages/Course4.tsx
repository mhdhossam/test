import "../CSS/CourseInfo.css";
import img1 from "../../assets/images/skills.jpg";
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

const Course4: React.FC = () => {
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
    title: "كورس مهارة التوظيف لذوي الهمم",
    description:
      "دورة شاملة لتعليم مهارات التوظيف، مُخصصة للأفراد من ذوي الهمم، لتعلم كيفية البحث عن عمل وتحقيق النجاح المهني.",
    duration: "4 أسابيع",
    price: "500",
    syllabus: [
      "إعداد السيرة الذاتية بشكل احترافي",
      "كيفية التحضير للمقابلات الشخصية",
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
        <div className="course-image-section">
          <img src={img2} alt="image-course" />
        </div>
        <div className="banner-content">
          <div className="content-info">
            <h1>إعلان مهم لكل ابناء مؤسسة دليل الطموح من ذوي الهمم</h1>
            <p>
              لو عايز تبني مستقبلك وتعرف إزاي تكتب سيرة ذاتية تخلي أصحاب العمل
              يتهافتوا ويجروا عليك،
              <br /> أو لو محتاج تحضر لمقابلة عمل وتدخلها بكل ثقة، الدورة دي
              هتكون نقطة انطلاقك يبطل
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
          className="course-image-info skills"
          alt="Course Skills"
        />
      </div>
      <Footer />
    </>
  );
};

export default Course4;
