import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button/Button';
import * as classes from './publicinfo.module.css';

function PublicInfo() {
  const navigate = useNavigate();

  function goToPage(path: string) {
    navigate(path);
  }

  return (
    <section className={classes.publicWrapper}>
      <div className={classes.picture} />
      <div>
        <h2 className={classes.title}>Публічна інформація</h2>
        <Button type="button" className={classes.btn} onClick={() => goToPage('/openinfo')}>
          Відкритість та прозорість
        </Button>
      </div>
    </section>
  );
}

export default PublicInfo;
