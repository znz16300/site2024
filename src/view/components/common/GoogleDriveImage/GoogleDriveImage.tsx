import React, { useState, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import { useAppContext } from '../../../../App';

type ImageProps = {
  fileId: string;
};

function GoogleDriveImage({ fileId }: ImageProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { state } = useAppContext();
  // eslint-disable-next-line no-unneeded-ternary, prettier/prettier
  const publicApiKey = state.oauth?.google_public_api_key as string;

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(`https://www.googleapis.com/drive/v3/files/${fileId}`, {
          params: {
            alt: 'media',
            key: publicApiKey
          },
          responseType: 'blob'
        });
        const url = URL.createObjectURL(response.data);
        setImageUrl(url);
      } catch (err) {
        setError('Error fetching image');
        console.error('Error fetching image:', err);
      }
    };

    fetchImage();
  }, [fileId, publicApiKey]);

  if (error) {
    return <div>{error}</div>;
  }

  return imageUrl ? <img src={imageUrl} alt="Google Drive File" /> : <div>Loading...</div>;
}

export default GoogleDriveImage;
