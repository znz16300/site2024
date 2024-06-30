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

async function getPage(force: boolean, tableNews: Table) {
  console.log('pageCache ', pageCache);
  if (force || !pageCache[tableNews.tableName]) {
    try {
      const response = await axios.get(
        `${process.env.PYTHONANYWHERE_SERVER_URL}/getdata/${tableNews.tableName}/${tableNews.sheetName}/A1:F10000`
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
    // TODO тут прибрати фільтр після реалізації фільтрації на бекенді
    const result = pageCache[tableNews.tableName]?.filter(
      (item) => item['Розділ'] === tableNews.title
    );
    return result;
  }
  return null;
}

export default getPage;

// setData(trData.filter((item) => item['Розділ'] === idTitle));
