// // SwiperSlider.jsx
// import React from 'react';
// import Slider from 'react-slick';

// import * as classes from './swiperSlider.module.css';

// // Завантажуємо необхідні модулі Swiper
// SwiperCore.use([]);

// interface Slide {
//   id: string;
//   image: string;
//   name: string;
// }

// interface SwiperSliderProps {
//   slides: Slide[];
// }

// function SwiperSlider({ slides }: SwiperSliderProps) {
//   const grabCursor = true;
//   const centeredSlides = false; // Вимикаємо центрування слайдів
//   const loop = true;
//   const slidesPerView = 3; // Показуємо одночасно 3 слайди
//   const spaceBetween = 10; // Відстань між слайдами

//   return (
//     <Swiper
//       className={classes.swiper}
//       spaceBetween={spaceBetween}
//       effect="coverflow"
//       grabCursor={grabCursor}
//       centeredSlides={centeredSlides}
//       loop={loop}
//       slidesPerView={slidesPerView}
//       coverflowEffect={{
//         rotate: 0,
//         stretch: 0,
//         depth: 100,
//         modifier: 2.5
//       }}
//       navigation-next-el=".custom-next-button"
//       navigation-prev-el=".custom-prev-button"
//       pagination-clickable="true"
//       pagination-dynamic-bullets="true"
//       pagination={{ clickable: true }}
//       navigation={grabCursor}>
//       {slides.map((slide) => (
//         <SwiperSlide key={slide.id}>
//           <div>
//             <div className={classes.imgBlock} style={{ backgroundImage: `url(${slide.image})` }} />
//             <div>{slide.name}</div>
//           </div>
//         </SwiperSlide>
//       ))}
//       <div className="swiper-pagination" />
//     </Swiper>
//   );
// }

// export default SwiperSlider;
