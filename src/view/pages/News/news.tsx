/* eslint-disable no-console */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
import NewsItem from '../../components/NewsItem/newsitem';
import SearchBar from '../../components/SearchBar/SearchBar';
import SortBar from '../../components/SortBar/SortBar';

const page = 'news';
export const ITEMS_PER_PAGE_NEWS = 8;

interface DataObject {
  id: string;
  [key: string]: string;
}

function News({ state, setState }: MainProps) {
  const [data, setData] = useState<DataObject[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [offset, setOffset] = useState<number>(0);
  const [activePaginationBtn, setActivePaginationBtn] = useState<number>(0);
  const [sorting, setSorting] = useState<string>('');
  const [search, setSearch] = useState<string>('');
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const idKey = searchParams.get('id');
  // eslint-disable-next-line no-console
  console.log('idKey', idKey);

  useEffect(() => {
    const fetchData = async () => {
      const responseData: ResponseNews[] | null = await getNews(false);
      if (responseData) {
        const trData: DataObject[] | null = responseToNews('Аркуш1', responseData, true);
        if (trData) {
          // console.log('responseDataNews', trData);
          // const filteredData = trData.filter((item) => item['show'] && item['show'] === '1');
          // setData(filteredData);
          // setState((prevState) => ({ ...prevState, productsAmount: filteredData.length }));
          let sortingData: DataObject[] = [];
          if (sorting === '') {
            sortingData = trData;
          } else if (sorting === 'name.en asc') {
            sortingData = trData.sort((a: DataObject, b: DataObject) =>
              a['Назва новини'].localeCompare(b['Назва новини'])
            );
          } else if (sorting === 'name.en desc') {
            sortingData = trData.sort((a: DataObject, b: DataObject) =>
              b['Назва новини'].localeCompare(a['Назва новини'])
            );
          } else if (sorting === 'date asc') {
            sortingData = trData.sort(
              (a: DataObject, b: DataObject) => parseInt(a.id, 10) - parseInt(b.id, 10)
            );
          } else if (sorting === 'date desc') {
            sortingData = trData.sort(
              (a: DataObject, b: DataObject) => parseInt(b.id, 10) - parseInt(a.id, 10)
            );
          }
          const sortingSearchingData: DataObject[] = sortingData.filter(
            (item: DataObject) =>
              item['Назва новини'].toLowerCase().indexOf(search.toLowerCase()) !== -1
          );
          setData(sortingSearchingData);
          setState((prevState) => ({ ...prevState, productsAmount: sortingSearchingData.length }));
        }
      }
    };
    setLoading(true);
    fetchData();
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, sorting]);

  function goToNews(id: string) {
    // eslint-disable-next-line no-console
    console.log('показуємо новину', id);
    navigate(`/news?id=${id}`);
  }

  function offsetHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (e.currentTarget) {
      setOffset(+e.currentTarget.id * ITEMS_PER_PAGE_NEWS);
      setActivePaginationBtn(+e.currentTarget.id);
    }
  }

  function searchHandler(event: React.ChangeEvent<HTMLInputElement>): void {
    setSearch(event.currentTarget.value);
  }

  return (
    <div className={classes.newsWrapper}>
      <Header state={state} setState={setState} page={page} />
      <main className={classes.news}>
        {!loading && data ? (
          idKey !== null ? (
            <NewsItem news={data.find((item) => item.id === idKey)} />
          ) : (
            <>
              <h2 className={classes.title}>Останні новини Куликівського ліцею</h2>
              <div className={classes.barWrapper}>
                <SearchBar search={search} onChange={searchHandler} />
                <SortBar value={sorting} onChange={(e) => setSorting(e.target.value)} />
              </div>
              <CardContainer
                data={data}
                goToNews={(id: string) => goToNews(id)}
                offset={offset}
                itemsPerPage={ITEMS_PER_PAGE_NEWS}
              />
              <PaginationBlock
                activeId={activePaginationBtn}
                itemsPerPage={ITEMS_PER_PAGE_NEWS}
                onClickHandler={(e) => offsetHandler(e)}
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
