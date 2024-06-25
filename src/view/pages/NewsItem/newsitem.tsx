import React from 'react';
import * as classes from './newsitem.module.css';
import imagesFromField from '../../../data/utils/imgPathUtils';
import Button from '../../components/common/Button/Button';

interface DataObject {
  id: string;
  [key: string]: string;
}

interface NewsItemProps {
  news: DataObject | null | undefined;
}

function NewsItem({ news }: NewsItemProps) {
  let img1: string | undefined | null = '';
  if (news) {
    const images: string[] | null | undefined = imagesFromField(news['Фото']);
    img1 = images ? images[0] : null;
  }
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {news ? (
        <>
          <h2>{news['Назва новини']}</h2>
          {img1 ? <img className={classes.img} src={img1} alt="" /> : null}
          <div
            className={classes.description}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: news['Текст новини'] }}
          />
          <div className={classes.btnBlock}>
            <Button>Попередня новина</Button>
            <Button>Наступна новина</Button>
          </div>
        </>
      ) : (
        <h2>Новини не існує</h2>
      )}
    </>
  );
}

export default NewsItem;
