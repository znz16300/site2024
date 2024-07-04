/* eslint-disable react/function-component-definition */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import { getImageThroughProxy } from '../../../data/api/getImageThroughProxy';

interface ImageProps {
  fileId: string;
}

const GoogleDriveImage: React.FC<ImageProps> = ({ fileId }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    async function fetchImage() {
      const imageUrl = await getImageThroughProxy(fileId);
      setImageSrc(imageUrl);
    }

    fetchImage();
  }, [fileId]);

  if (!imageSrc) {
    return <div>Loading...</div>;
  }

  return <img src={imageSrc} alt="Google Drive Image" />;
};

export default GoogleDriveImage;
