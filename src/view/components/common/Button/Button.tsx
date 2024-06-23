import React, { ButtonHTMLAttributes } from 'react';
import './button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({ children, className, ...props }: ButtonProps) {
  return (
    // eslint-disable-next-line
    <button className={className} {...props}>
      {children}
    </button>
  );
}

export default Button;
