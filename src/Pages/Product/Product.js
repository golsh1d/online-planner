import React from "react";
import { useState } from "react";
import "./Product.css";
import NavBar from "../../Components/navbar/NavBar";
import ProductScrollBar from "../../Components/productScrollbar/ProductScrollBar";
import TechDetail from "../../Components/techDetail/TechDetail";

export default function Product() {
  const [techDetails, setTechDetails] = useState([
    { id: 1, title: "نوع کاغذ", des: "100 گرمی" },
    { id: 2, title: "نوع دفتر", des: "برنامه ریزی" },
    { id: 3, title: "نوع صحافی", des: "سیمی" },
    { id: 4, title: "نوع جلد", des: "گلاسه" },
    { id: 5, title: "ابعاد", des: "A5" },
    { id: 6, title: "قطع", des: "وزیری" },
    { id: 7, title: "فرم صحافی", des: "عمودی" },
    { id: 8, title: "تعداد برگ", des: "112" },
  ]);

  return (
    <>
      <NavBar />
      <section className="container" dir="rtl">
        <div className="Product-container Product-container-max-768 Product-container-min-768">
          <div className="Product-img-slider Product-img-slider-max-768 Product-img-slider-min-768">
            <ProductScrollBar />
          </div>
          <div className="Product-detail-container Product-detail-container-max-768 Product-detail-container-min-768">
            <div className="Product-tech-detail-container Product-tech-detail-container-max-768 Product-tech-detail-container-min-768 Product-tech-detail-container-min-1280">
              {techDetails.map((detail) => (
                <TechDetail {...detail} key={detail.id}/>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
