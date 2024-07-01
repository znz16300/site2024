/* eslint-disable no-console */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as classes from './card.module.css';
import imagesFromField from '../../../data/utils/imgPathUtils';
import noImage from '../../../assets/images/vector-documents-icon.jpg';
import urlUpdate from '../../../data/utils/urlUpdater';

interface DataObject {
  id: string;
  [key: string]: string;
}

interface CardProps {
  data: DataObject;
}

function Card({ data }: CardProps) {
  const navigate = useNavigate();
  const goToPage = (path: string) => {
    if (path !== '') {
      if (path.indexOf('http') !== 0) {
        navigate(path);
      } else {
        window.location.href = path;
      }
    }
  };
  const image = imagesFromField(data['Фото']) || noImage;
  const url = data['Кнопка з посиланням'];

  const urlToNavigate: string = urlUpdate(url);

  return (
    <button
      type="button"
      className={classes.card}
      key={data.id}
      onClick={() => goToPage(urlToNavigate)}>
      <div className={classes.imgBlock} style={{ backgroundImage: `url(${image})` }} />
      {data['Абзац']}
    </button>
  );
}

export default Card;
/*
https://docs.google.com/forms/d/e/1FAIpQLScQf3nU3fBL49wHU7Lg1KCK8RQijuGY6kbGW2TYHPO14YUI8g/viewform
./kursi.html
./page.html?titlePages=Атестація%20педагогічних%20працівників%202023-2024%20н.р.&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI
`/page?titlePages=${1}&keyPages=${1}`
*/
