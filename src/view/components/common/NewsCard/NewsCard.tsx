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

function NewsCard({ news, goToNews }: NewsCardProps) {
  return (
    <div id={news.id} className={classes.card} onClick={() => goToNews(news.id)}>
      <div
        className={classes.image}
        style={{
          backgroundImage:
            // eslint-disable-next-line prettier/prettier, quotes
            `url('https://nus.org.ua/wp-content/uploads/2019/07/Kyyiv-vzhe-obladnav-novi-pershi-klasy-NUSH-meblyamy-na-65.jpg')`
        }}
      />
      <h4 className={classes.cardTitle}>{news['Назва новини']}</h4>
    </div>
  );
}

export default NewsCard;
