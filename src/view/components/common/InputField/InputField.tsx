import React, { ChangeEvent, useState } from 'react';
import * as classes from './inputField.module.css';

interface InputFieldProps {
  label: string;
  valu: string;
  send: (value: string) => void;
}

function InputField({ label, valu, send }: InputFieldProps) {
  const [value, setValue] = useState(valu);

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    setValue(e.currentTarget.value);
  }

  function handleBlur() {
    send(value);
  }
  const title = valu.length > 35 ? value : '';
  return (
    <div className={classes.wrapper}>
      <label className={classes.label} htmlFor="promo">
        {label}
      </label>
      <input
        className={classes.input}
        type="text"
        title={title}
        value={value}
        onChange={(e) => handleChange(e)}
        onBlur={handleBlur}
      />
    </div>
  );
}

export default InputField;
