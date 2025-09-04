import "./CSS/Home.css";
import React from "react"; // Make sure React is imported
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

// Importing images
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img15.jpg";
import img3 from "../assets/images/img16.jpg";
import img4 from "../assets/images/img19.jpg";
import img5 from "../assets/images/img9.jpg";
import img6 from "../assets/images/img12.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CustomSwiper: React.FC = () => {
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Navigation, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={img1} alt="Nature 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="Nature 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="Nature 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} alt="Nature 4" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img5} alt="Nature 5" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img6} alt="Nature 6" />
      </SwiperSlide>
    </Swiper>
  );
};

export default CustomSwiper;
