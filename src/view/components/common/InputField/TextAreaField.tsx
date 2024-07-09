import React, { ChangeEvent, useState } from 'react';
import * as classes from './inputField.module.css';

interface InputFieldProps {
  label: string;
  valu: string;
  send: (value: string) => void;
}

function TextAreaField({ label, valu, send }: InputFieldProps) {
  const [value, setValue] = useState(valu);

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>): void {
    setValue(e.currentTarget.value);
  }

  function handleBlur() {
    send(value);
  }

  return (
    <div className={classes.wrapper}>
      <label className={classes.label} htmlFor="promo">
        {label}
      </label>
      <textarea
        className={classes.input}
        value={value}
        onChange={(e) => handleChange(e)}
        onBlur={handleBlur}
      />
    </div>
  );
}

export default TextAreaField;
