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
    <div className={classes.description}>
      {data.map((item: DataObject) => (
        <div
          key={item.id}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: item['Абзац'] }}
        />
      ))}
    </div>
  );
}

export default PlainContainer;
