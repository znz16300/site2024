import React from 'react';
import * as classes from './materialbase.module.css';

function MaterialBase() {
  return (
    <section className={classes.materials}>
      <div className={classes.picture} />
      <h2 className={classes.title}>Матеріально-технічна база закладу</h2>
      {/* <SwiperSlider slides={slides} /> */}
    </section>
  );
}

export default MaterialBase;
