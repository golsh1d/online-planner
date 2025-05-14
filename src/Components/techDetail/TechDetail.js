import React from "react";
import "./TechDetail.css";

export default function TechDetail({ title, des }) {
  return (
    <div className="TechDetail-container TechDetail-container-max-768 TechDetail-container-min-768">
      <div className="TechDetail-title TechDetail-title-max-768 TechDetail-title-min-768">
        {title}
      </div>
      <div className="TechDetail-des TechDetail-des-max-768 TechDetail-des-min-768">
        {des}
      </div>
    </div>
  );
}