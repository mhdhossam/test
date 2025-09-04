import photo1 from "../../assets/images/image7.webp";
import photo2 from "../..//assets/images/image8.webp";
import photo3 from "../../assets/images/image9.webp";

import "./HomePhotoShoot.css";
import { FC } from "react";

const HomePhotoShoot: FC = () => {
  return (
    <div className="photoshoot-container">
      <span className="model-photo_wrapper boy">
        <img src={photo1} className="model-photo" alt="model photograph" />
      </span>
      <span className="model-photo_wrapper boy">
        <img src={photo3} className="model-photo" alt="model photograph" />
      </span>
      <span className="model-photo_wrapper female">
        <img src={photo2} className="model-photo" alt="model photograph" />
      </span>
    </div>
  );
};

export default HomePhotoShoot;
