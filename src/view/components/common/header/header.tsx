import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import { AppState } from '../../../../data/types/main-props';
import LogoSVG from '../../../../assets/icons/logo.svg';
import LogoWhiteSVG from '../../../../assets/icons/logo-white.svg';
import NologinMessage from '../NologinMessage/NologinMessage';
import * as classes from './header.module.css';

interface HeaderProps {
  state: AppState;
  setState: React.Dispatch<React.SetStateAction<AppState>>;
  page: string;
}

function Header({ state, setState, page }: HeaderProps) {
  const color = page === 'main' ? 'var(--light-text-color)' : 'var(--primary-text-color)';
  const backgroundColor = page === 'main' ? 'var(--dark-bg-color)' : 'var(--default-bg-color';

  return (
    <>
      <header
        className={`${classes.header} ${page === 'main' ? classes.headerMain : ''}`}
        style={{ backgroundColor, color }}>
        <Link to="/">
          <div className={classes.logoWrapper}>
            <img
              src={page !== 'main' ? LogoSVG : LogoWhiteSVG}
              alt="rs school Logo"
              className={classes.logo}
            />
          </div>
        </Link>
        <Navbar state={state} page={page} />
      </header>
      <NologinMessage state={state} setState={setState} />
    </>
  );
}

export default Header;
