/* eslint-disable no-console */
/* eslint-disable consistent-return */
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import getGoogleDriveImageUrl from './getGoogleDriveImageUrl';

function extractIdFromUrl(url: string) {
  const match = url.match(/https:\/\/drive\.google\.com\/open\?id=([^&]+)/);
  return match ? match[1] : null;
}

async function transformPhotoFunction(inputString: string, apiKey: string) {
  if (inputString) {
    if (inputString.indexOf('https://drive.google.com/open?id=') === 0) {
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
    try {
      const response = await axios.get(
        // `${process.env.PYTHONANYWHERE_SERVER_URL}/getrange/${tableNews.tableName}`
        `${process.env.PYTHONANYWHERE_SERVER_URL}/getdata/${tableNews.tableName}/${tableNews.sheetName}/A1:E10000`
      );
      console.log('response.data:', response.data);
      // Оновлення новин з обробленими фотографіями
      const updatedNewsArray = await processNewsArray(response.data, apiKey);
      console.log('Updated news array:', updatedNewsArray);

      newsCache = updatedNewsArray;
      return updatedNewsArray;
    } catch (err) {
      console.error('Error fetching news:', err);
      return null;
    }
  }

  console.log('Returning cached news:', newsCache);
  return newsCache;
}

export default getNews;
