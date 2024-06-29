/* eslint-disable no-console */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as classes from './page.module.css';
import getPage from '../../../data/api/getPage';
import Loader from '../../components/common/Loader/Loader';
import Footer from '../../components/common/footer/footer';
import PageContainer from '../../components/PageContainer/PageContainer';
// eslint-disable-next-line import/no-cycle
import Header from '../../components/common/header/header';

const page = 'page';
export const ITEMS_PER_PAGE_NEWS = 8;

interface DataObject {
  id: string;
  [key: string]: string;
}

const tablePage = {
  tableName: '',
  sheetName: 'Аркуш1',
  title: ''
};

function Page() {
  const [data, setData] = useState<DataObject[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const location = useLocation();
  // const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const idTable = searchParams.get('keyPages');
  const idTitle = searchParams.get('titlePages');
  // eslint-disable-next-line no-console
  console.log(idTable, idTitle);

  useEffect(() => {
    const fetchData = async () => {
      if (idTable && idTitle) {
        tablePage.tableName = idTable;
        tablePage.title = idTitle;
      }
      const responseData: DataObject[] | null = await getPage(false, tablePage);
      if (responseData) {
        setData(responseData);
      }
    };
    setLoading(true);
    fetchData();
    setLoading(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idTitle, idTable]);

  console.log(data);

  return (
    <div className={classes.wrapper}>
      <Header page={page} />
      <main className={classes.content}>
        {!loading && data ? (
          <>
            <h2>{idTitle}</h2>
            <PageContainer data={data} />
          </>
        ) : (
          <Loader />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Page;
