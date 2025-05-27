import React from "react";
import "./Modal.css";

export default function Modal({ display, bgColor, color, children }) {
  return (
    <div
      className="Modal-container Modal-container-max-768 Modal-container-min-768"
      style={{ display: display, backgroundColor: bgColor, color: color }}
    >
      {children}
    </div>
  );
}
