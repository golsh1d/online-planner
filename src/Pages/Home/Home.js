import React from "react";
import "./Home.css";
import HeroHeader from "../../Components/heroHeader/HeroHeader";
import ProductSlider from "../../Components/productSlider/ProductSlider";
import Banner from "../../Components/banner/Banner";
import About from "../../Components/about/About";

export default function Home() {
  return (
    <>
      <HeroHeader />
      <ProductSlider />
      <Banner />
      <About />
    </>
  );
}
