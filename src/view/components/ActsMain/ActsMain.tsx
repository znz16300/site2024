import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as classes from './actsmain.module.css';

import img1 from '../../../assets/icon/acts/5.png';
import img2 from '../../../assets/icon/acts/menu1.png';
import img3 from '../../../assets/icon/acts/11.png';
import img4 from '../../../assets/icon/acts/9.png';
import img5 from '../../../assets/icon/acts/2.png';
import img6 from '../../../assets/icon/acts/6.png';
import img7 from '../../../assets/icon/acts/7.png';
import img8 from '../../../assets/icon/acts/10.png';
import actsData from '../../../data/types/actsData';

const images: Record<string, string> = {
  '5.png': img1,
  'menu1.png': img2,
  '11.png': img3,
  '9.png': img4,
  '2.png': img5,
  '6.png': img6,
  '7.png': img7,
  '10.png': img8
};

// interface Btn {
//   id: string;
//   title: string;
//   image: string;
//   url: string;
// }

function ActsMain() {
  const navigate = useNavigate();
  return (
    <section className={classes.materials}>
      <h2 className={classes.title}>Діяльність</h2>
      <div className={classes.list}>
        {actsData.map((btn) => (
          // <Link key={btn.id} to={btn.url}>
          <button type="button" className={classes.item} onClick={() => navigate(btn.url)}>
            <div
              className={classes.image}
              style={{ backgroundImage: `url(${images[btn.image]})` }}
            />
            <div className={classes.name}>{btn.title}</div>
          </button>
          // </Link>
        ))}
      </div>
    </section>
  );
}

export default ActsMain;
