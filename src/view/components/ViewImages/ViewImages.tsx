/* eslint-disable array-callback-return */
import React from 'react';
import * as classes from './viewimages.module.css';

interface ImageProps {
  numImage: number;
  images: string[];
  alt: string;
  onClick: () => void;
}

function ViewImages({ numImage, images, alt, onClick }: ImageProps) {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div className={classes.preview}>
      <div className={classes.lenta} style={{ left: `${-Math.floor(numImage * 85)}vw ` }}>
        {images.map((img) => (
          <div className={classes.imgContainer} key={img}>
            <img
              className={classes.previewImg}
              src={img}
              onClick={() => onClick()}
              onKeyDown={() => onClick()}
              alt={alt}
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
              role="button"
              tabIndex={0}
              aria-label="Toggle modal"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewImages;
