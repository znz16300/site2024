/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import * as classes from './coursesContainer.module.css';
import filterIcon from '../../../assets/icons/filter_alt_24dp_FILL0_wght400_GRAD0_opsz24.svg';
// import noFilterIcon from '../../../assets/icons/filter_alt_off_24dp_FILL0_wght400_GRAD0_opsz24.svg';
import downIcon from '../../../assets/icons/arrow_downward_24dp_FILL0_wght400_GRAD0_opsz24.svg';
import { useAppContext } from '../../../App';

interface DataObject {
  id: string;
  [key: string]: string;
}

interface CoursesContainerProps {
  data: DataObject[];
  offset: number;
  itemsPerPage: number;
  handleView: (id: string) => void;
  handleEdit: (id: string) => void;
  handleRemove: (id: string) => void;
}

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

function CoursesContainer({
  data,
  offset,
  itemsPerPage,
  handleView,
  handleEdit,
  handleRemove
}: CoursesContainerProps) {
  const { state } = useAppContext();
  const sliceData: DataObject[] = data.slice(offset, offset + itemsPerPage);
  return (
    <div className={classes.coursesWrapper}>
      <div className={classes.table}>
        <div className={classes.row}>
          <div className={`${classes.cell} ${classes.nameCol}`}>
            <span>ПІБ</span>
            <span>
              <img src={downIcon} alt="" />
              <img src={filterIcon} alt="" />
            </span>
          </div>
          <div className={`${classes.cell} ${classes.titleCol}`}>Тема</div>
          <div className={`${classes.cell} ${classes.durationCol}`}>Годин</div>
          <div className={`${classes.cell} ${classes.schoolCol}`}>Суб&#39;єкт підвищення</div>
          <div className={`${classes.cell} ${classes.buttonsCol}`}>Дії</div>
        </div>
        {sliceData.map((item) =>
          item['Позначка часу'] && item['Позначка часу'].length > 1 ? (
            <div className={classes.row} key={`${item[cols[0]]}${Math.random()}`}>
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
                  style={{
                    display:
                      item['Електронна адреса'].toLowerCase().trim() !== state.user?.email
                        ? 'none'
                        : ''
                  }}
                  className={`${classes.btn} ${classes.btnEdit}`}
                  onClick={() => handleEdit(item.id)}
                />
                <div
                  style={{
                    display:
                      item['Електронна адреса'].toLowerCase().trim() !== state.user?.email
                        ? 'none'
                        : ''
                  }}
                  className={`${classes.btn} ${classes.btnRemove}`}
                  onClick={() => handleRemove(item.id)}
                />
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default CoursesContainer;
