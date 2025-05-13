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
          <img src="./Img/169.png" alt="firstPic" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./Img/169.png" alt="secondPic" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./Img/169.png" alt="thirdPic" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}