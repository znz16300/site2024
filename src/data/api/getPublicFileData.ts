/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

async function getPublicFileData(fileId: string, publicApiKey: string) {
  try {
    // Виконайте запит до Google Drive API без авторизації
    const response = await axios.get(`https://www.googleapis.com/drive/v3/files/${fileId}`, {
      params: {
        fields: '*',
        key: publicApiKey
      },
      headers: {
        Accept: 'application/json'
      }
    });
    // eslint-disable-next-line no-console
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching file data:', error);
    throw error;
  }
}

export default getPublicFileData;
