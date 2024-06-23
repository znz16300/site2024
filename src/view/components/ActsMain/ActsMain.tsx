import React from 'react';
import * as classes from './actsmain.module.css';
import img1 from '../../../assets/icon/acts/5.png';
import img2 from '../../../assets/icon/acts/menu1.png';
import img3 from '../../../assets/icon/acts/11.png';
import img4 from '../../../assets/icon/acts/9.png';
import img5 from '../../../assets/icon/acts/2.png';
import img6 from '../../../assets/icon/acts/6.png';
import img7 from '../../../assets/icon/acts/7.png';
import img8 from '../../../assets/icon/acts/10.png';
// import img9 from '../../../assets/icon/acts/11.png';

const actsBtn = [
  {
    id: '1',
    title: 'Вчителі',
    image: img1,
    url: ''
  },
  {
    id: '2',
    title: 'Меню',
    image: img2,
    url: ''
  },
  {
    id: '3',
    title: 'Самоврядування',
    image: img3,
    url: ''
  },
  {
    id: '4',
    title: 'Бібліотека',
    image: img4,
    url: ''
  },
  {
    id: '5',
    title: 'Методична робота',
    image: img5,
    url: ''
  },
  {
    id: '6',
    title: 'Фінансова інформація',
    image: img6,
    url: ''
  },
  {
    id: '7',
    title: 'Дистанційне навчання',
    image: img7,
    url: ''
  },
  {
    id: '8',
    title: 'Протидія булінгу',
    image: img8,
    url: ''
  },
  {
    id: '9',
    title: 'Виховна робота',
    image: img3,
    url: ''
  }
];

function ActsMain() {
  return (
    <section className={classes.materials}>
      <h2 className={classes.title}>Діяльність</h2>
      <div className={classes.list}>
        {actsBtn.map((btn) => (
          <div key={btn.id} className={classes.item}>
            <div
              key={btn.id}
              className={classes.image}
              style={{ backgroundImage: `url(${btn.image})` }}
            />
            <div key={btn.id} className={classes.name}>
              {btn.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ActsMain;
