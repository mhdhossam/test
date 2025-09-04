import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Navbar";
import ScholarshipCard from "../ScholarshipCard";
import Footer from "../Footer";
import InfoCards from "./InfoCards";
import Slick from "../Slick";
import image from "../../assets/images/scholarshipimage.png";
import image2 from "../../assets/images/sholarshipsection.png";

const Scholarship: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false); // Type the state as a boolean
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
          <img decoding="async" src={image} alt="Scholarship" />
        </div>
        <div className="course-text">
          <h1>مرحبًا بكم في عالم المنح الدراسية الخاصة بنا</h1>
          <p>
            هنا، سوف نشارك كل ما تحتاج لمعرفته عن المنح الدراسية المميزة لذوي
            الهمم. من تطوير المهارات إلى النمو الشخصي، القصص الملهمة، والأحداث
            القادمة، هذا هو مكانك للحصول على الدعم اللازم لتحقيق أهدافك
            الأكاديمية والشخصية.
          </p>
        </div>
      </div>
      <div className="background shape">
        <h1>Our Scholarship</h1>
      </div>
      <section className="scholarships">
        <ScholarshipCard
          title="E-Matrix Scholar Ship"
          description="Details about the scholarship"
        />
        <ScholarshipCard
          title="E-Matrix Scholar Ship"
          description="Details about the scholarship"
        />
      </section>
      <section className="info-section-scholarship">
        <img src={image2} alt="Cloud Software" className="info-image" />
        <div className="info-text">
          <h2 className="scholarship-head">اكتشف فرص المنح الدراسية مع دليل</h2>
          <p className="scholarship-pha">
            انضم إلى مجتمعنا للحصول على نصائح حول التقديم
            <br /> وطرق التمويل، ومصادر تساعدك في تحقيق أهدافك التعليمية
          </p>
        </div>
      </section>
      <div className="background shape">
        <h1>About Scholarship</h1>
      </div>
      <section className="section-courses">
        <InfoCards />
      </section>
      <section>
        <Slick />
      </section>
      <Footer />
    </>
  );
};

export default Scholarship;
