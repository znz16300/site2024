// import getGoogleDriveImageUrl from '../api/getGoogleDriveImageUrl';

// function extractIdFromUrl(url: string) {
//   const match = url.match(/https:\/\/drive\.google\.com\/open\?id=([^&]+)/);
//   return match ? match[1] : null;
// }

export default function imagesFromField(inputString: string) {
  if (inputString) {
    const elementsArray: string[] = inputString.split(/[\s,\n]+/);
    if (elementsArray) {
      const result: string[] = elementsArray.map((item) => {
        if (item.indexOf('http') === 0) {
          return item;
        }
        if (item.indexOf('./assets') === 0) {
          return item;
        }
        if (item.indexOf('./img-pages') === 0) {
          return item;
        }
        if (item.indexOf('blob') === 0) {
          return item;
        }
        return `./img-news/${item}`;
      });
      return result;
    }
  }
  return null;
}
