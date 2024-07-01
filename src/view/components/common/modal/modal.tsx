/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { CSSProperties, ReactNode } from 'react';
import * as cl from './modal.module.css';

interface ModalProps {
  style: CSSProperties | undefined;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}

function Modal({ style, children, visible, setVisible }: ModalProps) {
  const rootClasses = [cl.modal];
  if (visible) {
    rootClasses.push(cl.active);
  }

  return (
    <div
      style={style}
      className={rootClasses.join(' ')}
      onClick={() => setVisible(false)}
      onKeyDown={() => setVisible(false)}>
      <div
        className={cl.modalContent}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
