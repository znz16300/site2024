/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import * as classes from './search.module.css';
// eslint-disable-next-line import/no-cycle
import Header from '../../components/common/header/header';
import Footer from '../../components/common/footer/footer';
import Modal from '../../components/common/modal/modal';
import cross from '../../../assets/icons/cross.svg';

function Search() {
  const [visible, setVisible] = useState<boolean>(true);
  return (
    <div className={`${classes.searchWrapper}`}>
      <Header page="search" />
      <section className={classes.search}>
        <div className={classes.resultContainer} />
        <button onClick={() => setVisible(true)}>Новий пошук</button>
        {/* <div className={classes.modalContainer}>Search</div> */}
        <Modal background="rgb(248, 248, 248)" visible={visible} setVisible={setVisible}>
          <div className={classes.btnContainer}>
            <button
              className={classes.btn}
              type="button"
              style={{
                backgroundImage: `url('${cross}')`
              }}
              onClick={() => setVisible(false)}
              aria-label="close"
            />
          </div>
        </Modal>
      </section>
      <Footer />
    </div>
  );
}

export default Search;
