import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import './css/style.css'
import 'swiper/swiper-bundle.css';
SwiperCore.use([Navigation]);

export default function App () {

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
