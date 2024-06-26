import React, { useEffect, useState } from 'react';
// import RibbonImages from '../RibbonImages/ribbonImages';
import PreviewImageComponent from '../PreviewImageComponent/PreviewImageComponent';
import * as classes from './NewsImagesViewer.module.css';
import imgPathUtils from '../../../data/utils/imgPathUtils';
import RibbonImages from '../RibbonImages/ribbonImages';
import noImage from '../../../assets/img/no-image.png';

interface DataObject {
  id: string;
  [key: string]: string;
}

interface NewsImagesViewerProps {
  news: DataObject;
}

function NewsImagesViewer({ news }: NewsImagesViewerProps) {
  const [isImage, setIsImage] = useState(false);
  const [activImage, setActivImage] = useState(0);
  const [images, setImages] = useState<string[]>([]);
  const [touchStartX, setTouchStartX] = useState<number>(0);
  const [touchEndX, setTouchEndX] = useState<number>(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [modal, setModal] = useState(false);
  const [leftVisible, setLeftVisible] = useState<boolean>(false);
  const [rightVisible, setRightVisible] = useState<boolean>(true);

  useEffect(() => {
    if (news && news['Фото']) {
      if (news['Фото'].length > 0) {
        const arrImages = imgPathUtils(news['Фото']);
        if (arrImages) {
          setImages(arrImages);
          setIsImage(true);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectImage = (index: number) => {
    setActivImage(index);
    setLeftVisible(index !== 0);
    setRightVisible(index < images.length - 1);
  };

  function slideLeft(): void {
    setActivImage(activImage - 1);
  }

  function slideRight(): void {
    setActivImage(activImage + 1);
  }

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      slideRight();
    }

    if (touchEndX - touchStartX > 50) {
      slideLeft();
    }
  };

  return (
    <section className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.card}>
          {isImage ? (
            <div
              className={classes.slider}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}>
              {leftVisible ? (
                // eslint-disable-next-line jsx-a11y/control-has-associated-label
                <button
                  type="button"
                  className={`${classes.sliderBtn} ${classes.sliderBtnLeft}`}
                  onClick={() => slideLeft()}
                />
              ) : (
                // eslint-disable-next-line jsx-a11y/control-has-associated-label
                <button
                  type="button"
                  className={`${classes.sliderBtn} ${classes.sliderBtnDisabled}`}
                />
              )}
              <div className={classes.sliderWrapper}>
                {images.map((img, index) => (
                  <PreviewImageComponent
                    key={img}
                    index={0}
                    isSelected={activImage === index}
                    onClick={() => selectImage(index)}
                    imgUrl={img}
                  />
                ))}
              </div>
              {rightVisible ? (
                // eslint-disable-next-line jsx-a11y/control-has-associated-label
                <button
                  type="button"
                  className={`${classes.sliderBtn} ${classes.sliderBtnRight}`}
                  onClick={() => slideRight()}
                />
              ) : (
                // eslint-disable-next-line jsx-a11y/control-has-associated-label
                <button
                  type="button"
                  className={`${classes.sliderBtn} ${classes.sliderBtnRight} ${classes.sliderBtnDisabled}`}
                />
              )}
            </div>
          ) : null}
          <div className={classes.preview}>
            {isImage ? (
              <RibbonImages
                activImage={activImage}
                images={images}
                setModal={() => setModal(true)}
              />
            ) : (
              <img className={classes.previewNoimage} src={noImage} alt="no aviable" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsImagesViewer;