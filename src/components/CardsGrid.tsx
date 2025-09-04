import React from "react";
import "./CSS/Cards.css";

import image1 from "../assets/images/tes1.jpg";
import image2 from "../assets/images/tes2.jpg";
import image3 from "../assets/images/tes3.jpg";
import image4 from "../assets/images/tes4.jpg";
// import image5 from "../assets/images/tes5.jpg";
// import image6 from "../assets/images/tes6.jpg";

interface Testimonial {
  image: string;
  name: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    image: image1,
    name: "Dina Mahfouz",
    text: `"عايزة اشكر كل اسرة دليل كل فريق العمل بقيادة المهندسة ايمان احمد و اشكر الاستاذة ايمان مكاوى و الاستاذ محمود كلهم ناس جميلة ومخلصة جدا ربنا يجزاهيهمخيرا لجهودهم و تعبهم شكر خاص لمدربنا الرائع الاستاد هادي للمعلومات المفيدة و الوقت الممتع المفيد والجهد الكبير كل اسرة مؤسسة رحاب شعيب كلهم لهم جزيل الشكر و كل التقدير"`,
  },
  {
    image: image2,
    name: "Mohamed Ibrahim",
    text: `"شركه دليل حفظكم الله ورعاكم وعلى طاعته قواكم اسال الله العظيم ان يجعلكم دائما في نفع الامه ، حفظكم الله جميعا يا اصحاب مشروع القلوب الطيبه"`,
  },
  {
    image: image3,
    name: "Mohand Mohammed",
    text: `"انا حابة اشكر المهندسة ايمان احمد صاحبة الشركة والمهندسة ايمان مكاوى والاستاذ محمود والدكتورة فاطمة والاستاذ مدرب العطور والأستاذة ياسمين حقيقى فريق عمل غاية في الأخلاق العالية والمصداقية وربنا يوفقكم لتحقيق أهدافكم النبيلة"`,
  },
  {
    image: image4,
    name: "Arwwa Ahmed",
    text: `"السلام عليكم ورحمه الله وبركاته احب اشكر شركه دليل جدا جدا على تقديم خدماتها المتميزه بذوي الاعاقه بجميع انواعها بصريه وحركيه وسمعيه وذهنيه لانها تنفرد بتواجدها في كل مكان في مصر وتنفرد ايضا بتواجد اكفا المدربين في التاهيل الوظيفي والمهني وتقديم كورسات متميزه بمستويات اكفا ما يكون للمتدربين واشكر المدربه الاستاذه افنان التي ساهمت في تدريبنا في كورس الكروشيه واخرجتنا على اكثر مستوى من الكفاءه على العمل في هذا المجال مجال الكروشيه وعمل افضل التصميمات"`,
  },
];

const CardsGrid: React.FC = () => {
  return (
    <div className="testimonials" id="testimonials">
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="box">
            <img decoding="async" src={testimonial.image} alt={testimonial.name} />
            <h3>{testimonial.name}</h3>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsGrid;
