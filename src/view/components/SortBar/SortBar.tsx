/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { ChangeEvent } from 'react';
import * as classes from './SortBar.module.css';

interface SortBarProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}
function SortBar({ value, onChange }: SortBarProps) {
  return (
    <div className={classes.wrapper}>
      <label className={classes.label} htmlFor="sort">
        Сортувати за:&nbsp;
        <select className={classes.select} id="sort" value={value} onChange={onChange}>
          <option value="" />
          <option value="name.en asc">назвою(a-z)</option>
          <option value="name.en desc">назвою(z-a)</option>
          <option value="date asc">датою(a-z)</option>
          <option value="date desc">датою(z-a)</option>
        </select>
      </label>
    </div>
  );
}

export default SortBar;
