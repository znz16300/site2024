/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import cn from 'classnames';
import { Link } from 'react-router-dom';
import * as classes from './searchPanel.module.css';
import getSearch from '../../../data/api/getSearch';
import { useAppContext } from '../../../App';

interface SearchPanetProps {
  isSearch: boolean;
  setIsSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

interface SearchResult {
  id: string;
  [key: string]: string;
}

interface Result {
  resultSearch: SearchResult[];
  title: string;
  titleTable: string;
}

interface Response {
  result: Result[];
}

function removeDuplicates(arr: Result[]): Result[] {
  const seen = new Set<string>();
  return arr.map((result) => {
    const filteredResults = result.resultSearch.filter((searchResult) => {
      if (seen.has(searchResult.id)) {
        return false;
      }
      seen.add(searchResult.id);
      return true;
    });
    return {
      ...result,
      resultSearch: filteredResults
    };
  });
}

function SearchPanel({ isSearch, setIsSearch }: SearchPanetProps) {
  const [valueText, setValueText] = useState<string>('');
  const [resultContent, setResultContent] = useState<Result[] | null>(null);
  const { state } = useAppContext();

  function stripHtml(htmlString: string) {
    const temporaryElement = document.createElement('div');
    temporaryElement.innerHTML = htmlString;
    return temporaryElement.textContent || temporaryElement.innerText || '';
  }

  async function handleSearch(): Promise<void> {
    try {
      const resultSearch: Result[] | null = await getSearch(valueText, '');
      console.log('Result from getSearch:', resultSearch);
      if (resultSearch) {
        setResultContent(resultSearch);
        console.log('Updated resultContent:', resultSearch);
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  }

  function combineLinks(field1: string, field2: string): string[] {
    const splitLinks = (field: string): string[] => {
      return field ? field.split(',').map((link) => link.trim()) : [];
    };
    return [...splitLinks(field1), ...splitLinks(field2)];
  }

  function renderResults() {
    if (!resultContent) return null;
    const modifArray = resultContent;
    console.log(modifArray);
    return modifArray.map((res, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <div key={index}>
        <p className={classes.title}>{res.titleTable}</p>
        {res.resultSearch.map((item) => (
          <div key={item.id}>
            {res.titleTable === 'Сторінки' && (
              <Link
                to={`/page?titlePages=${item['Розділ']}&keyPages=${process.env.GOOGLESHEETS_TABLE_PAGES as string}`}>
                {/* <p>{item['Розділ']}</p> */}
                <p>{stripHtml(item['Абзац']).slice(0, 65)}...</p>
              </Link>
            )}
            {res.titleTable === 'Документи' &&
              combineLinks(
                item['Посилання на документ (якщо більше одного, то через кому)'],
                item['Файл(и) документу']
              ).map((link) => (
                <Link key={link} to={`${link}`}>
                  <p>{item['Назва документу']}</p>
                </Link>
              ))}
            {res.titleTable === 'Новини' && (
              <Link to={`/news?id=${item.id}`}>
                <p>{item['Назва новини']}</p>
              </Link>
            )}
          </div>
        ))}
      </div>
    ));
  }

  return (
    <>
      <div
        onClick={() => setIsSearch(false)}
        className={cn(classes.cover, { [classes.coverShow]: isSearch })}
      />
      <div className={cn(classes.searchPanelBox, { [classes.searchPanelBoxShow]: isSearch })}>
        <div className={classes.searchHeader}>
          <input
            className={classes.input}
            type="text"
            value={valueText}
            onChange={(e) => {
              setValueText(e.currentTarget.value);
              handleSearch();
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              } else if (e.key === 'Escape') {
                setIsSearch(false);
              }
            }}
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus
          />
          <button onClick={handleSearch} className={`${classes.searchBtn} ${classes.btn}`} />
          <button
            onClick={() => setIsSearch(false)}
            className={`${classes.closeBtn} ${classes.btn}`}
          />
        </div>
        <div className={classes.contentResultSearch}>{renderResults()}</div>
      </div>
    </>
  );
}

export default SearchPanel;
