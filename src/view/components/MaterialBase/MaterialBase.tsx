/* eslint-disable no-return-assign */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as classes from './materialbase.module.css';
import SimpleCarousel from '../common/Slider/simpleCarousel';
import img1 from '../../../assets/img/rooms/1.jpg';
import img2 from '../../../assets/img/rooms/2.jpg';
import img3 from '../../../assets/img/rooms/3.jpg';
import img4 from '../../../assets/img/rooms/4.jpg';
import img5 from '../../../assets/img/rooms/5.jpg';
import img6 from '../../../assets/img/rooms/6.jpg';
import img7 from '../../../assets/img/rooms/7.jpg';
import img8 from '../../../assets/img/rooms/8.jpg';
import img9 from '../../../assets/img/rooms/9.jpg';
import roomData from '../../../data/types/roomData';
import Button from '../common/Button/Button';

const images: Record<string, string> = {
  '1.jpg': img1,
  '2.jpg': img2,
  '3.jpg': img3,
  '4.jpg': img4,
  '5.jpg': img5,
  '6.jpg': img6,
  '7.jpg': img7,
  '8.jpg': img8,
  '9.jpg': img9
};

const slides = roomData.map((room) => ({
  ...room,
  image: images[room.image]
}));

const settings = {
  swipe: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

function MaterialBase() {
  const navigate = useNavigate();

  const goToPage = (path: string) => {
    navigate(path);
  };

  return (
    <section className={classes.materials}>
      <div className={classes.picture} />
      <h2 className={classes.title}>Матеріально-технічна база закладу</h2>
      <SimpleCarousel slides={slides} settings={settings} />
      <Button onClick={() => goToPage('/materials')}>Більше</Button>
    </section>
  );
}

export default MaterialBase;
