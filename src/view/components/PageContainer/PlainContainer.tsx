import React from 'react';
import * as classes from './plain.module.css';

interface DataObject {
  id: string;
  [key: string]: string;
}

interface PlainContainerProps {
  data: DataObject[];
}

function PlainContainer({ data }: PlainContainerProps) {
  return (
    <>
      {data.map((item: DataObject) => (
        <div className={classes.paragraph} key={item.id}>
          {item['Абзац']}
        </div>
      ))}
    </>
  );
}

export default PlainContainer;
