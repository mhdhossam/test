import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CSS/Try.css";

// Import all logos as WebP format
import logo1 from "../assets/logo,s/logo1.webp";
import logo2 from "../assets/logo,s/logo2.webp";
import logo3 from "../assets/logo,s/logo3.webp";
import logo4 from "../assets/logo,s/logo4.webp";
import logo5 from "../assets/logo,s/logo5.webp";
import logo6 from "../assets/logo,s/logo6.webp";
import logo7 from "../assets/logo,s/logo7.webp";
import logo8 from "../assets/logo,s/logo8.webp";
import logo9 from "../assets/logo,s/logo9.webp";
import logo10 from "../assets/logo,s/logo10.webp";

// Settings for Slick slider
const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear"
};

// Define types for the logos array
interface Logo {
  src: string;
  alt: string;
}

// Array of logos and alt texts
const logos: Logo[] = [
    { src: logo1, alt: "Logo 1" },
    { src: logo2, alt: "Logo 2" },
    { src: logo3, alt: "Logo 3" },
    { src: logo4, alt: "Logo 4" },
    { src: logo5, alt: "Logo 5" },
    { src: logo6, alt: "Logo 6" },
    { src: logo7, alt: "Logo 7" },
    { src: logo8, alt: "Logo 8" },
    { src: logo9, alt: "Logo 9" },
    { src: logo10, alt: "Logo 10" }
];

// Slick component
const Slick: React.FC = () => {
    return (
        <div className="slider-container">
            <div className="images">
                <Slider {...settings}>
                    {logos.map((logo, index) => (
                        <div key={index}>
                            <img src={logo.src} alt={logo.alt} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Slick;
