/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-console */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import * as classes from './documents.module.css';
import { AppState } from '../../../data/types/main-props';
import Header from '../../components/common/header/header';
import Loader from '../../components/common/Loader/Loader';
import Footer from '../../components/common/footer/footer';
import PageContainer from '../../components/PageContainer/PageContainer';
import getDocuments from '../../../data/api/getDocuments';

const page = 'documents';
export const ITEMS_PER_PAGE_NEWS = 8;

interface DataObject {
  id: string;
  [key: string]: string;
}

interface DocumentsProps {
  state: AppState;
  setState: React.Dispatch<React.SetStateAction<AppState>>;
}

const tableDocuments = {
  tableName: '',
  sheetName: 'Відповіді форми (1)',
  title: ''
};

function Documents({ state, setState }: DocumentsProps) {
  const [data, setData] = useState<DataObject[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
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
        setData(responseData);
      }
    };
    setLoading(true);
    fetchData();
    setLoading(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sheetName, idTable]);

  console.log(data);

  return (
    <div className={classes.wrapper}>
      <Header state={state} setState={setState} page={page} />
      <main className={classes.content}>
        {!loading && data ? (
          <>
            <h2>Документи</h2>
            <PageContainer data={data} documents={true} />
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
