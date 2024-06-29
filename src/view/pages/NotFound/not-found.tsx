import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/common/footer/footer';
import Header from '../../components/common/header/header';
import * as classes from './not-found.module.css';
import Button from '../../components/common/Button/Button';

const page = 'noFound';

function Notfound() {
  const navigate = useNavigate();
  return (
    <div className={classes.notFoundWrapper}>
      <Header page={page} />
      <section className={classes.notFound}>
        <div className={classes.title}>404</div>
        <div className={classes.subtitle}>Something went wrong!</div>
        <Button onClick={() => navigate('./')}>To homepage</Button>
      </section>
      <Footer />
    </div>
  );
}

export default Notfound;
