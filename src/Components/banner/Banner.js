import React from "react";
import "./Banner.css";

export default function Banner() {
  return (
    <div className="Banner-container Banner-container-max-width-768 Banner-container-min-width-768 ">
      <img src={`${process.env.PUBLIC_URL}/Img/idea.png`} alt="idea" />
    </div>
  );
}
