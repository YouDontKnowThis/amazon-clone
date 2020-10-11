import React from "react";

// import Swiper core and required components
import SwiperCore, { Navigation, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "./Slider1.scss";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

// install Swiper components
SwiperCore.use([Navigation, A11y, Autoplay]);

function Slider1(props) {
  return (
    <div className="slider__one">
      <Swiper
        className="slider__oneMain"
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation
      >
        {props.images.map((img, i) => {
          return (
            <SwiperSlide key={`slide${i}`}>
              <img className="slider__oneImg" src={img} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Slider1;
