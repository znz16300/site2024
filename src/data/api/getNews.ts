/* eslint-disable no-console */
/* eslint-disable consistent-return */
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import { ResponseNews } from '../types/interfaces/INews';

const tableNews = {
  tableName: process.env.GOOGLESHEETS_TABLE_NEWS as string,
  sheetName: process.env.GOOGLESHEETS_TABLE_NEWS_SHEET as string
};

let newsCache: ResponseNews[] | null = null;

async function getNews(force: boolean) {
  if (!newsCache || force) {
    try {
      const response = await axios.get(
        // `${process.env.PYTHONANYWHERE_SERVER_URL}/getrange/${tableNews.tableName}`
        `${process.env.PYTHONANYWHERE_SERVER_URL}/getdata/${tableNews.tableName}/${tableNews.sheetName}/A1:E10000`
      );
      newsCache = response.data;
      return response.data;
    } catch (err) {
      return null;
    }
  }
  console.log('newsCache', newsCache);
  return newsCache;
}

export default getNews;
