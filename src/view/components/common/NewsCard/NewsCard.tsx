/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import * as classes from './NewsCard.module.css';

interface DataObject {
  [key: string]: string;
}

interface NewsCardProps {
  news: DataObject;
  goToNews: (id: string) => void;
}

function extractIdFromUrl(url: string) {
  const match = url.match(/https:\/\/drive\.google\.com\/open\?id=([^&]+)/);
  return match ? match[1] : null;
}

function imagesFromField(inputString: string) {
  if (inputString) {
    const elementsArray: string[] = inputString.split(/[\s,\n]+/);
    if (elementsArray) {
      const result: string[] = elementsArray.map((item) => {
        if (item.indexOf('https://drive.google.com/open?id=') === 0) {
          return `https://drive.usercontent.google.com/download?id=${extractIdFromUrl(item)}&export=view&authuser=0`;
        }
        if (item.indexOf('http') === 0) {
          return item;
        }
        return `https://znz16300.github.io/site/img-news/${item}`;
      });
      return result;
    }
  }
  return null;
}

function NewsCard({ news, goToNews }: NewsCardProps) {
  const images: string[] | null = imagesFromField(news['Фото']);
  const img1: string | null = images ? images[0] : null;
  const backgroundImage: string = img1 ? `url(${img1})` : 'unset';
  return (
    <div id={news.id} className={classes.card} onClick={() => goToNews(news.id)}>
      <div
        className={classes.image}
        style={{
          backgroundImage
        }}
      />
      <h4 className={classes.cardTitle}>{news['Назва новини']}</h4>
    </div>
  );
}

export default NewsCard;
