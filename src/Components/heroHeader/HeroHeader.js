import React from "react";
import "./HeroHeader.css";
// icons
import ExpandCircleDownRoundedIcon from '@mui/icons-material/ExpandCircleDownRounded';

export default function HeroHeader() {
  return (
    <section className="HeroHeader-container HeroHeader-container-max-768 HeroHeader-container-min-768">
      <img
        className="HeroHeader-img-min-1920 HeroHeader-img-min-1280 HeroHeader-img-min-1024 HeroHeader-img-min-768 HeroHeader-img-max-768"
        src="./Img/heroHeader.jpg"
        alt="heroHeader"
      />
      <div className="HeroHeader-chevron-down-container">
        <ExpandCircleDownRoundedIcon className="HeroHeader-chevron-down-icon bounce"/>
      </div>
    </section>
  );
}
