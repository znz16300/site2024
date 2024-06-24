/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Slider, { Settings } from 'react-slick';
import * as classes from './simpleSlider.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Slide {
  id: string;
  image: string;
  name: string;
}

interface SimpleCarouselProps {
  slides: Slide[];
  settings: Settings;
}

export default function SimpleCarousel({ slides, settings }: SimpleCarouselProps) {
  // eslint-disable-next-line no-console
  console.log(slides);

  return (
    <Slider className={classes.container} {...settings}>
      {slides.map((slide) => (
        <div className={classes.imgBlock} key={slide.id}>
          <div className={classes.imgBlock} style={{ backgroundImage: `url(${slide.image})` }} />
          <div className={classes.title}>{slide.name}</div>
        </div>
      ))}
    </Slider>
  );
}
