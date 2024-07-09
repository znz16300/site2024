/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable consistent-return */
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import { extractIdFromUrl } from '../utils/imgPathUtils';
import getPublicFileData from './getPublicFileData';

const tableNews = {
  tableName: process.env.GOOGLESHEETS_TABLE_COURSES as string,
  sheetName: process.env.GOOGLESHEETS_TABLE_COURSES_SHEET as string
};

interface DataObject {
  id: string;
  fileInfo?: any;
  [key: string]: string | any; // Add 'any' to allow for fileInfo
}

interface IPageCache {
  [key: string]: DataObject[] | null;
}

const cache: IPageCache = {
  empty: null
};

function getId(element: DataObject) {
  const urls = element['Фотокопія сертифікату, свідоцтва тощо'];
  const elementsArray: string[] = urls.split(/[\s,\n]+/);
  if (elementsArray.length > 0) {
    const idDocument = extractIdFromUrl(elementsArray[0]);
    if (idDocument) {
      return idDocument;
    }
  }
  return '';
}

async function fetchFileInfo(id: string, google_public_api_key: string) {
  try {
    const response = await getPublicFileData(id, google_public_api_key as string);
    if (response) {
      return response;
    }
  } catch (error) {
    console.error('Error fetching file data: ', error);
  }
  return null;
}

async function getCourses(force: boolean, teacher: string, google_public_api_key: string) {
  const field = 'Працівник, який пройшов курсову підготовку';
  const query = teacher === '*' || teacher === 'Всі' ? '' : `?field=${field}&value=${teacher}`;
  if (teacher === '') return null;
  if (!cache[teacher] || force) {
    try {
      const response = await axios.get(
        `${process.env.PYTHONANYWHERE_SERVER_URL}/getdata/${tableNews.tableName}/${tableNews.sheetName}/A1:Q10000${query}`
      );
      const resp: DataObject[] | null = response.data;
      if (resp) {
        // Запит на інформацію про файли для кожного елемента
        await Promise.all(
          resp.map(async (element) => {
            const id = getId(element);
            if (id) {
              const fileInfo = await fetchFileInfo(id, google_public_api_key);
              // eslint-disable-next-line no-param-reassign
              element.fileInfo = fileInfo;
            }
          })
        );
        cache[teacher] = resp;
      }
    } catch (err) {
      return null;
    }
  }
  return cache[teacher];
}

export default getCourses;
