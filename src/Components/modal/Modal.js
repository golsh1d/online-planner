import React from "react";
import "./Modal.css";
import { useRef } from "react";
import { useEffect } from "react";

export default function Modal({ display, bgColor, color, children }) {
  let Modal = useRef();

  useEffect(() => {
    setTimeout(() => {
      Modal.current.style.display = "none";
    }, 2000);
  }, []);

  return (
    <div
      className="Modal-container Modal-container-max-768 Modal-container-min-768"
      style={{ display: display, backgroundColor: bgColor, color: color }}
      ref={Modal}
    >
      {children}
    </div>
  );
}
