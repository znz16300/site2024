/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../../App';
import Footer from '../../components/common/footer/footer';
import * as classes from './сourses.module.css';
import Loader from '../../components/common/Loader/Loader';
import Header from '../../components/common/header/header';
import getCourses from '../../../data/api/getCourses';
import PaginationBlock from '../../components/PaginationBlock/PaginationBlock';
import CoursesContainer from '../../components/CoursesContainer/CoursesContainer';
import CoursesDetails from '../../components/CoursesDetails/CoursesDetails';
import { DriveFile } from '../../../data/types/interfaces/googleFileInfo';
import { params } from '../../../data/api/getParams';

// export const ITEMS_PER_PAGE_NEWS = 10;

interface DataObject {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

function Сourses() {
  const [data, setData] = useState<DataObject[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [visibleDetails, setVisibleDetails] = useState(false);
  const [teacher, setTeacher] = useState<string>('');
  const [searchValue, setSearchValue] = useState<string>('');
  const [offset, setOffset] = useState<number>(0);
  const [activePaginationBtn, setActivePaginationBtn] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const { state, setState } = useAppContext();
  const [selectedItem, setSelectedItem] = useState<DataObject | null>(null);
  const [fileInfo, setFileInfo] = useState<DriveFile | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Початок завантаження
      const responseData: DataObject[] | null = await getCourses(
        false,
        teacher,
        state.oauth?.google_public_api_key as string
      );
      if (responseData) {
        setData(responseData);
        setState((prevState) => ({ ...prevState, productsAmount: responseData.length }));
      }
      setLoading(false);
    };

    if (teacher === '') {
      setData(null);
    } else {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [teacher, setTeacher, setState]);

  function handleEdit(id: string) {
    // eslint-disable-next-line no-console
    console.log('edit', id);
  }

  function handleView(e: React.MouseEvent<HTMLDivElement, MouseEvent>, id: string) {
    e.stopPropagation();
    if (data) {
      const item = data.find((i) => i.id === id);
      if (item) {
        setSelectedItem(item);
        setFileInfo(item.fileInfo);
        setVisibleDetails(true);
      }
    }
  }

  function handleRemove(id: string) {
    // eslint-disable-next-line no-console
    console.log('remove', id);
  }

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
              {params.TEACHERS.sort((a, b) => a.localeCompare(b)).map((item) => (
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
              itemsPerPage={itemsPerPage}
              handleView={handleView}
              handleEdit={handleEdit}
              handleRemove={handleRemove}
            />
            <PaginationBlock
              activeId={activePaginationBtn}
              itemsPerPage={itemsPerPage}
              setItemsPerPage={setItemsPerPage}
              onClickHandler={(e) => offsetHandler(e)}
              state={state}
            />
          </>
        ) : (
          <div className={classes.noData}>Оберіть педагогічного працівника зі списку</div>
        )}
        {visibleDetails && selectedItem && (
          <CoursesDetails
            selectedItem={selectedItem}
            fileInfo={fileInfo}
            setVisibleDetails={setVisibleDetails}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Сourses;
