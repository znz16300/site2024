import React from 'react';
import Header from '../../components/common/header/header';
import Footer from '../../components/common/footer/footer';
import { MainProps } from '../../../data/types/main-props';
import * as classes from './main.module.css';
import Greeting from '../../components/Greeteng/greeting';
import Gotodocuments from '../../components/Gotodocuments/Gotodocuments';
import MaterialBase from '../../components/MaterialBase/MaterialBase';
import ActsMain from '../../components/ActsMain/ActsMain';
import PublicInfo from '../../components/PublicInfo/PublicInfo';

const page = 'main';

function Main({ state, setState }: MainProps) {
  return (
    <>
      <Header state={state} setState={setState} page={page} />
      <main className={classes.main}>
        <Greeting />
        <Gotodocuments />
        <MaterialBase />
        <ActsMain />
        <PublicInfo />
      </main>
      <Footer />
    </>
  );
}

export default Main;
