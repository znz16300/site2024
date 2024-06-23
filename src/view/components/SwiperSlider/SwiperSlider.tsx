// SwiperSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import * as classes from './swiperSlider.module.css';

interface Slide {
  id: string;
  image: string;
  name: string;
}

interface SwiperSliderProps {
  slides: Slide[];
}

function SwiperSlider({ slides }: SwiperSliderProps) {
  const grabCursor = true;
  const centeredSlides = true;
  const loop = true;
  const slidesPerView = 2; // Кількість видимих слайдів
  const spaceBetween = 1; // Відстань між слайдами

  return (
    <Swiper
      spaceBetween={spaceBetween}
      effect="coverflow"
      grabCursor={grabCursor}
      centeredSlides={centeredSlides}
      loop={loop}
      slidesPerView={slidesPerView}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5
      }}
      pagination={{ clickable: true }}
      navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}>
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div>
            <div className={classes.imgBlock} style={{ backgroundImage: `url(${slide.image})` }} />
            <div>{slide.name}</div>
          </div>
        </SwiperSlide>
      ))}
      ,{/* Додайте більше компонентів SwiperSlide за потреби */}
    </Swiper>
  );
}

export default SwiperSlider;
