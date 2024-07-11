/* eslint-disable no-param-reassign */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
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
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const selectLevel = (level: number, menu?: IMenuItem[]) => {
    if (!menu) {
      return;
    }
    setLevel(level);
    setCurrentMenu((l) => {
      l[level] = menu;
      return l;
    });
  };

  const backLevel = () => {
    setLevel(level - 1);
    setCurrentMenu((l) => {
      l[level] = [];
      return l;
    });
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
        <div className={cn(classes.mobileMenuBox, { [classes.mobileMenuBoxShow]: isMenuOpened })}>
          <div className={classes.menuHeader}>
            {level > 1 && (
              <button className={classes.backButton} onClick={() => backLevel()}>
                <ArrowLeftIcon width="2rem" height="2rem" fill="var(--light-text-color)" />
                Назад
              </button>
            )}
            {level === 1 && <div className={classes.backButton}>Menu</div>}
            <button className={classes.closeButton} onClick={() => setIsMenuOpened(false)}>
              <CloseXIcon width="2rem" height="2rem" fill="var(--light-text-color)" />
            </button>
          </div>
          <div
            className={classes.level}
            style={{ transform: `translateX(calc(-100% * ${level - 1} - 24px * ${level - 1}))` }}>
            {currentMenu.map((item, index) => (
              <div key={index}>
                {item.map((m) => (
                  <div key={m.Title}>
                    {m.children && m.link === '#' && (
                      <button
                        className={classes.item}
                        onClick={() => selectLevel(level + 1, m.children)}>
                        <div>{m.Title}</div> <ArrowRightIcon width="5rem" height="5rem" />
                      </button>
                    )}
                    {m.link && m.link !== '#' && (
                      <Link to={urlUpdate(m.link)} className={classes.item}>
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
