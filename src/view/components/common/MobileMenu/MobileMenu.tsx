/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useRef, useEffect } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import * as classes from './mobileMenu.module.css';
import { IMenuItem } from '../../../../data/types/interfaces/mobileMenu';
import ArrowLeftIcon from '../icons/ArrowLeftIcon';
import CloseXIcon from '../icons/closeXIcon';
import ArrowRightIcon from '../icons/ArrowRightIcon';
import urlUpdate from '../../../../data/utils/urlUpdater';

interface MobileMenuProps {
  menuAll: IMenuItem[];
  isMenuOpened: boolean;
  setIsMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileMenu({
  menuAll,
  isMenuOpened,
  setIsMenuOpened
}: MobileMenuProps): JSX.Element {
  const [level, setLevel] = useState(1);
  const [currentMenu, setCurrentMenu] = useState<IMenuItem[][]>([menuAll]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const setMenuRef = (element: HTMLDivElement) => {
    menuRef.current = element;
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpened(false);
      } else if (e.key === 'ArrowDown') {
        setActiveIndex((prevIndex) => (prevIndex + 1) % currentMenu[level - 1].length);
      } else if (e.key === 'ArrowUp') {
        setActiveIndex(
          (prevIndex) =>
            (prevIndex - 1 + currentMenu[level - 1].length) % currentMenu[level - 1].length
        );
      } else if (e.key === 'Enter') {
        const activeItem = currentMenu[level - 1][activeIndex];
        if (activeItem.children && activeItem.link === '#') {
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          selectLevel(null, level + 1, activeItem.children);
        } else if (activeItem.link && activeItem.link !== '#') {
          // Assuming Link is for navigation, you might need to trigger navigation here
          window.location.href = urlUpdate(activeItem.link);
        }
      }
    };

    if (isMenuOpened) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMenuOpened, currentMenu, level, activeIndex]);

  const selectLevel = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    levelIt: number,
    menu?: IMenuItem[]
  ) => {
    if (!menu) {
      return;
    }
    if (menuRef.current) {
      menuRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setLevel(levelIt);
    setCurrentMenu((l) => {
      l[levelIt] = menu;
      return l;
    });
    setActiveIndex(0); // Reset active index when changing levels
  };

  const backLevel = () => {
    console.log('back');
    setLevel(level - 1);
    setCurrentMenu((l) => {
      l[level] = [];
      return l;
    });
    setActiveIndex(0); // Reset active index when going back
  };

  return (
    <>
      <button type="button" onClick={() => setIsMenuOpened(true)}>
        Відкрити меню
      </button>
      <nav className={classes.menu} role="navigation">
        <div
          onClick={() => setIsMenuOpened(false)}
          className={cn(classes.cover, { [classes.coverShow]: isMenuOpened })}
        />
        <div
          ref={setMenuRef}
          className={cn(classes.mobileMenuBox, { [classes.mobileMenuBoxShow]: isMenuOpened })}>
          <div className={classes.menuHeader}>
            {level > 1 && (
              <button className={classes.backButton} onClick={() => backLevel()}>
                <ArrowLeftIcon width="2rem" height="2rem" fill="var(--light-text-color)" />
                Назад
              </button>
            )}
            {level === 1 && <div className={classes.backButton} />}
            <button className={classes.closeButton} onClick={() => setIsMenuOpened(false)}>
              <CloseXIcon width="2rem" height="2rem" fill="var(--light-text-color)" />
            </button>
          </div>
          <div
            className={classes.level}
            style={{ transform: `translateX(calc(-100% * ${level - 1} - 24px * ${level - 1}))` }}>
            {currentMenu.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <div key={index}>
                {item.map((m, i) => (
                  <div key={m.Title}>
                    {m.children && m.link === '#' && (
                      <button
                        className={cn(classes.item, { [classes.activeItem]: i === activeIndex })}
                        onClick={(e) => selectLevel(e, level + 1, m.children)}>
                        <div>{m.Title}</div> <ArrowRightIcon width="5rem" height="5rem" />
                      </button>
                    )}
                    {m.link && m.link !== '#' && (
                      <Link
                        to={urlUpdate(m.link)}
                        className={cn(classes.item, { [classes.activeItem]: i === activeIndex })}>
                        {m.Title}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
