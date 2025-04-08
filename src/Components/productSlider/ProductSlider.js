import React from "react";
import "./ProductSlider.css";
import { Link } from "react-router-dom";
import Slider from "../Slider/Slider";
// icon
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";

export default function ProductSlider() {
  return (
    <div className="container">
      <section
        className="ProductSlider-container ProductSlider-container-max-768 ProductSlider-container-min-768"
        dir="rtl"
      >
        <div className="ProductSlider-title ProductSlider-title-max-768 ProductSlider-title-min-768 ProductSlider-title-min-1024  ProductSlider-title-min-1280 ProductSlider-title-min-1920">
          <span>محصولات ما</span>
          <Link
            to="/product"
            className="ProductSlider-title-link ProductSlider-title-link-max-768 ProductSlider-title-link-min-768 ProductSlider-title-link-min-1024 ProductSlider-title-link-min-1280 ProductSlider-title-link-min-1920  "
          >
            <span>مشاهده</span>
            <ChevronLeftRoundedIcon
              id="ProductSlider-chevron-icon"
              className="ProductSlider-chevron-icon-max-768 ProductSlider-chevron-icon-min-768 ProductSlider-chevron-icon-min-1024 ProductSlider-chevron-icon-min-1280 ProductSlider-chevron-icon-min-1920"
            />
          </Link>
        </div>
        <Slider />
      </section>
    </div>
  );
}
