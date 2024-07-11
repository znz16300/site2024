/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { ReactNode } from 'react';
// import Draggable from 'react-draggable';
import * as classes from './modalWithCloseButton.module.css';

interface ModalProps {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
  initialX: number;
  initialY: number;
}

const ModalWithCloseButton: React.FC<ModalProps> = ({
  children,
  setVisible,
  initialX,
  initialY
}) => {
  // eslint-disable-next-line no-console
  console.log(initialX, initialY);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className={`${classes.shadow}`} onClick={() => setVisible(false)}>
      {/* <Draggable defaultPosition={{ x: initialX, y: initialY }}> */}
      <div
        className={`${classes.wrapper} ${classes.resizable}`}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}>
        <div className={classes.btnWrapper}>
          <button
            className={classes.closeBtn}
            type="button"
            onClick={() => setVisible(false)}
            aria-label="close"
          />
        </div>
        {children}
      </div>
      {/* </Draggable> */}
    </div>
  );
};

export default ModalWithCloseButton;
