import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as classes from './gotodocuments.module.css';
import Button from '../common/Button/Button';

function Gotodocuments() {
  const navigate = useNavigate();

  const goToPage = (path: string) => {
    navigate(path);
  };

  return (
    <section className={classes.greeting}>
      <div className={classes.picture} />
      <div className={classes.textContent}>
        <h2>Документація закладу</h2>
        <p>
          Обов’язкова документація, розміщена на нашому сайті згідно статті 30 Закону України «Про
          освіту» від 05.09.2017 № 2145-VIII.
        </p>
        <div className={classes.wrapper}>
          <Button
            type="button"
            className={classes.catalogButton}
            onClick={() => goToPage('/documents')}>
            Читати
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Gotodocuments;
