import React from "react";
import Slider from "react-slick";
import "./CSS/Testimonials.css";

// Import testimonial images
import image1 from "../assets/images/tes1.jpg";
import image2 from "../assets/images/tes2.jpg";
import image3 from "../assets/images/tes3.jpg";
import image4 from "../assets/images/tes4.jpg";
import image5 from "../assets/images/tes5.jpg";
import image6 from "../assets/images/tes6.jpg";

// Slider settings
const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 6000,
  autoplaySpeed: 2000,
  cssEase: "linear",
};

// Define the structure of testimonial data
interface Testimonial {
  image: string;
  alt: string;
  quote: string;
}

// Testimonial data
const testimonials: Testimonial[] = [
  {
    image: image1,
    alt: "Person 1",
    quote: "شركه دليل حفظكم الله ورعاكم وعلى طاعته قواكم اسال الله العظيم ان يجعلكم دائما في نفع الامه ، حفظكم الله جميعا يا اصحاب مشروع القلوب الطيبه",
  },
  {
    image: image2,
    alt: "Person 2",
    quote: "انا حابة اشكر المهندسة ايمان احمد صاحبة الشركة والمهندسة ايمان مكاوى والاستاذ محمود والدكتورة فاطمة والاستاذ مدرب العطور والأستاذة ياسمين حقيقى فريق عمل غاية في الأخلاق العالية",
  },
  {
    image: image3,
    alt: "Person 3",
    quote: "شكر خاص لمدربنا الرائع الاستاد هادي للمعلومات المفيدة و الوقت الممتع المفيد والجهد الكبير كل اسرة مؤسسة رحاب شعيب كلهم لهم جزيل الشكر و كل التقدير",
  },
  {
    image: image4,
    alt: "Person 4",
    quote: "السلام عليكم ورحمه الله وبركاته احب اشكر شركه دليل جدا جدا على تقديم خدماتها المتميزه بذوي الاعاقه بجميع انواعها بصريه وحركيه وسمعيه وذهنيه لانها تنفرد بتواجدها في كل مكان في مصر",
  },
  {
    image: image5,
    alt: "Person 5",
    quote: "وتنفرد ايضا بتواجد اكفا المدربين في التاهيل الوظيفي والمهني وتقديم كورسات متميزه بمستويات اكفا ما يكون للمتدربين واشكر المدربه الاستاذه افنان التي ساهمت في تدريبنا في كورس الكروشيه",
  },
  {
    image: image6,
    alt: "Person 6",
    quote: "اخص بالشكر ايضا الاستاذه فاطمه صاحبه مركز حلمي بايدك بالتخاطب على استضافتها لنا وتشرفنا بالتعامل معها ومع شركه دليل كل الشكر والتقدير والاحترام للجميع",
  },
];

// Define the props type for the TestimonialCard component
interface TestimonialCardProps {
  image: string;
  alt: string;
  quote: string;
}

// Testimonial Card Component
const TestimonialCard: React.FC<TestimonialCardProps> = ({ image, alt, quote }) => (
  <div className="testimonial-card">
    <img src={image} alt={alt} className="testimonial-image" />
    <p className="testimonial-quote">{quote}</p>
  </div>
);

const Testimonials: React.FC = () => (
  <div className="sliderr-containerr">
    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          image={testimonial.image}
          alt={testimonial.alt}
          quote={testimonial.quote}
        />
      ))}
    </Slider>
  </div>
);

export default Testimonials;
