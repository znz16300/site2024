/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { AppState } from '../../../data/types/main-props';
import * as classes from './PaginationBlock.module.css';

interface PaginationProps {
  activeId: number;
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
  onClickHandler: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  state: AppState;
  itemsPerPage: number;
}

function PaginationBlock({
  activeId,
  itemsPerPage,
  setItemsPerPage,
  onClickHandler,
  state
}: PaginationProps) {
  const { productsAmount } = state;
  const pagesAmount = Math.ceil(productsAmount / itemsPerPage);

  const renderPageButtons = () => {
    const buttons = [];

    // Перша сторінка
    buttons.push(
      <button
        key="first"
        className={`${classes.pagIconArr} ${classes.iconFirst}`}
        id="pagFirst"
        type="button"
        onClick={onClickHandler}
        aria-label="first"
        disabled={activeId === 0} // Перероблено
      />
    );

    // Попередня сторінка
    buttons.push(
      <button
        key="prev"
        className={`${classes.pagIconArr} ${classes.iconPrev}`}
        id="pagLeft"
        type="button"
        onClick={onClickHandler}
        aria-label="prev"
        disabled={activeId === 0} // Перероблено
      />
    );

    if (activeId > 1) {
      buttons.push(
        <button
          key="page-1"
          className={classes.paginationBtn}
          onClick={onClickHandler}
          id="0"
          type="button">
          1
        </button>
      );
    }

    if (activeId > 2) {
      buttons.push(<span key="dots-left">...</span>);
    }

    if (activeId > 0) {
      buttons.push(
        <button
          key={`page-${activeId}`}
          className={classes.paginationBtn}
          onClick={onClickHandler}
          id={`${activeId - 1}`}
          type="button">
          {activeId}
        </button>
      );
    }

    // Активна сторінка
    buttons.push(
      <button
        key={`page-${activeId + 1}`}
        className={`${classes.paginationBtn} ${classes.activePageBtn}`}
        onClick={onClickHandler}
        id={`${activeId}`}
        type="button">
        {activeId + 1}
      </button>
    );

    if (activeId < pagesAmount - 1) {
      buttons.push(
        <button
          key={`page-${activeId + 2}`}
          className={classes.paginationBtn}
          onClick={onClickHandler}
          id={`${activeId + 1}`}
          type="button">
          {activeId + 2}
        </button>
      );
    }

    if (activeId < pagesAmount - 3) {
      buttons.push(<span key="dots-right">...</span>);
    }

    if (activeId < pagesAmount - 2) {
      buttons.push(
        <button
          key={`page-${pagesAmount}`}
          className={classes.paginationBtn}
          onClick={onClickHandler}
          id={`${pagesAmount - 1}`}
          type="button">
          {pagesAmount}
        </button>
      );
    }

    // Наступна сторінка
    buttons.push(
      <button
        key="next"
        className={`${classes.pagIconArr} ${classes.iconNext}`}
        id="pagRight"
        type="button"
        onClick={onClickHandler}
        aria-label="next"
        disabled={activeId === pagesAmount - 1} // Перероблено
      />
    );

    // Остання сторінка
    buttons.push(
      <button
        key="last"
        className={`${classes.pagIconArr} ${classes.iconLast}`}
        id={`${pagesAmount - 1}`}
        type="button"
        onClick={onClickHandler}
        aria-label="last"
        disabled={activeId === pagesAmount - 1} // Перероблено
      />
    );

    return buttons;
  };

  function handleItemsPerPage(e: React.FocusEvent<HTMLInputElement, Element>) {
    setItemsPerPage(+e.currentTarget.value);
  }

  // function handleBlur(e: React.FocusEvent<HTMLInputElement, Element>) {
  //   setItemsPerPage(+e.currentTarget.value);
  // }

  return (
    <div className={classes.wrapper}>
      <div className={classes.paginationWrapper}>{renderPageButtons()}</div>
      <label className={classes.label}>
        на сторінці&nbsp;
        <input
          type="text"
          value={itemsPerPage}
          onChange={handleItemsPerPage}
          // onBlur={(e) => handleBlur(e)}
        />
      </label>
    </div>
  );
}

export default PaginationBlock;
