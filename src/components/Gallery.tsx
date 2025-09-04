import React from "react";
import Slider from "react-slick";
import image1 from "../assets/images/img1.jpg";
import image2 from "../assets/images/img2.jpg";
import image3 from "../assets/images/img3.jpg";
import image5 from "../assets/images/img5.jpg";
import image6 from "../assets/images/img6.jpg";
import image9 from "../assets/images/img9.jpg";
import image11 from "../assets/images/img11.jpg";
import image12 from "../assets/images/img12.jpg";

import "./CSS/Grid.css";

const Gallery: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4, // Default to 3 slides
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200, // For screens <= 1200px
        settings: {
          slidesToShow: 5, // Show 3 slides
        },
      },
      {
        breakpoint: 1024, // For screens <= 1024px (tablets)
        settings: {
          slidesToShow: 4, // Show 2 slides
        },
      },
      {
        breakpoint: 768, // For screens <= 768px (small tablets, large phones)
        settings: {
          slidesToShow: 2, // Show 1 slide
        },
      },
      {
        breakpoint: 480, // For screens <= 480px (small phones)
        settings: {
          slidesToShow: 2, // Show 1 slide
        },
      },
    ],
  };

  // List of images
  const images: string[] = [
    image1,
    image2,
    image3,
    image11,
    image12,
    image2,
    image9,
    image5,
    image6,
    image11,
  ];

  return (
    <div className="gallery">
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                style={{ width: "100%", height: "auto" }}
                loading="lazy" // Lazy-load images
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
