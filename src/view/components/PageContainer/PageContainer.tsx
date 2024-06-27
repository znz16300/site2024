/* eslint-disable no-console */
import React from 'react';
import * as classes from './page.module.css';
import Card from './Card';

interface DataObject {
  id: string;
  [key: string]: string;
}

interface PageContainerProps {
  data: DataObject[];
}

function PageContainer({ data }: PageContainerProps) {
  return (
    <div className={classes.wrapper}>
      {data.map((item: DataObject) =>
        item['Тип (1 - картки, 2- абзаци)'] === '1' ? (
          <Card data={item} />
        ) : (
          <div
            key={item.id}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: item['Абзац'] }}
          />
        )
      )}
    </div>
  );
}

export default PageContainer;
