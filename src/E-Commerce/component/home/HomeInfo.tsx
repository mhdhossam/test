import "./HomeInfo.css";
import { Link } from "react-router-dom";
import { FC } from "react";

const HomeInfo: FC = () => {
  return (
    <article className="home-info">
      <div className="info-txt">
        <h2 className="head-info">
        At <span>Daleel</span> , we bring you a platform that celebrates the <span> creativity and excellence</span> of people of determination, showcasing handcrafted products made with love and professionalism across various <span>categories</span> 
        </h2>
        <p className="info-2">
        
        Discover creativity and excellence with our <span>Luxury Candles</span> , 
        Professional <span>Programming</span>  services,
        Exclusive <span>Perfumes</span> , and Handmade <span>Crochet</span>  pieces.
        Each product reflects artistry and dedication, designed to inspire and delight.
        </p>
      </div>
      <button className="explore-clothing_btn">
        <Link to="explore/all">Discover Our Products</Link>
      </button>
    </article>
  );
};

export default HomeInfo;