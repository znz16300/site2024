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
  return result;
};

function responseToNews(sheetName: string, responseNews: ResponseNews[], reverse = false) {
  const sheet: ResponseNews | undefined = responseNews.find((item) => item.templFile === sheetName);
  if (sheet) {
    const trans = transformData(sheet);
    if (reverse) {
      return trans.reverse();
    }
    return trans;
  }

  return null;
}

export default responseToNews;