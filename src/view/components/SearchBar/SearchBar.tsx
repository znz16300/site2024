/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { ChangeEvent } from 'react';
import * as classes from './searchBar.module.css';

interface SearchProps {
  search: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({ search, onChange }: SearchProps) {
  return (
    <div className={classes.wrapper}>
      <label className={classes.label} htmlFor="sort">
        Search:&nbsp;
        <input
          id="search"
          type="text"
          value={search}
          onChange={onChange}
          className={classes.input}
        />
      </label>
    </div>
  );
}

export default SearchBar;
