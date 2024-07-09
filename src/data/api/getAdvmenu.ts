/* eslint-disable no-console */
/* eslint-disable consistent-return */
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import { IMenuItem } from '../types/interfaces/mobileMenu';

function buildMenuTree(menuItems: IMenuItem[], parentId: string = '0'): IMenuItem[] {
  return menuItems
    .filter((item) => item.FathMenu === parentId)
    .map((item) => ({
      ...item,
      children: buildMenuTree(menuItems, item.N)
    }));
}

interface IPageCache {
  [key: string]: IMenuItem[] | null;
}

const pageCache: IPageCache = {
  empty: null
};

const tableMenu = {
  tableName: process.env.GOOGLESHEETS_TABLE_ADVMENU as string,
  sheetName: process.env.GOOGLESHEETS_TABLE_ADVMENU_SHEET as string
};

async function getAdvmenu(force: boolean) {
  if (force || !pageCache[tableMenu.tableName]) {
    try {
      const response = await axios.get(
        `${process.env.PYTHONANYWHERE_SERVER_URL}/getdata/${tableMenu.tableName}/${tableMenu.sheetName}/A1:E10000`
      );
      const resp: IMenuItem[] | null = response.data;
      if (resp) {
        pageCache[tableMenu.tableName] = resp;
      }
    } catch (err) {
      return null;
    }
  }

  if (pageCache[tableMenu.tableName]) {
    const result = pageCache[tableMenu.tableName];
    if (result) {
      const menuTree = buildMenuTree(result);
      console.log('menuTree', menuTree);
      return menuTree;
    }

    return null;
  }
  return null;
}

export default getAdvmenu;
