import React from "react";
import "./ProductScrollBar.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";

export default function ProductScrollBar() {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="myScrollBar"
      >
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/Img/169.png`} alt="firstPic" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/Img/169.png`} alt="secondPic" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`${process.env.PUBLIC_URL}/Img/169.png`} alt="thirdPic" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}