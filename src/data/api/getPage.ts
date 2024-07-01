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
  const indexCach = `${tableNews.tableName}-${tableNews.title}`;
  if (force || !pageCache[indexCach]) {
    try {
      const response = await axios.get(
        `${process.env.PYTHONANYWHERE_SERVER_URL}/getdata/${tableNews.tableName}/${tableNews.sheetName}/A1:F10000?field=Розділ&value=${tableNews.title}`
      );
      const resp: DataObject[] | null = response.data;
      if (resp) {
        pageCache[indexCach] = resp;
      }
    } catch (err) {
      return null;
    }
  }

  if (pageCache[indexCach]) {
    const result = pageCache[indexCach];
    return result;
  }
  return null;
}

export default getPage;

// setData(trData.filter((item) => item['Розділ'] === idTitle));
