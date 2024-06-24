/* eslint-disable no-console */
interface DataObject {
  id: string;
  [key: string]: string;
}

interface ResponseNews {
  templFile: string;
  header: string[];
  data: string[][];
}

const transformData = (input: ResponseNews): DataObject[] => {
  const { header } = input;
  console.log('header', header);
  const { data } = input;
  const result: DataObject[] = [];
  for (let rowIndex = 0; rowIndex < data.length; rowIndex += 1) {
    const row: DataObject = {
      id: ''
    };
    for (let colIndex = 0; colIndex < header[0].length; colIndex += 1) {
      row[header[0][colIndex]] = data[rowIndex][colIndex];
    }
    row.id = `${rowIndex}`;
    result.push(row);
  }
  console.log('result', result);
  return result.reverse();
};

function responseToNews(sheetName: string, responseNews: ResponseNews[]) {
  const sheet: ResponseNews | undefined = responseNews.find((item) => item.templFile === sheetName);
  if (sheet) {
    const trans = transformData(sheet);

    console.log('sheet', sheet);
    console.log('trans', trans);
    return trans;
  }

  return null;
}

export default responseToNews;
