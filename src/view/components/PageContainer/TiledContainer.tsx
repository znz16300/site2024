import React from 'react';
import * as classes from './tiled.module.css';
import Card from './Card';

interface DataObject {
  id: string;
  [key: string]: string;
}

interface TiledContainerProps {
  data: DataObject[];
}

function TiledContainer({ data }: TiledContainerProps) {
  // eslint-disable-next-line no-console
  console.log('tiled');
  return (
    <div className={classes.wrapper}>
      {data.map((item: DataObject) => (
        <Card data={item} />
      ))}
    </div>
  );
}

export default TiledContainer;
