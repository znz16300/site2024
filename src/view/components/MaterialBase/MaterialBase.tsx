import React from 'react';
import * as classes from './materialbase.module.css';
import SwiperSlider from '../SwiperSlider/SwiperSlider';

const slides = [
  {
    id: '1',
    image:
      'https://interdesign.com.ua/app_default/media/project/schools/4/_cache/komp2_280_220_4.jpg',
    name: 'name 1'
  },
  {
    id: '2',
    image:
      'https://interdesign.com.ua/app_default/media/project/schools/4/_cache/komp2_280_220_4.jpg',
    name: 'name 2'
  },
  {
    id: '3',
    image:
      'https://interdesign.com.ua/app_default/media/project/schools/4/_cache/komp2_280_220_4.jpg',
    name: 'name 3'
  },
  {
    id: '4',
    image:
      'https://interdesign.com.ua/app_default/media/project/schools/4/_cache/komp2_280_220_4.jpg',
    name: 'name 4'
  }
];

function MaterialBase() {
  return (
    <section className={classes.materials}>
      <div className={classes.picture} />
      <h2 className={classes.title}>Матеріально-технічна база закладу</h2>
      <SwiperSlider slides={slides} />
    </section>
  );
}

export default MaterialBase;
