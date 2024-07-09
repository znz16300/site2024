// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function getGoogleDriveImageUrl(fileId: string, apiKey: string): Promise<string> {
  try {
    const response = await axios.get(`https://www.googleapis.com/drive/v3/files/${fileId}`, {
      params: {
        alt: 'media',
        key: apiKey
      },
      responseType: 'blob'
    });
    const url = URL.createObjectURL(response.data);
    return url;
  } catch (err) {
    console.error('Error fetching image:', err);
    throw new Error('Error fetching image');
  }
}

export default getGoogleDriveImageUrl;
