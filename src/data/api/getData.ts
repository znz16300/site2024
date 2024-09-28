/* eslint-disable consistent-return */
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import getGoogleDriveImageUrl from './getGoogleDriveImageUrl';
import products from '../pages-data';
import teachers from '../teachers-data';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import teachers from '../teachers-data';

function extractIdFromUrl(url: string) {
  const match = url.match(
    /https?:\/\/drive\.google\.com\/(?:open\?id=|uc\?export=view&id=)([^&]+)/
  );
  return match ? match[1] : null;
}

async function transformPhotoFunction(inputString: string, apiKey: string) {
  if (inputString) {
    if (
      inputString.indexOf('https://drive.google.com/open?id=') === 0 ||
      inputString.indexOf('http://drive.google.com/uc?export=view&id=') === 0
    ) {
      const fileId = extractIdFromUrl(inputString);
      if (fileId) {
        try {
          const url = await getGoogleDriveImageUrl(fileId, apiKey);
          return url;
        } catch (error) {
          console.error('Error fetching image URL:', error);
          return null;
        }
      }
    }
    return inputString;
  }
  return null;
}

const tableNews = {
  tableName: process.env.GOOGLESHEETS_TABLE_NEWS as string,
  sheetName: process.env.GOOGLESHEETS_TABLE_NEWS_SHEET as string
};

interface Table {
  tableName: string;
  sheetName: string;
  title: string;
}

interface DataObject {
  id: string;
  [key: string]: string;
}

let newsCache: DataObject[] | null = null;

async function processNewsArray(newsArray: DataObject[], apiKey: string): Promise<DataObject[]> {
  const updatedNewsArrayPromises = newsArray.map(async (news) => {
    const transformedPhotos = await Promise.all(
      news.Фото.split(/,\s*|\r?\n/).map((photo: string) => transformPhotoFunction(photo, apiKey))
    );
    const updatedNews = {
      ...news,
      Фото: transformedPhotos.join(',')
    };
    return updatedNews;
  });

  return Promise.all(updatedNewsArrayPromises);
}

async function getNews(force: boolean, apiKey: string) {
  if (!newsCache || force) {
    const searchString = '?field=show&value=1';
    try {
      const response = await axios.get(
        `${process.env.PYTHONANYWHERE_SERVER_URL}/getdata/${tableNews.tableName}/${tableNews.sheetName}/A1:E10000${searchString}`
      );
      // Оновлення новин з обробленими фотографіями
      let updatedNewsArray = response.data;
      if (apiKey !== '') {
        updatedNewsArray = await processNewsArray(response.data, apiKey);
      }

      newsCache = updatedNewsArray;
      return updatedNewsArray;
    } catch (err) {
      console.error('Error fetching news:', err);
      return null;
    }
  }
  return newsCache;
}

interface IPageCache {
  [key: string]: DataObject[] | null;
}

const pageCache: IPageCache = {
  empty: null
};

export async function getPage(force: boolean, apiKey: string, tablePage: Table) {
  const indexCach = `${tablePage.tableName}-${tablePage.title}`;
  // eslint-disable-next-line no-console
  console.log('tablePage', tablePage);
  // const paramFilter = '';
  const paramFilter = tablePage.title === '' ? '' : `?field=Розділ&value=${tablePage.title}`;

  const GOOGLE_TABLE_USE = false;

  if (GOOGLE_TABLE_USE) {
    if (force || !pageCache[indexCach]) {
      try {
        const response = await axios.get(
          `${process.env.PYTHONANYWHERE_SERVER_URL}/getdata/${tablePage.tableName}/${tablePage.sheetName}/A1:F10000${paramFilter}`
        );
        let updatedNewsArray = response.data;
        // eslint-disable-next-line no-console
        console.log(JSON.stringify(updatedNewsArray));
        if (apiKey !== '') {
          updatedNewsArray = await processNewsArray(response.data, apiKey);
        }
        pageCache[indexCach] = updatedNewsArray;
      } catch (err) {
        return null;
      }
    }
  } else {
    let data;
    data = products.filter((product) => product.Розділ === tablePage.title);
    if (tablePage.tableName === '1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI') {
      data = products.filter((product) => product.Розділ === tablePage.title);
    } else if (tablePage.tableName === '15D-n7O5AdsttUF3LfkOhRexS-Q4T78MfXDbUlmsPHRc') {
      data = teachers.filter((teacher) => teacher.Розділ === tablePage.title);
    }
    pageCache[indexCach] = data;
  }

  if (pageCache[indexCach]) {
    const result = pageCache[indexCach];
    return result;
  }
  return null;
}

export default getNews;
