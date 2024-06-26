import React, { useState } from 'react';
import * as classes from './imagemodal.module.css';
import Modal from '../modal/modal';
import ViewImages from '../../ViewImages/ViewImages';

interface ImageModalParam {
  modal: boolean;
  activImage: number;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  isImage: boolean;
  leftVisible: boolean;
  rightVisible: boolean;
  images: string[];
  slideLeft: () => void;
  slideRight: () => void;
  modalShow: () => void;
}

function ImageModal(param: ImageModalParam) {
  const {
    modal,
    images,
    activImage,
    setModal,
    isImage,
    leftVisible,
    rightVisible,
    slideLeft,
    slideRight,
    modalShow
  } = param;
  const [touchStartX, setTouchStartX] = useState<number>(0);
  const [touchEndX, setTouchEndX] = useState<number>(0);

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
  const background = 'background: rgba(0, 0, 0, 0);';

  return (
    <Modal visible={modal} setVisible={setModal} background={background}>
      {isImage ? (
        <div
          className={classes.modalWrapper}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}>
          {leftVisible ? (
            <button
              type="button"
              className={`${classes.sliderBtn} ${classes.sliderBtnLeft}`}
              onClick={() => slideLeft()}
              aria-label="Left"
            />
          ) : null}
          <ViewImages
            key={0}
            numImage={activImage}
            onClick={() => modalShow()}
            alt="product"
            images={images}
          />
          <button
            className={classes.btnClose}
            type="button"
            onClick={() => setModal(false)}
            aria-label="Close modal"
          />
          {rightVisible ? (
            <button
              type="button"
              className={`${classes.sliderBtn} ${classes.sliderBtnRight}`}
              onClick={() => slideRight()}
              aria-label="Right"
            />
          ) : null}
        </div>
      ) : null}
    </Modal>
  );
}

export default ImageModal;
