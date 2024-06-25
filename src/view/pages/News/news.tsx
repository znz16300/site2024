/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/common/header/header';
import { MainProps } from '../../../data/types/main-props';
import Footer from '../../components/common/footer/footer';
import * as classes from './news.module.css';
import getNews from '../../../data/api/getNews';
import { ResponseNews } from '../../../data/types/interfaces/INews';
import Loader from '../../components/common/Loader/Loader';
import CardContainer from '../../components/common/CardContainer/CardContainer';
import responseToNews from '../../../data/utils/responseToNews';
import PaginationBlock from '../../components/PaginationBlock/PaginationBlock';
import NewsItem from '../NewsItem/newsitem';

const page = 'news';
export const ITEMS_PER_PAGE_NEWS = 8;

interface DataObject {
  id: string;
  [key: string]: string;
}

function goToNews(id: string) {
  // eslint-disable-next-line no-console
  console.log('показуємо новину', id);
}

function News({ state, setState }: MainProps) {
  const [data, setData] = useState<DataObject[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [offset, setOffset] = useState<number>(0);
  const [activePaginationBtn, setActivePaginationBtn] = useState<number>(0);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const idKey = searchParams.get('id');
  // eslint-disable-next-line no-console
  console.log('idKey', idKey);

  useEffect(() => {
    const fetchData = async () => {
      const responseData: ResponseNews[] | null = await getNews(false);
      if (responseData) {
        const trData: DataObject[] | null = responseToNews('Аркуш1', responseData);
        if (trData) {
          setData(trData);
        }
      }
    };
    setLoading(true);
    fetchData();
    setLoading(false);
  }, []);

  return (
    <div className={classes.newsWrapper}>
      <Header state={state} setState={setState} page={page} />
      <main className={classes.news}>
        {!loading && data ? (
          idKey !== null ? (
            <NewsItem state={state} setState={setState} id={idKey} />
          ) : (
            <>
              <CardContainer
                data={data}
                goToNews={(id: string) => goToNews(id)}
                offset={offset}
                itemsPerPage={ITEMS_PER_PAGE_NEWS}
              />
              <PaginationBlock
                activeId={activePaginationBtn}
                itemsPerPage={ITEMS_PER_PAGE_NEWS}
                onClickHandler={(e) => {
                  setOffset(+e.currentTarget.id * ITEMS_PER_PAGE_NEWS);
                  setActivePaginationBtn(+e.currentTarget.id);
                }}
                state={state}
              />
            </>
          )
        ) : (
          <Loader />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default News;
