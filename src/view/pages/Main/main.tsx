import React from 'react';
import Footer from '../../components/common/footer/footer';
import * as classes from './main.module.css';
import Greeting from '../../components/Greeteng/greeting';
import Gotodocuments from '../../components/Gotodocuments/Gotodocuments';
import MaterialBase from '../../components/MaterialBase/MaterialBase';
import ActsMain from '../../components/ActsMain/ActsMain';
import PublicInfo from '../../components/PublicInfo/PublicInfo';
// eslint-disable-next-line import/no-cycle
import Header from '../../components/common/header/header';

function Main() {
  return (
    <>
      <Header page="main" />
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
