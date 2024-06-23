import React, { ButtonHTMLAttributes } from 'react';
import * as classes from './button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({ children, className, ...props }: ButtonProps) {
  return (
    // eslint-disable-next-line
    <button className={classes.btn} {...props}>
      {children}
    </button>
  );
}

export default Button;
