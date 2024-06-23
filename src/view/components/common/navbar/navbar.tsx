import React, { useState, KeyboardEvent } from 'react';
import { Link } from 'react-router-dom';
import { AppState } from '../../../../data/types/main-props';
import * as classes from './navbar.module.css';

const SHOWLOGIN = false;

interface NavbarProps {
  state: AppState;
  page: string;
}

function Navbar({ state, page }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuMainBg = page === 'main' ? classes.menuMain : '';
  const colorText = page === 'main' ? '#fff' : '#000';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenuFromKey = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
      e.preventDefault();
      toggleMenu();
    }
  };

  return (
    <nav className={classes.navbar}>
      <div
        className={`${classes.burger} ${isOpen ? classes.rotate : ''}`}
        onClick={toggleMenu}
        onKeyDown={toggleMenuFromKey}
        role="button"
        tabIndex={0}
        aria-label="Toggle menu">
        <div className={classes.burgerBar} style={{ backgroundColor: colorText }} />
        <div className={classes.burgerBar} style={{ backgroundColor: colorText }} />
        <div className={classes.burgerBar} style={{ backgroundColor: colorText }} />
      </div>
      <div className={`${classes.menu} ${menuMainBg} ${isOpen ? classes.show : ''}`}>
        <Link to="/" onClick={toggleMenu}>
          Головна
        </Link>
        <Link to="/news" onClick={toggleMenu}>
          Новини
        </Link>
        <Link to="/documents" onClick={toggleMenu}>
          Документи
        </Link>
        <Link to="/acts" onClick={toggleMenu}>
          Діяльність
        </Link>
        {SHOWLOGIN &&
          (!state.userLoggedIn ? (
            <>
              <Link to="/signup" onClick={toggleMenu}>
                Реєстрація
              </Link>
              <Link to="/login" onClick={toggleMenu}>
                Увійти
              </Link>
            </>
          ) : (
            <>
              <Link to="/logout" onClick={toggleMenu}>
                Вийти
              </Link>
              <Link to="/profile" onClick={toggleMenu}>
                Профіль
              </Link>
            </>
          ))}

        <Link to="/about" onClick={toggleMenu}>
          Контакти
        </Link>
      </div>
      {isOpen ? (
        <div
          className={classes.shadow}
          onClick={toggleMenu}
          onKeyDown={toggleMenuFromKey}
          role="button"
          tabIndex={0}
          aria-label="Toggle menu"
        />
      ) : (
        <div />
      )}
    </nav>
  );
}

export default Navbar;
