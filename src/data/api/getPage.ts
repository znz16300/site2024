/* eslint-disable no-console */
/* eslint-disable consistent-return */
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import responseToNews from '../utils/responseToNews';
import { ResponseNews } from '../types/interfaces/INews';

interface Table {
  tableName: string;
  sheetName: string;
  title: string;
}

interface DataObject {
  id: string;
  [key: string]: string;
}

interface IPageCache {
  [key: string]: ResponseNews[] | null;
}

function cachToData(title: string, cache: ResponseNews[] | null): DataObject[] | null {
  if (cache) {
    const trData: DataObject[] | null = responseToNews('Аркуш1', cache);
    if (trData) {
      const result = trData.filter((item: DataObject) => item['Розділ'] === title);
      return result;
    }
  }
  return null;
}

const pageCache: IPageCache = {
  empty: null
};

async function getPage(force: boolean, tableNews: Table) {
  console.log('pageCache ', pageCache);
  if (force || !pageCache[tableNews.tableName]) {
    try {
      const response = await axios.get(
        `https://schooltools.pythonanywhere.com/getmultiblock/${tableNews.tableName}`
      );
      const resp: ResponseNews[] | null = response.data;
      if (resp) {
        pageCache[tableNews.tableName] = resp;
      }
    } catch (err) {
      return null;
    }
  }

  if (pageCache[tableNews.tableName]) {
    const result = cachToData(tableNews.title, pageCache[tableNews.tableName]);
    return result;
  }
  return null;
}

export default getPage;

// setData(trData.filter((item) => item['Розділ'] === idTitle));
