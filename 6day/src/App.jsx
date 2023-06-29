import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import './css/style.css'
import 'swiper/swiper-bundle.css';
SwiperCore.use([Navigation, Autoplay]);

export default function App () {

  // 6일차 : Carousel 구현
  // 7일차 : 2초후 자동으로 슬라이드되는 Carousel 구현

  return (
    <div id='wrap'>
      <div className="slider-container">
        <Swiper
          className='swiper'
          loop= {true}
          slidesPerView= {1}
          mousewheel= {true}
          navigation={{
            prevEl: '.prev',
            nextEl: '.next'
          }}
          autoplay= {{
            delay : 2000,
            disableOnInteraction : false
          }}
        >
          <SwiperSlide><img src="./img/slide_1.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="./img/slide_2.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="./img/slide_3.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="./img/slide_4.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="./img/slide_5.jpg" alt="" /></SwiperSlide>
        </Swiper>
        <button className='prev'>
          <img src="./img/prev-btn.png" alt="" />
        </button>
        <button className='next'>
          <img src="./img/prev-btn.png" alt="" />
        </button>
      </div>
    </div>
  );
};
