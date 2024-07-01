/* eslint-disable no-console */
/* eslint-disable consistent-return */
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

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
  [key: string]: DataObject[] | null;
}

const pageCache: IPageCache = {
  empty: null
};

async function getDocuments(force: boolean, tableNews: Table) {
  if (force || !pageCache[tableNews.tableName]) {
    try {
      const response = await axios.get(
        `${process.env.PYTHONANYWHERE_SERVER_URL}/getdata/${tableNews.tableName}/${tableNews.sheetName}/A1:G10000`
      );
      const resp: DataObject[] | null = response.data;
      if (resp) {
        pageCache[tableNews.tableName] = resp;
      }
    } catch (err) {
      return null;
    }
  }

  if (pageCache[tableNews.tableName]) {
    const result = pageCache[tableNews.tableName];
    return result;
  }
  return null;
}

export default getDocuments;

// setData(trData.filter((item) => item['Розділ'] === idTitle));
