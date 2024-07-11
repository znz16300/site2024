/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
import React, { useState, KeyboardEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as classes from './navbar.module.css';
// eslint-disable-next-line import/no-cycle
import { useAppContext } from '../../../../App';
import loginDarkIcon from '../../../../assets/icons/login.svg';
import loginWhiteIcon from '../../../../assets/icons/login_white.svg';
import logoutDarkIcon from '../../../../assets/icons/logout.svg';
import logoutWhiteIcon from '../../../../assets/icons/logout_white.svg';
import searchDarkIcon from '../../../../assets/icons/search.svg';
import searchWhiteIcon from '../../../../assets/icons/search_white.svg';
import { useAuth } from '../../../../data/api/AuthProvider';
import MobileMenu from '../MobileMenu/MobileMenu';
import { IMenuItem } from '../../../../data/types/interfaces/mobileMenu';
import getAdvmenu from '../../../../data/api/getAdvmenu';
import SearchPanel from '../../SearchPanel/SearchPanel';
import getSearch from '../../../../data/api/getSearch';

const SHOWLOGIN = true;

interface NavbarProps {
  page: string;
}

function Navbar({ page }: NavbarProps) {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const { state, setState } = useAppContext();
  const loginIcon = page === 'main' ? loginWhiteIcon : loginDarkIcon;
  const logoutIcon = page === 'main' ? logoutWhiteIcon : logoutDarkIcon;
  const searchIcon = page === 'main' ? searchWhiteIcon : searchDarkIcon;
  let userImg = '';
  const { user } = useAuth();
  if (state.userLoggedIn) {
    userImg = user.picture;
  }

  const menuMainBg = page === 'main' ? classes.menuMain : '';
  const colorText = page === 'main' ? '#fff' : '#000';
  const { login } = useAuth();
  const { logout } = useAuth();

  const toggleLog = async (act: string) => {
    if (act === 'login') {
      localStorage.setItem('oldHref', window.location.href);
      await login();
    } else if (act === 'logout') {
      localStorage.setItem('oldHref', window.location.href);
      await logout();
      setState((prevState) => ({ ...prevState, userLoggedIn: false, user: null }));
    }
    setIsOpen(!isOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenuFromKey = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
      e.preventDefault();
      toggleMenu();
    }
  };

  useEffect(() => {
    if (user) {
      setState((prevState) => ({ ...prevState, userLoggedIn: true, user }));
      userImg = user.picture;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const [advmenu, setAdvmenu] = useState<IMenuItem[] | null>(null);
  useEffect(() => {
    async function fetchAdvmenu() {
      try {
        const menu: IMenuItem[] | null = await getAdvmenu(false);
        if (menu) {
          // eslint-disable-next-line no-console
          console.log(menu);
          setAdvmenu(menu);
        }
      } catch {
        // eslint-disable-next-line no-console
        console.log('noMenu');
      }
    }
    fetchAdvmenu();
  }, []);

  function handleMore(): void {
    toggleMenu();
    setIsMenuOpened(true);
  }

  function handleSearch(): void {
    toggleMenu();
    // оновлюємо новини, документи та сторінки
    getSearch('', state.oauth?.google_public_api_key as string);

    setIsSearch(true);
  }

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
        <Link to="/courses" onClick={toggleMenu}>
          Курси
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
        <Link to="/contacts" onClick={toggleMenu}>
          Контакти
        </Link>
        <div className={classes.btnMore} onClick={handleMore}>
          Більше...
        </div>
        <div onClick={handleSearch} title="Пошук на сайті">
          <div
            className={classes.icon}
            style={{ marginLeft: '5rem', backgroundImage: `url('${searchIcon}')` }}
          />
        </div>

        {SHOWLOGIN &&
          (!state.userLoggedIn ? (
            <div onClick={() => toggleLog('login')} title="Зайти">
              <div className={classes.icon} style={{ backgroundImage: `url('${loginIcon}')` }} />
            </div>
          ) : (
            <div className={classes.iconWrapper}>
              <Link to="/profile" onClick={toggleMenu} title="Профіль">
                <div className={classes.icon} style={{ backgroundImage: `url('${userImg}')` }} />
              </Link>
              <div onClick={() => toggleLog('logout')} title="Вийти">
                <div className={classes.icon} style={{ backgroundImage: `url('${logoutIcon}')` }} />
              </div>
            </div>
          ))}
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
      {advmenu && isMenuOpened && (
        <MobileMenu
          menuAll={advmenu}
          isMenuOpened={isMenuOpened}
          setIsMenuOpened={setIsMenuOpened}
        />
      )}
      {isSearch && <SearchPanel isSearch={isSearch} setIsSearch={setIsSearch} />}
    </nav>
  );
}

export default Navbar;
