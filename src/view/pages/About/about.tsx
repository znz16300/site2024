import React from 'react';
import Footer from '../../components/common/footer/footer';
import * as classes from './about.module.css';
// eslint-disable-next-line import/no-cycle
import Header from '../../components/common/header/header';

const page = 'about';

function About() {
  return (
    <div className={classes.wrapper}>
      <Header page={page} />
      <main className={classes.about}>
        <img src="./photo_2022-11-29_18-00-54.jpg" alt="" />
      </main>
      <Footer />
    </div>
  );
}

export default About;
