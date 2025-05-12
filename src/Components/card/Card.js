import React from "react";
import "./Card.css";

export default function Card({ id, bgColor, title, link }) {
  return (
    <div className="Card-container" key={id}>
      <div
        className="Card-title Card-title-max-768 Card-title-min-768"
        style={{ backgroundColor: bgColor }}
      >
        {title}
      </div>
      <div className="Card-btn-container Card-btn-container-max-768 Card-btn-container-min-768">
        <a
          href={link}
          download
          className="Card-btn Card-btn-max-768 Card-btn-min-768"
        >
          دانلود
        </a>
      </div>
    </div>
  );
}
