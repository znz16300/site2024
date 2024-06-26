/* eslint-disable array-callback-return */
import React from 'react';
import * as classes from './ribbonImages.module.css';

interface ImageProps {
  activImage: number;
  images: string[];
  setModal: (f: boolean) => void;
}

export default function RibbonImages({ activImage, images, setModal }: ImageProps) {
  // eslint-disable-next-line no-console
  console.log(activImage);
  const ribbonLength = Math.floor(100 * images.length);
  const ribbonOffset = Math.floor((ribbonLength / images.length) * activImage);
  return (
    <div
      className={classes.ribbon}
      style={{
        width: `${ribbonLength}%`,
        marginLeft: `${-ribbonOffset}%`
      }}>
      {images.map((img) => (
        <div className={classes.ribbonImgContainer} key={img}>
          <img
            className={classes.ribbonImg}
            src={img}
            onKeyDown={() => setModal(true)}
            onClick={() => setModal(true)}
            alt=""
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
            role="button"
            tabIndex={0}
            aria-label="Toggle modal"
          />
        </div>
      ))}
    </div>
  );
}
