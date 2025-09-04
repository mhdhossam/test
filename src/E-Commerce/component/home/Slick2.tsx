import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/images/image1.webp";
import image2 from "../../assets/images/image2.webp";
import image3 from "../../assets/images/image3.webp";
import image4 from "../../assets/images/image4.webp";
import image5 from "../../assets/images/image5.webp";
import image6 from "../../assets/images/image6.webp";

import "./Slick2.css";
import { FC } from "react";

const Slick2: FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="slider-container-shop">
            <Slider {...settings} className="slider-shop">
                <div>
                    <img src={image1} alt="Photo 1" />
                </div>
                <div>
                    <img src={image2} alt="Photo 2" />
                </div>
                <div>
                    <img src={image3} alt="Photo 3" />
                </div>
                <div>
                    <img src={image4} alt="Photo 4" />
                </div>
                <div>
                    <img src={image5} alt="Photo 5" />
                </div>
                <div>
                    <img src={image6} alt="Photo 6" />
                </div>
            </Slider>
        </div>
    );
};

export default Slick2;