/* eslint-disable no-console */
/* eslint-disable consistent-return */
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

interface DataObject {
  id: string;
  N: string;
  Title: string;
  FathMenu: string;
  show: string;
  link: string;
  children?: DataObject[];
}

function buildMenuTree(menuItems: DataObject[], parentId: string = '0'): DataObject[] {
  return menuItems
    .filter((item) => item.FathMenu === parentId)
    .map((item) => ({
      ...item,
      children: buildMenuTree(menuItems, item.N)
    }));
}

interface IPageCache {
  [key: string]: DataObject[] | null;
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
      const resp: DataObject[] | null = response.data;
      if (resp) {
        pageCache[tableMenu.tableName] = resp;
      }
    } catch (err) {
      return null;
    }
  }

  if (pageCache[tableMenu.tableName]) {
    const result = pageCache[tableMenu.tableName];
    console.log(result?.length);
    console.log(result);
    if (result) {
      const menuTree = buildMenuTree(result);
      console.log('---->>>> ', JSON.stringify(menuTree, null, 2));
      return menuTree;
    }

    return null;
  }
  return null;
}

export default getAdvmenu;
