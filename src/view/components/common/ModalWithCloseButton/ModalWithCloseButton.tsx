/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { ReactNode } from 'react';
import * as classes from './modalWithCloseButton.module.css';

interface ModalProps {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}

function ModalWithCloseButton({ children, setVisible }: ModalProps) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className={classes.shadow} onClick={() => setVisible(false)}>
      <div className={classes.wrapper}>
        <button
          className={classes.closeBtn}
          type="button"
          onClick={() => setVisible(false)}
          aria-label="close"
        />
        <div onClick={(e) => e.stopPropagation()} onKeyDown={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default ModalWithCloseButton;
