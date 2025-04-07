import React from "react";
import "./HeroHeader.css";

export default function HeroHeader() {
  return (
    <section className="HeroHeader-container">
      <img
        className="HeroHeader-img-min-1920 HeroHeader-img-min-1280 HeroHeader-img-min-1024 HeroHeader-img-min-768 HeroHeader-img-max-768"
        src="./Img/heroHeader.jpg"
        alt="heroHeader"
      />
    </section>
  );
}
