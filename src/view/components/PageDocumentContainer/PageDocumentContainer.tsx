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
  offset: number;
  itemsPerPage: number;
}

function PageDocumentContainer({ offset, data, itemsPerPage }: PageDocumentContainerProps) {
  const sliceData: DataObject[] = data.slice(offset, offset + itemsPerPage);

  return (
    <div className={classes.wrapper}>
      {sliceData.map((item: DataObject) => (
        <CardDocument data={item} key={item.id} />
      ))}
    </div>
  );
}

export default PageDocumentContainer;
