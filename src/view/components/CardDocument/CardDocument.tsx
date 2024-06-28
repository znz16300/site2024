/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as classes from './cardDocument.module.css';
import imagesFromField from '../../../data/utils/imgPathUtils';
import noImage from '../../../assets/images/vector-documents-icon.jpg';
import Modal from '../common/modal/modal';
import cross from '../../../assets/icons/cross.svg';

interface DataObject {
  id: string;
  [key: string]: string;
}

interface CardProps {
  data: DataObject;
}

function CardDocument({ data }: CardProps) {
  console.log(data);

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

  // eslint-disable-next-line prettier/prettier
  const namePhoto = 'Фото (необов\'язково)';
  const nameTitle = 'Назва документу';
  const nameLink1 = 'Посилання на документ (якщо більше одного, то через кому)';
  const nameLink2 = 'Файл(и) документу';

  const title = data[nameTitle];
  // eslint-disable-next-line prettier/prettier
  const image = imagesFromField(data[namePhoto]) || noImage;
  const urls1 = data[nameLink1];
  const urls2 = data[nameLink2];

  // eslint-disable-next-line @typescript-eslint/dot-notation
  const show = data['show'] || '0';

  let urlsToNavigate: string[] = [];

  const addUrls = (urls: string | undefined) => {
    if (urls) {
      const arrUrl = imagesFromField(urls);
      if (arrUrl) {
        urlsToNavigate = [...urlsToNavigate, ...arrUrl];
      }
    }
  };

  addUrls(urls1);
  addUrls(urls2);

  const [visible, setVisible] = useState<boolean>(false);
  const [urls, setUrls] = useState<string[]>([]);

  function goToModal(urlsParam: string[]): void {
    console.log('rrrrrr');

    setVisible(true);
    setUrls(urlsParam);
  }

  return (
    <>
      {show === '1' ? (
        <button
          type="button"
          className={classes.card}
          key={data.id}
          onClick={() =>
            urlsToNavigate.length === 1 ? goToPage(urlsToNavigate[0]) : goToModal(urlsToNavigate)
          }>
          <div className={classes.imgBlock} style={{ backgroundImage: `url(${image})` }} />
          {title}
        </button>
      ) : null}
      {visible ? (
        <Modal background="var(--gray-bg-color)" visible={visible} setVisible={setVisible}>
          <button
            className={classes.btn}
            type="button"
            style={{
              backgroundImage: `url('${cross}')`
            }}
            onClick={() => setVisible(false)}
            aria-label="close"
          />
          <ul>
            {urls.map((item, index) => (
              <li key={item}>
                <Link to={item}>Документ № {index + 1}</Link>
              </li>
            ))}
          </ul>
        </Modal>
      ) : null}
    </>
  );
}

export default CardDocument;
/*
https://docs.google.com/forms/d/e/1FAIpQLScQf3nU3fBL49wHU7Lg1KCK8RQijuGY6kbGW2TYHPO14YUI8g/viewform
./kursi.html
./page.html?titlePages=Атестація%20педагогічних%20працівників%202023-2024%20н.р.&keyPages=1F6QVr9WNio-_ODmnIlMTSHeSQxLOjgnd0nYB1_z0BeI
`/page?titlePages=${1}&keyPages=${1}`
*/
