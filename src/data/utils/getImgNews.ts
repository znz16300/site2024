// import getGoogleDriveImageUrl from '../api/getGoogleDriveImageUrl';

// function extractIdFromUrl(url: string) {
//   const match = url.match(/https:\/\/drive\.google\.com\/open\?id=([^&]+)/);
//   return match ? match[1] : null;
// }

// export default async function transformPhotoFunction(inputString: string) {
//   if (inputString) {
//     if (inputString.indexOf('https://drive.google.com/open?id=') === 0) {
//       const fileId = extractIdFromUrl(inputString);
//       if (fileId) {
//         try {
//           const url = await getGoogleDriveImageUrl(fileId, '');
//           return url;
//         } catch (error) {
//           console.error('Error fetching image URL:', error);
//           return null;
//         }
//       }
//     }
//     return inputString;
//   }
//   return null;
// }
