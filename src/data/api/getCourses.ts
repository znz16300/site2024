/* eslint-disable no-console */
/* eslint-disable consistent-return */
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import { ResponseNews } from '../types/interfaces/INews';

const tableNews = {
  tableName: process.env.GOOGLESHEETS_TABLE_COURSES as string,
  sheetName: process.env.GOOGLESHEETS_TABLE_COURSES_SHEET as string
};

let cache: ResponseNews[] | null = null;

async function getCourses(force: boolean, value: string) {
  console.log('*******', value);
  const field = 'Працівник, який пройшов курсову підготовку';
  const query = value === '*' || value === 'Всі' ? '' : `?field=${field}&value=${value}`;
  if (!cache || force) {
    try {
      const response = await axios.get(
        // `${process.env.PYTHONANYWHERE_SERVER_URL}/getrange/${tableNews.tableName}`
        `${process.env.PYTHONANYWHERE_SERVER_URL}/getdata/${tableNews.tableName}/${tableNews.sheetName}/A1:Q10000${query}`
      );
      cache = response.data;
      return response.data;
    } catch (err) {
      return null;
    }
  }
  console.log('cache', cache);
  return cache;
}

export default getCourses;
