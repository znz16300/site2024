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

function cachToData(cache: ResponseNews[] | null, sheetName: string): DataObject[] | null {
  if (cache) {
    console.log('cache', cache);
    console.log('sheetName ', sheetName);
    const trData: DataObject[] | null = responseToNews(sheetName, cache);
    if (trData) {
      console.log('trData', trData);
      return trData;
    }
  }
  return null;
}

const pageCache: IPageCache = {
  empty: null
};

async function getDocuments(force: boolean, tableNews: Table) {
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
    const result = cachToData(pageCache[tableNews.tableName], tableNews.sheetName);
    return result;
  }
  return null;
}

export default getDocuments;

// setData(trData.filter((item) => item['Розділ'] === idTitle));
