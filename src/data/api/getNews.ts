/* eslint-disable consistent-return */
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import { ResponseNews } from '../types/interfaces/INews';

const tableNews = {
  tableName: '1Dk0WYpOKeRoDATgzMkIkFjUcFwNAG5MRn4W7bEyzd0M',
  sheetName: 'Аркуш1'
};

let newsCache: ResponseNews[] | null = null;

async function getNews(force: boolean) {
  if (!newsCache || force) {
    try {
      const response = await axios.get(
        `https://schooltools.pythonanywhere.com/getmultiblock/${tableNews.tableName}`
      );
      newsCache = response.data;
      return response.data;
    } catch (err) {
      return null;
    }
  }
  return newsCache;
}

export default getNews;
