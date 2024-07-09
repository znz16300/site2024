// /* eslint-disable no-console */
// /* eslint-disable @typescript-eslint/dot-notation */
// /* eslint-disable react/jsx-no-bind */
// import React, { useEffect, useState } from 'react';
// import * as classes from './advMenu.module.css';
// import getAdvmenu from '../../../data/api/getAdvmenu';
// // import AdvmenuItem from '../AdvmenuItem/AdvmenuItem';
// import Menu from '../Menu/Menu';
// import { IMenuItem } from '../../../data/types/interfaces/mobileMenu';

// interface DataObject {
//   id: string;
//   N: string;
//   Title: string;
//   FathMenu: string;
//   show: string;
//   link: string;
//   children?: DataObject[];
// }

// function AdvMenu() {
//   // const navigate = useNavigate();
//   const [advmenu, setAdvmenu] = useState<DataObject[] | null>(null);
//   useEffect(() => {
//     async function fetchAdvmenu() {
//       try {
//         const menu: IMenuItem[] | null = await getAdvmenu(false);
//         if (menu) {
//           console.log(menu);

//           setAdvmenu(menu);
//         }
//       } catch {
//         // eslint-disable-next-line no-console
//         console.log('noMenu');
//       }
//     }
//     fetchAdvmenu();
//   }, []);

//   return (
//     <section className={classes.advMenu}>{advmenu ? <Menu menuItems={advmenu} /> : null}</section>
//   );
// }

// export default AdvMenu;
