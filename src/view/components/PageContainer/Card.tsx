import React from 'react';
import * as classes from './card.module.css';

interface DataObject {
  id: string;
  [key: string]: string;
}

interface CardProps {
  data: DataObject;
}

function Card({ data }: CardProps) {
  return (
    <div className={classes.card} key={data.id}>
      {data['Абзац']}
    </div>
  );
}

export default Card;
