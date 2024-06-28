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
        Sort by:&nbsp;
        <select className={classes.select} id="sort" value={value} onChange={onChange}>
          <option value="" />
          <option value="name.en asc">назва(a-z)</option>
          <option value="name.en desc">назва(z-a)</option>
          <option value="date asc">дата(a-z)</option>
          <option value="date desc">дата(z-a)</option>
        </select>
      </label>
    </div>
  );
}

export default SortBar;
