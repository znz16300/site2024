/* eslint-disable no-console */
import React from 'react';
import { Link } from 'react-router-dom';
import * as classes from './advmenuitem.module.css';

interface DataObject {
  id: string;
  N: string;
  Title: string;
  FathMenu: string;
  show: string;
  link: string;
  children?: DataObject[];
}

interface AdvmenuItemProps {
  title: string;
  level: string;
  menues: DataObject[];
}

function AdvmenuItem({ menues, level, title }: AdvmenuItemProps) {
  // const [addedMenu, setAddedMenu] = useState<string>([]);
  const levelsMenu: DataObject[] | null = menues.filter(
    (item) => item.FathMenu === level && item.show === '1'
  );
  console.log(title, levelsMenu);

  return (
    <div className={classes.container}>
      <span className={classes.label}>{title}</span>
      <ul>
        {levelsMenu.map((item: DataObject) =>
          item.link.length > 2 ? (
            <li>
              <Link key={item.id} to={item.link}>
                {item.Title}
              </Link>
            </li>
          ) : (
            // <li key={item.id}>{item.Title}</li>
            <AdvmenuItem title={item.Title} level={item.N} menues={menues} />
          )
        )}
      </ul>
    </div>
  );
}

export default AdvmenuItem;
