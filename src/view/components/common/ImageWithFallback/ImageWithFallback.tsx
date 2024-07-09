import React, { useState, useEffect } from 'react';

interface ImageWithFallbackProps {
  imageUrl: string;
}
function ImageWithFallback({ imageUrl }: ImageWithFallbackProps) {
  const [imageExists, setImageExists] = useState(false);

  useEffect(() => {
    const checkImageExistence = async () => {
      try {
        const response = await fetch(imageUrl, { method: 'HEAD' });
        if (response.ok) {
          setImageExists(true);
        } else {
          setImageExists(false);
        }
      } catch (error) {
        console.error('Error checking image existence:', error);
        setImageExists(false);
      }
    };

    checkImageExistence();
  }, [imageUrl]);

  return imageExists ? <img src={imageUrl} alt="документ" /> : <p>Зображення не знайдено</p>;
}

export default ImageWithFallback;
