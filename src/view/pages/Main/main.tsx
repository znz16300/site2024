import React from 'react';
import Header from '../../components/common/header/header';
import Footer from '../../components/common/footer/footer';
import { MainProps } from '../../../data/types/main-props';
import * as classes from './main.module.css';
import Greeting from './greeting';

function Main({ state, setState }: MainProps) {
  return (
    <>
      <Header state={state} setState={setState} />
      <main className={classes.main}>
        <Greeting />
      </main>
      <Footer />
    </>
  );
}

export default Main;
