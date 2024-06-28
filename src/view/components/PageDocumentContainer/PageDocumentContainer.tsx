/* eslint-disable no-console */
import React from 'react';
import * as classes from './pageDocumentContainer.module.css';
import CardDocument from '../CardDocument/CardDocument';

interface DataObject {
  id: string;
  [key: string]: string;
}

interface PageDocumentContainerProps {
  data: DataObject[];
}

function PageDocumentContainer({ data }: PageDocumentContainerProps) {
  return (
    <div className={classes.wrapper}>
      {data.map((item: DataObject) => (
        <CardDocument data={item} />
      ))}
    </div>
  );
}

export default PageDocumentContainer;
