import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-cycle
import Navbar from '../navbar/navbar';
import LogoSVG from '../../../../assets/icons/logo.svg';
import LogoWhiteSVG from '../../../../assets/icons/logo-white.svg';
import NologinMessage from '../NologinMessage/NologinMessage';
import * as classes from './header.module.css';
// eslint-disable-next-line import/no-cycle

interface HeaderProps {
  page: string;
}

function Header({ page }: HeaderProps) {
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
            <div className={classes.title} style={{ color }}>
              Куликіський ліцей
            </div>
          </div>
        </Link>
        <Navbar page={page} />
      </header>
      <NologinMessage />
    </>
  );
}

export default Header;
