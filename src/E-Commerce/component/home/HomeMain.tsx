import HomePhotoShoot from "./HomePhotoShoot.tsx";
import HomeInfo from "./HomeInfo";
import "./HomeMain.css";
import { FC } from "react";

const HomeMain: FC = () => {
  return (
    <main className="home-main container">
      <HomeInfo />
      <HomePhotoShoot />
    </main>
  );
};

export default HomeMain;
