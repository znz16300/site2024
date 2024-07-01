/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as classes from './newsitem.module.css';
import Button from '../common/Button/Button';
import Newsimagesviewer from '../NewsImagesViewer/Newsimagesviewer';

interface DataObject {
  id: string;
  [key: string]: string;
}

interface NewsItemProps {
  news: DataObject | null | undefined;
}

function NewsItem({ news }: NewsItemProps) {
  const navigate = useNavigate();

  function handlePrev(): void {
    if (news) {
      const newId = parseInt(news.id, 10) - 1;
      navigate(`/news?id=${newId}`);
    }
  }

  function handleNext(): void {
    if (news) {
      const newId = parseInt(news.id, 10) + 1;
      navigate(`/news?id=${newId}`);
    }
  }

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {news ? (
        <>
          <h2>{news['Назва новини']}</h2>
          <div className={classes.newsWrapper}>
            <div className={classes.sliderBlock}>
              <Newsimagesviewer news={news} />
            </div>
            <div
              className={classes.description}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: news['Текст новини'] }}
            />
          </div>
          <div className={classes.btnBlock}>
            <Button onClick={handlePrev}>Попередня новина</Button>
            <Button onClick={handleNext}>Наступна новина</Button>
          </div>
        </>
      ) : (
        <h2>Новини не існує</h2>
      )}
    </>
  );
}

export default NewsItem;
