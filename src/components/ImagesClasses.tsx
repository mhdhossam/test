import React from "react";
import "./CSS/About.css";
import img1 from "../assets/images/Perfumes.jpg";
import img2 from "../assets/images/candles.jpg";
import img3 from "../assets/images/Crochet.jpg";
import img4 from "../assets/images/skills.jpg";

// Define a type for the image data
type ImageData = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

const ImagesClasses: React.FC = () => {
  const images: ImageData[] = [
    {
      src: img1,
      alt: "Perfumes",
      title: "تركيب العطور",
      description:
        "تركيب العطور هو فن ومهارة تتضمن مزج مجموعة من المكونات العطرية الطبيعية أو الاصطناعية لإنشاء عطر مميز وجذاب",
    },
    {
      src: img2,
      alt: "Candles",
      title: "صناعة الشموع",
      description:
        "صناعة الشموع هي عملية يدوية أو صناعية تتضمن إذابة الشمع وسكبه في قوالب للحصول على أشكال وأحجام متنوعة من الشموع",
    },
    {
      src: img3,
      alt: "Crochet",
      title: "الكروشية",
      description:
        "كورس الكروشيه هو دورة تعليمية تهدف إلى تعليم فن الكروشيه، وهو نوع من الحياكة اليدوية باستخدام إبرة كروشيه وخيوط لصنع أشكال وتصاميم مختلفة",
    },
    {
      src: img4,
      alt: "Skills",
      title: "مهارات التوظيف",
      description:
        "مهارة التوظيف تعني القدرة على الحصول على وظيفة مناسبة وإثبات الجدارة والقدرة على التكيف والاستمرار فيها.",
    },
  ];

  return (
    <div className="images-container">
      {images.map((image, index) => (
        <div className="box" key={index}>
          <img src={image.src} alt={image.alt} />
          <div className="caption">
            <h4>{image.title}</h4>
            <p>{image.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImagesClasses;
