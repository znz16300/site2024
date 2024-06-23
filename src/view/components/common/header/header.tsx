import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import * as classes from './header.module.css';
import { MainProps } from '../../../../data/types/main-props';
import LogoSVG from '../../../../assets/icon/logo.svg';
import NologinMessage from '../NologinMessage/NologinMessage';

function Header({ state, setState }: MainProps) {
  return (
    <>
      <header className={classes.header}>
        <Link to="/">
          <img src={LogoSVG} alt="rs school Logo" className={classes.logo} />
        </Link>
        <Navbar state={state} setState={setState} />
      </header>
      <NologinMessage state={state} setState={setState} />
    </>
  );
}

export default Header;
