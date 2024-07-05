/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../../App';
import Footer from '../../components/common/footer/footer';
import * as classes from './сourses.module.css';
import Loader from '../../components/common/Loader/Loader';
import Header from '../../components/common/header/header';
import getCourses from '../../../data/api/getCourses';
import ModalWithCloseButton from '../../components/common/ModalWithCloseButton/ModalWithCloseButton';
import TEACHERS from '../../../constants';
import PaginationBlock from '../../components/PaginationBlock/PaginationBlock';
import CoursesContainer from '../../components/CoursesContainer/CoursesContainer';

export const ITEMS_PER_PAGE_NEWS = 10;

interface DataObject {
  id: string;
  [key: string]: string;
}

function Сourses() {
  const [data, setData] = useState<DataObject[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [visibleDetails, setVisibleDetails] = useState(false);
  const [teacher, setTeacher] = useState<string>('');
  const [searchValue, setSearchValue] = useState<string>('');
  const [offset, setOffset] = useState<number>(0);
  const [activePaginationBtn, setActivePaginationBtn] = useState<number>(0);
  const { state, setState } = useAppContext();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Початок завантаження
      const responseData: DataObject[] | null = await getCourses(false, teacher);
      if (responseData) {
        setData(responseData);
        console.log(responseData);
        setState((prevState) => ({ ...prevState, productsAmount: responseData.length }));
      }
      setLoading(false); // Завершення завантаження
    };
    console.log('teacher===', teacher);

    if (teacher === '') {
      setData(null);
    } else {
      fetchData();
    }
  }, [teacher, setTeacher, setState]);

  function handleEdit(id: string) {
    console.log('edit', id);
  }
  function handleView(id: string) {
    console.log('view', id);
    setVisibleDetails(true);
  }
  function handleRemove(id: string) {
    console.log('remove', id);
  }

  function offsetHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (e.currentTarget) {
      if (e.currentTarget.id === 'pagLeft') {
        setOffset((activePaginationBtn - 1) * ITEMS_PER_PAGE_NEWS);
        setActivePaginationBtn(activePaginationBtn - 1);
      } else if (e.currentTarget.id === 'pagRight') {
        setOffset((activePaginationBtn + 1) * ITEMS_PER_PAGE_NEWS);
        setActivePaginationBtn(activePaginationBtn + 1);
      } else if (e.currentTarget.id === 'pagFirst') {
        setOffset(0);
        setActivePaginationBtn(0);
      } else {
        setOffset(+e.currentTarget.id * ITEMS_PER_PAGE_NEWS);
        setActivePaginationBtn(+e.currentTarget.id);
      }
    }
  }

  return (
    <div className={`${classes.coursesWrapper} ${visibleDetails ? classes.fix : ''}`}>
      <Header page="courses" />
      <main className={classes.courses}>
        <h2>Підвищення кваліфікації</h2>
        <div className={classes.filterSearchWrapper}>
          <label className={classes.label} htmlFor="teacher">
            Педагогічний працівник:&nbsp;
            <select
              className={classes.select}
              id="teacher"
              value={teacher}
              onChange={(e) => setTeacher(e.currentTarget.value)}>
              <option key="empty" value="" aria-label="empty" />
              <option key="*" value="*">
                Всі
              </option>
              {TEACHERS.sort((a, b) => a.localeCompare(b)).map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
          <label className={classes.label} htmlFor="search">
            Пошук:&nbsp;
            <input
              id="search"
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.currentTarget.value)}
            />
          </label>
        </div>
        {loading ? (
          <Loader />
        ) : data ? (
          <>
            <CoursesContainer
              data={data}
              offset={offset}
              itemsPerPage={ITEMS_PER_PAGE_NEWS}
              handleView={handleView}
              handleEdit={handleEdit}
              handleRemove={handleRemove}
            />
            <PaginationBlock
              activeId={activePaginationBtn}
              itemsPerPage={ITEMS_PER_PAGE_NEWS}
              onClickHandler={(e) => offsetHandler(e)}
              state={state}
            />
          </>
        ) : (
          <div className={classes.noData}>Оберіть педагогічного працівника зі списку</div>
        )}
        {visibleDetails && (
          <ModalWithCloseButton setVisible={setVisibleDetails}>
            <div>wwwww</div>
          </ModalWithCloseButton>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Сourses;
