import React from 'react';
import * as classes from './cardcontainer.module.css';
import NewsCard from '../NewsCard/NewsCard';

interface DataObject {
  id: string;
  [key: string]: string;
}

interface CardContainesProps {
  data: DataObject[];
  offset: number;
  itemsPerPage: number;
  goToNews: (id: string) => void;
}

function CardContaines({ data, offset, itemsPerPage, goToNews }: CardContainesProps) {
  // eslint-disable-next-line no-console
  console.log(offset, itemsPerPage);
  const sliceData: DataObject[] = data.slice(offset, offset + itemsPerPage);

  return (
    <>
      <h2 className={classes.title}>Останні новини Куликівського ліцею</h2>
      <div className={classes.cardContainer}>
        {sliceData && sliceData.length > 0 ? (
          sliceData.map((item: DataObject) => {
            return <NewsCard key={item.id} news={item} goToNews={() => goToNews('0')} />;
          })
        ) : (
          <div className={classes.noProduct}>
            {/* <img src={NoProductImg} alt="no products" /> */}
            <h2>NO PRODUCTS FOUND</h2>
          </div>
        )}
      </div>
    </>
  );
}

export default CardContaines;
