/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as classes from './advmenuitem.module.css';
import urlUpdate from '../../../data/utils/urlUpdater';
import downIcon from '../../../assets/icons/arrow_drop_down_24dp_FILL0_wght400_GRAD0_opsz24.svg';
import rightIcon from '../../../assets/icons/arrow_right_24dp_FILL0_wght400_GRAD0_opsz24.svg';

interface DataObject {
  id: string;
  N: string;
  Title: string;
  FathMenu: string;
  show: string;
  link: string;
  children?: DataObject[];
}

interface MenuProps {
  menuItems: DataObject[];
}

const MenuItem: React.FC<{ item: DataObject }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li>
      <div onClick={handleClick} className={classes.menuItem}>
        {item.children && item.children.length > 0 ? (
          <span>{isOpen ? <img src={downIcon} /> : <img src={rightIcon} />}</span>
        ) : (
          <span style={{ marginRight: '2.5rem' }} />
        )}
        <Link to={urlUpdate(item.link)}>{item.Title}</Link>
      </div>
      {isOpen && item.children && item.children.length > 0 && (
        <ul className={classes.subMenu}>
          {item.children.map((child) => (
            <MenuItem key={child.id} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

const Menu: React.FC<MenuProps> = ({ menuItems }) => (
  <ul className={classes.menu}>
    {menuItems.map((item) => (
      <MenuItem key={item.id} item={item} />
    ))}
  </ul>
);

export default Menu;
