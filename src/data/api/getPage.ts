/* eslint-disable no-console */
/* eslint-disable consistent-return */
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import responseToNews from '../utils/responseToNews';
import { ResponseNews } from '../types/interfaces/INews';

interface TableNews {
  tableName: string;
  sheetName: string;
  title: string;
}

interface DataObject {
  id: string;
  [key: string]: string;
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

let pageCache: ResponseNews[] | null = null;

async function getPage(force: boolean, tableNews: TableNews) {
  console.log('Прийшов заголовок ', tableNews.title);
  if (!pageCache || force) {
    try {
      const response = await axios.get(
        `https://schooltools.pythonanywhere.com/getmultiblock/${tableNews.tableName}`
      );
      pageCache = response.data;
    } catch (err) {
      return null;
    }
  }
  const result = cachToData(tableNews.title, pageCache);
  console.log(result);
  return result;
}

export default getPage;

// setData(trData.filter((item) => item['Розділ'] === idTitle));
