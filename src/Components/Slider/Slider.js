import React from "react";
import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <div className="Slider-container Slider-container-max-768 Slider-container-min-768">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          direction={"vertical"}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          style={{
            "--swiper-pagination-color": "#706d54",
            "--swiper-pagination-bullet-size": "20px",
            "--swiper-pagination-bullet-vertical-gap": "10px",
          }}
        >
          <SwiperSlide>
            <img src={`${process.env.PUBLIC_URL}/Img/planner1.jpg`} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`${process.env.PUBLIC_URL}/Img/planner2.jpg`} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`${process.env.PUBLIC_URL}/Img/planner3.jpg`} alt="img" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="Slider-container-sm Slider-container-sm-max-768 Slider-container-sm-min-768">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          style={{
            "--swiper-pagination-color": "#706d54",
            "--swiper-pagination-bullet-size": "18px",
            "--swiper-pagination-bullet-vertical-gap": "8px",
            "--swiper-pagination-bottom": "0px",
          }}
        >
          <SwiperSlide>
            <img src={`${process.env.PUBLIC_URL}/Img/planner1.jpg`} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`${process.env.PUBLIC_URL}/Img/planner2.jpg`} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={`${process.env.PUBLIC_URL}/Img/planner3.jpg`} alt="img" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}