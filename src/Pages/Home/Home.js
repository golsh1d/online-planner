import React from "react";
import "./Home.css";
import NavBar from "../../Components/navbar/NavBar";
import HeroHeader from "../../Components/heroHeader/HeroHeader";
import ProductSlider from "../../Components/productSlider/ProductSlider";
import Banner from "../../Components/banner/Banner";
import About from "../../Components/about/About";
import Button from "../../Components/button/Button";
import Footer from "../../Components/footer/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroHeader />
      <ProductSlider />
      <Banner />
      <About />
      <Button />
      <Footer />
    </>
  );
}
