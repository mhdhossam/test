import React from "react";
import img1 from "../assets/images/Perfumes.jpg";
import img2 from "../assets/images/candles.jpg";
import img3 from "../assets/images/Crochet.jpg";
import img4 from "../assets/images/skills.jpg";
import { Link } from "react-router-dom";

import "../components/CSS/Cards.css";

// Define the prop types for ServiceCard component
interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  return (
    <section className="section services">
      <div className="cards">
        <ServiceCard
          image={img1}
          title="كورس تركيب العطور"
          description="تركيب العطور هو فن ومهارة تتضمن مزج مجموعة من المكونات العطرية الطبيعية أو الاصطناعية لإنشاء عطر مميز وجذاب. يعتمد هذا الفن على معرفة دقيقة بتوازن الروائح وقوتها، حيث يتم دمج الزيوت العطرية المستخلصة من الأزهار، الفواكه، النباتات، والأخشاب."
        />
        <ServiceCard
          image={img2}
          title="كورس صناعة الشموع"
          description="صناعة الشموع هي عملية يدوية أو صناعية تتضمن إذابة الشمع وسكبه في قوالب للحصول على أشكال وأحجام متنوعة من الشموع. تستخدم الشموع منذ القدم لأغراض الإضاءة والزينة، ومع مرور الوقت أصبحت جزءًا من الديكور والرفاهية، خاصةً مع إضافة الروائح العطرية إليها."
        />
        <ServiceCard
          image={img3}
          title="كورس الكروشية"
          description="كورس الكروشيه هو دورة تعليمية تهدف إلى تعليم فن الكروشيه، وهو نوع من الحياكة اليدوية باستخدام إبرة كروشيه وخيوط لصنع أشكال وتصاميم مختلفة مثل الملابس، الأغطية، المفارش، والدمى. يعتبر الكروشيه فناً شعبياً يمكن تعلمه بسهولة ويتطلب إبداعاً وصبراً."
        />
        <ServiceCard
          image={img4}
          title="كورس مهارة التوظيف"
          description="مهارة التوظيف تعني القدرة على الحصول على وظيفة مناسبة وإثبات الجدارة والقدرة على التكيف والاستمرار فيها. تشمل هذه المهارة عدة جوانب تتعلق بكيفية تقديم نفسك بشكل جيد لأصحاب العمل وبناء مسيرة مهنية ناجحة."
        />
      </div>
    </section>
  );
};

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, description }) => {
  return (
    <div
      className="card"
      style={{ height: "870px", position: "relative", textAlign: "center" }}
    >
      <img src={image} className="image" alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to="/services">
        <button
          className="explore-btn"
          style={{
            position: "absolute",
            bottom: "20px", // Distance from the bottom of the card
            left: "50%",
            transform: "translateX(-50%)", // Centers the button horizontally
          }}
        >
          Explore
        </button>
      </Link>
    </div>
  );
};

export default Services;
