/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import axios from 'axios';

async function getGoogleDriveImageBase64(fileId: string, apiKey: string): Promise<string | null> {
  try {
    const response = await axios.get(`https://www.googleapis.com/drive/v3/files/${fileId}`, {
      params: {
        alt: 'media',
        key: apiKey
      },
      responseType: 'arraybuffer'
    });

    const base64Image = Buffer.from(response.data, 'binary').toString('base64');
    return `data:image/jpeg;base64,${base64Image}`;
  } catch (error) {
    console.error('Error fetching image:', error);
    return null;
  }
}

// Використання функції
const fileId = '';
const apiKey = '';

getGoogleDriveImageBase64(fileId, apiKey)
  .then((base64Image) => {
    if (base64Image) {
      console.log('Base64 Image:', base64Image);
      // Використовуйте base64Image у вашому компоненті
    } else {
      console.log('Could not fetch the image.');
    }
  })
  // eslint-disable-next-line prettier/prettier
  .catch(error => {
    console.error('Error:', error);
  });
