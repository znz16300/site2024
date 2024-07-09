/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import * as classes from './NewsCard.module.css';
import imagesFromField from '../../../../data/utils/imgPathUtils';

interface DataObject {
  [key: string]: string;
}

interface NewsCardProps {
  news: DataObject;
  goToNews: (id: string) => void;
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
