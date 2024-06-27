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
  documents: boolean;
}

function PageContainer({ data, documents }: PageContainerProps) {
  console.log('documents', documents);

  return (
    <div className={classes.wrapper}>
      {data.map((item: DataObject) => (
        <Card documents={documents} data={item} />
      ))}
    </div>
  );
}

export default PageContainer;
