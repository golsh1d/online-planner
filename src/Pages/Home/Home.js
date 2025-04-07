import React from "react";
import "./Home.css";
import HeroHeader from "../../Components/heroHeader/HeroHeader";
import ProductSlider from "../../Components/productSlider/ProductSlider";

export default function Home() {
  return (
    <>
      <HeroHeader />
      <ProductSlider />
    </>
  );
}
