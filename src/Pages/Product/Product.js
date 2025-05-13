import React from "react";
import "./Product.css";
import NavBar from "../../Components/navbar/NavBar";
import ProductScrollBar from "../../Components/productScrollbar/ProductScrollBar";

export default function Product() {
  return (
    <>
      <NavBar />
      <section className="container" dir="rtl">
        <div className="Product-container Product-container-max-768 Product-container-min-768">
          <div className="Product-img-slider Product-img-slider-max-768 Product-img-slider-min-768">
            <ProductScrollBar />
          </div>
          <div className="Product-detail-container"></div>
        </div>
      </section>
    </>
  );
}
