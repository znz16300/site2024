/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-console */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import * as classes from './documents.module.css';
import Loader from '../../components/common/Loader/Loader';
import Footer from '../../components/common/footer/footer';
import getDocuments from '../../../data/api/getDocuments';
import PageDocumentContainer from '../../components/PageDocumentContainer/PageDocumentContainer';
import PaginationBlock from '../../components/PaginationBlock/PaginationBlock';
import SortBar from '../../components/SortBar/SortBar';
import SearchBar from '../../components/SearchBar/SearchBar';
// eslint-disable-next-line import/no-cycle
import { useAppContext } from '../../../App';
import Header from '../../components/common/header/header';

const page = 'documents';

interface DataObject {
  id: string;
  [key: string]: string;
}

const tableDocuments = {
  tableName: '',
  sheetName: 'Відповіді форми (1)',
  title: ''
};

function Documents() {
  const { state, setState } = useAppContext();
  const [data, setData] = useState<DataObject[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [activePaginationBtn, setActivePaginationBtn] = useState<number>(0);
  const [offset, setOffset] = useState<number>(0);
  const [sorting, setSorting] = useState<string>('');
  const [search, setSearch] = useState<string>('');
  const [itemsPerPage, setItemsPerPage] = useState<number>(8);
  // const navigate = useNavigate();
  const idTable = '1O_bJjH8TAHww34uxA51rdyJoX4PaxMGOzL57N8G7H34';
  const sheetName = 'Відповіді форми (1)';

  useEffect(() => {
    const fetchData = async () => {
      if (idTable && sheetName) {
        tableDocuments.tableName = idTable;
        tableDocuments.sheetName = sheetName;
      }
      const responseData: DataObject[] | null = await getDocuments(false, tableDocuments);
      if (responseData) {
        let sortingData: DataObject[] = [];
        if (sorting === '') {
          sortingData = responseData.reverse();
        } else if (sorting === 'name.en asc') {
          sortingData = responseData.sort((a: DataObject, b: DataObject) =>
            a['Назва документу'].localeCompare(b['Назва документу'])
          );
        } else if (sorting === 'name.en desc') {
          sortingData = responseData.sort((a: DataObject, b: DataObject) =>
            b['Назва документу'].localeCompare(a['Назва документу'])
          );
        } else if (sorting === 'date asc') {
          sortingData = responseData.sort(
            (a: DataObject, b: DataObject) => parseInt(a.id, 10) - parseInt(b.id, 10)
          );
        } else if (sorting === 'date desc') {
          sortingData = responseData.sort(
            (a: DataObject, b: DataObject) => parseInt(b.id, 10) - parseInt(a.id, 10)
          );
        }
        const sortingSearchingData: DataObject[] = sortingData.filter(
          (item: DataObject) =>
            item['Назва документу'].toLowerCase().indexOf(search.toLowerCase()) !== -1
        );
        setData(sortingSearchingData);
        setState((prevState) => ({ ...prevState, productsAmount: sortingSearchingData.length }));
      }
    };
    setLoading(true);
    fetchData();
    setLoading(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, sorting, sheetName, idTable]);

  function offsetHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (e.currentTarget) {
      if (e.currentTarget.id === 'pagLeft') {
        setOffset((activePaginationBtn - 1) * itemsPerPage);
        setActivePaginationBtn(activePaginationBtn - 1);
      } else if (e.currentTarget.id === 'pagRight') {
        setOffset((activePaginationBtn + 1) * itemsPerPage);
        setActivePaginationBtn(activePaginationBtn + 1);
      } else if (e.currentTarget.id === 'pagFirst') {
        setOffset(0);
        setActivePaginationBtn(0);
      } else {
        setOffset(+e.currentTarget.id * itemsPerPage);
        setActivePaginationBtn(+e.currentTarget.id);
      }
    }
  }

  function searchHandler(event: React.ChangeEvent<HTMLInputElement>): void {
    setSearch(event.currentTarget.value);
  }

  return (
    <div className={classes.wrapper}>
      <Header page={page} />
      <main className={classes.content}>
        {!loading && data ? (
          <>
            <h2>Документи</h2>
            <div className={classes.barWrapper}>
              <SearchBar search={search} onChange={searchHandler} />
              <SortBar value={sorting} onChange={(e) => setSorting(e.target.value)} />
            </div>
            <PageDocumentContainer offset={offset} itemsPerPage={itemsPerPage} data={data} />

            <PaginationBlock
              activeId={activePaginationBtn}
              itemsPerPage={itemsPerPage}
              setItemsPerPage={setItemsPerPage}
              onClickHandler={(e) => offsetHandler(e)}
              state={state}
            />
          </>
        ) : (
          <Loader />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Documents;
