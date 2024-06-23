import React, { useState, KeyboardEvent } from 'react';
import { Link } from 'react-router-dom';
import { MainProps } from '../../../../data/types/main-props';
import * as classes from './navbar.module.css';

function Navbar({ state }: MainProps) {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className={classes.burgerBar} />
        <div className={classes.burgerBar} />
        <div className={classes.burgerBar} />
      </div>
      <div className={`${classes.menu} ${isOpen ? classes.show : ''}`}>
        <Link to="/" onClick={toggleMenu}>
          Головна
        </Link>
        <Link to="/news" onClick={toggleMenu}>
          Новини
        </Link>
        <Link to="/documents" onClick={toggleMenu}>
          Документи
        </Link>
        {!state.userLoggedIn && (
          <>
            <Link to="/signup" onClick={toggleMenu}>
              Реєстрація
            </Link>
            <Link to="/login" onClick={toggleMenu}>
              Увійти
            </Link>
          </>
        )}
        {state.userLoggedIn && (
          <>
            <Link to="/logout" onClick={toggleMenu}>
              Вийти
            </Link>
            <Link to="/profile" onClick={toggleMenu}>
              Профіль
            </Link>
          </>
        )}
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
