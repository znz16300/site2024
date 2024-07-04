/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppContext } from '../../../App';
import Footer from '../../components/common/footer/footer';
import * as classes from './сourses.module.css';
import Loader from '../../components/common/Loader/Loader';
import Header from '../../components/common/header/header';
import getCourses from '../../../data/api/getCourses';
import filterIcon from '../../../assets/icons/filter_alt_24dp_FILL0_wght400_GRAD0_opsz24.svg';
// import noFilterIcon from '../../../assets/icons/filter_alt_off_24dp_FILL0_wght400_GRAD0_opsz24.svg';
import downIcon from '../../../assets/icons/arrow_downward_24dp_FILL0_wght400_GRAD0_opsz24.svg';
import ModalWithCloseButton from '../../components/common/ModalWithCloseButton/ModalWithCloseButton';
// import upIcon from '../../../assets/icons/arrow_upward_24dp_FILL0_wght400_GRAD0_opsz24.svg';
// import viewIcon from '../../../assets/icons/visibility_24dp_FILL0_wght400_GRAD0_opsz24.svg';
// import editIcon from '../../../assets/icons/edit_24dp_FILL0_wght400_GRAD0_opsz24.svg';

export const ITEMS_PER_PAGE_NEWS = 8;

interface DataObject {
  id: string;
  [key: string]: string;
}

function Сourses() {
  const [data, setData] = useState<DataObject[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const location = useLocation();
  const { state } = useAppContext();
  const [visibleDetails, setVisibleDetails] = useState(false);

  const searchParams = new URLSearchParams(location.search);
  const idKey = searchParams.get('id');
  // eslint-disable-next-line no-console
  console.log('idKey', idKey);

  useEffect(() => {
    const fetchData = async () => {
      const eMail = state.user?.email;
      if (eMail) {
        const responseData: DataObject[] | null = await getCourses(false, eMail);
        if (responseData) {
          setData(responseData);
          console.log(responseData);
        }
      }
    };
    setLoading(true);
    fetchData();
    setLoading(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const cols = [
    'Позначка часу',
    'Електронна адреса',
    'Працівник, який пройшов курсову підготовку',
    'Назва курсів, семінару, вебінару тощо',
    'Кількість годин',
    'З них з інклюзії',
    'З них з надання психологічної підтримки учасникам освітнього процесу',
    'Тип документа',
    'Номер документа (якщо номера немає, вкажіть "бн" без лапок)',
    'Дата видачі документа',
    'Назва організації чи платформи, на базі якої проходила підготовка, навчання',
    'Форма навчання',
    'Фотокопія сертифікату, свідоцтва тощо	Програма курсів, заходу',
    'Потребує зарахування рішенням педради',
    'Рішення педради про зарахування',
    'Рік атестації'
  ];
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

  return (
    <div className={`${classes.coursesWrapper} ${visibleDetails ? classes.fix : ''}`}>
      <Header page="courses" />
      <main className={classes.courses}>
        {!loading && data ? (
          <>
            <div className={classes.row}>
              <div className={`${classes.cell} ${classes.nameCol}`}>
                <span>ПІБ</span>
                <span>
                  <img src={downIcon} alt="" />
                  <img src={filterIcon} alt="" />
                </span>
              </div>
              <div className={`${classes.cell} ${classes.titleCol}`}>Назва</div>
              <div className={`${classes.cell} ${classes.durationCol}`}>Годин</div>
              <div className={`${classes.cell} ${classes.schoolCol}`}>Суб&#39;єкт підвищення</div>
              <div className={`${classes.cell} ${classes.buttonsCol}`} />
            </div>
            {data.map((item) => (
              <div className={classes.row} key={`${item[cols[0]]}`}>
                <div className={`${classes.cell} ${classes.nameCol}`}>{item[cols[2]]}</div>
                <div className={`${classes.cell} ${classes.titleCol}`}>{item[cols[3]]}</div>
                <div className={`${classes.cell} ${classes.durationCol}`}>{item[cols[4]]}</div>
                <div className={`${classes.cell} ${classes.schoolCol}`}>{item[cols[10]]}</div>
                <div className={`${classes.cell} ${classes.buttonsCol}`}>
                  <div
                    className={`${classes.btn} ${classes.btnView}`}
                    onClick={() => handleView(item.id)}
                  />
                  <div
                    className={`${classes.btn} ${classes.btnEdit}`}
                    onClick={() => handleEdit(item.id)}
                  />
                  <div
                    className={`${classes.btn} ${classes.btnRemove}`}
                    onClick={() => handleRemove(item.id)}
                  />
                </div>
              </div>
            ))}
          </>
        ) : (
          <Loader />
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
