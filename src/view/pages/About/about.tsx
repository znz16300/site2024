import React from 'react';
import Header from '../../components/common/header/header';
import { MainProps } from '../../../data/types/main-props';
import Footer from '../../components/common/footer/footer';
import * as classes from './about.module.css';

const page = 'about';

function About({ state, setState }: MainProps) {
  return (
    <div className={classes.wrapper}>
      <Header state={state} setState={setState} page={page} />
      <main className={classes.about}>
        <img src="./photo_2022-11-29_18-00-54.jpg" alt="" />
      </main>
      <Footer />
    </div>
  );
}

export default About;
