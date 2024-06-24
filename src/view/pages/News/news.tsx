import React, { useEffect, useState } from 'react';
import Header from '../../components/common/header/header';
import { MainProps } from '../../../data/types/main-props';
import Footer from '../../components/common/footer/footer';
import * as classes from './news.module.css';
import getNews from '../../../data/api/getNews';

const page = 'news';
interface ResponseData {
  templFile: string;
  header: string[];
  data: string[][];
}

function News({ state, setState }: MainProps) {
  const [data, setData] = useState<ResponseData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const responseData: ResponseData[] | null = await getNews();
      if (responseData) {
        setData(responseData);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.newsWrapper}>
      <Header state={state} setState={setState} page={page} />
      <main className={classes.news}>
        {data ? (
          data.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={index}>
              <h2>{item.templFile}</h2>
              {/* Відобразити інші дані з item тут */}
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default News;
