/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
import getNews, { getPage } from './getData';
import getDocuments from './getDocuments';

const tables = [
  {
    title: 'Новини',
    tableId: process.env.GOOGLESHEETS_TABLE_NEWS as string,
    sheetName: process.env.GOOGLESHEETS_TABLE_NEWS_SHEET as string,
    addr: 'B1:D1000'
  },
  {
    title: 'Документи',
    tableId: process.env.GOOGLESHEETS_TABLE_DOCUMENTS as string,
    sheetName: process.env.GOOGLESHEETS_TABLE_DOCUMENTS_SHEET as string,
    addr: 'B1:D1000'
  },
  {
    title: 'Сторінки',
    tableId: process.env.GOOGLESHEETS_TABLE_PAGES as string,
    sheetName: process.env.GOOGLESHEETS_TABLE_PAGES_SHEET as string,
    addr: 'A1:C1000'
  }
];

interface SearchResult {
  id: string;
  [key: string]: string;
}

interface Result {
  resultSearch: SearchResult[];
  title: string;
  titleTable: string;
}

// interface Response {
//   result: Result[];
// }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function getSearch(searchText: string, apiKey: string) {
  try {
    const [news, docum, pages] = await Promise.all([
      getNews(false, ''),
      getDocuments(false, {
        tableName: tables[1].tableId,
        sheetName: tables[1].sheetName,
        title: tables[1].title
      }),
      getPage(false, '', {
        tableName: tables[2].tableId,
        sheetName: tables[2].sheetName,
        title: ''
      })
    ]);
    if (news && docum && pages) {
      const result: Result[] = [];
      result.push({
        resultSearch: news,
        title: '',
        titleTable: 'Новини'
      });
      result.push({
        resultSearch: docum,
        title: '',
        titleTable: 'Документи'
      });
      result.push({
        resultSearch: pages,
        title: '',
        titleTable: 'Сторінки'
      });

      const filteredArray = result
        .map((table) => ({
          ...table,
          resultSearch: table.resultSearch.filter((searchResult) =>
            Object.values(searchResult).some((value) =>
              value.toLowerCase().includes(searchText.toLowerCase())
            )
          )
        }))
        .filter((table) => table.resultSearch.length > 0);

      return filteredArray;
    }
    console.error('Failed to fetch one or both data sets');
  } catch (err) {
    console.error('Error in getTabel:', err);
  }
  return null;
}

export default getSearch;
