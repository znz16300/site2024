/* eslint-disable no-console */
import React from 'react';
import PlainContainer from './PlainContainer';
import TiledContainer from './TiledContainer';

interface DataObject {
  id: string;
  [key: string]: string;
}

interface PageContainerProps {
  data: DataObject[];
}

function PageContainer({ data }: PageContainerProps) {
  let tiled = false;

  console.log(data[0]);
  if (data[0]) {
    tiled = data[0]['Тип (1 - картки, 2- абзаци)'] === '1';
  }
  console.log('tiled', tiled);

  return !tiled ? <PlainContainer data={data} /> : <TiledContainer data={data} />;
}

export default PageContainer;
