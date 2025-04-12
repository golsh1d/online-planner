import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function Button() {
  const [buttonIsVisible, setButtonIsVisible] = useState(false);

  let button = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const top = button.current.getBoundingClientRect().top;
      const height = window.innerHeight;

      if (top < height && top > 0) {
        setButtonIsVisible(true);
      } else {
        setButtonIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="container">
      <button ref={button} className={`Button Button-max-768 Button-min-768 ${buttonIsVisible && "slide-right"}`}>
        <Link to="/signUp" className="Button-link">
          شروع
        </Link>
      </button>
    </section>
  );
}