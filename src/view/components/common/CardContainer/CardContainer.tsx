import React from 'react';
import * as classes from './cardcontainer.module.css';
import NewsCard from '../NewsCard/NewsCard';

interface DataObject {
  id: string;
  [key: string]: string;
}

interface CardContainesProps {
  data: DataObject[];
  goToNews: (id: string) => void;
}

function CardContaines({ data, goToNews }: CardContainesProps) {
  return (
    <div className={classes.cardContainer}>
      {data && data.length > 0 ? (
        data.map((item: DataObject) => {
          return (
            <NewsCard
              // eslint-disable-next-line react/no-array-index-key
              key={item.id}
              news={item}
              goToNews={() => goToNews('0')}
            />
          );
        })
      ) : (
        <div className={classes.noProduct}>
          {/* <img src={NoProductImg} alt="no products" /> */}
          <h2>NO PRODUCTS FOUND</h2>
        </div>
      )}
    </div>
  );
}

export default CardContaines;
