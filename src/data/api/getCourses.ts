/* eslint-disable no-console */
/* eslint-disable consistent-return */
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const tableNews = {
  tableName: process.env.GOOGLESHEETS_TABLE_COURSES as string,
  sheetName: process.env.GOOGLESHEETS_TABLE_COURSES_SHEET as string
};

interface DataObject {
  id: string;
  [key: string]: string;
}

interface IPageCache {
  [key: string]: DataObject[] | null;
}

const cache: IPageCache = {
  empty: null
};

async function getCourses(force: boolean, teacher: string) {
  console.log('*******', teacher);
  const field = 'Працівник, який пройшов курсову підготовку';
  const query = teacher === '*' || teacher === 'Всі' ? '' : `?field=${field}&value=${teacher}`;
  if (teacher === '') return null;
  if (!cache[teacher] || force) {
    try {
      const response = await axios.get(
        // `${process.env.PYTHONANYWHERE_SERVER_URL}/getrange/${tableNews.tableName}`
        `${process.env.PYTHONANYWHERE_SERVER_URL}/getdata/${tableNews.tableName}/${tableNews.sheetName}/A1:Q10000${query}`
      );
      const resp: DataObject[] | null = response.data;
      if (resp) {
        cache[teacher] = resp;
      }
    } catch (err) {
      return null;
    }
  }
  return cache[teacher];
}

export default getCourses;
