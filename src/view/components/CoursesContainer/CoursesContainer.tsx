/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import * as classes from './coursesContainer.module.css';
import filterIcon from '../../../assets/icons/filter_alt_24dp_FILL0_wght400_GRAD0_opsz24.svg';
// import noFilterIcon from '../../../assets/icons/filter_alt_off_24dp_FILL0_wght400_GRAD0_opsz24.svg';
import downIcon from '../../../assets/icons/arrow_downward_24dp_FILL0_wght400_GRAD0_opsz24.svg';
import { useAppContext } from '../../../App';
import { COURSES_TABLE_COLLS } from '../../../constants';
import Button from '../common/Button/Button';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import getClopot from '../../../data/api/getClopot';

interface DataObject {
  id: string;
  [key: string]: string;
}

interface CoursesContainerProps {
  data: DataObject[];
  offset: number;
  itemsPerPage: number;
  handleView: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, id: string) => void;
  handleEdit: (id: string) => void;
  handleRemove: (id: string) => void;
}

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const selectedItems: Set<DataObject> = new Set<DataObject>();

  function handleCheck(e: React.MouseEvent<HTMLInputElement, MouseEvent>, item: DataObject): void {
    e.stopPropagation();
    if (e.currentTarget.checked) {
      selectedItems.add(item);
    } else {
      selectedItems.delete(item);
    }
  }

  function handlerForm(): void {
    getClopot(Array.from(selectedItems));
  }

  function handleAddCourses(): void {
    window.open(process.env.GOOGLEFORM_NEWS as string, '_blank', 'noopener,noreferrer');
  }

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
            <div
              className={classes.row}
              onClick={(e) => handleView(e, item.id)}
              key={`${item[COURSES_TABLE_COLLS[0].field]}${Math.random()}`}>
              <div className={`${classes.cell} ${classes.nameCol}`}>
                {item[COURSES_TABLE_COLLS[2].field]}
              </div>
              <div className={`${classes.cell} ${classes.titleCol}`}>
                {item[COURSES_TABLE_COLLS[3].field]}
              </div>
              <div className={`${classes.cell} ${classes.durationCol}`}>
                {item[COURSES_TABLE_COLLS[4].field]}
              </div>
              <div className={`${classes.cell} ${classes.schoolCol}`}>
                {item[COURSES_TABLE_COLLS[10].field]}
              </div>
              <div className={`${classes.cell} ${classes.buttonsCol}`}>
                <input
                  type="checkbox"
                  className={`${classes.btn} ${classes.btnCheck}`}
                  onClick={(e) => handleCheck(e, item)}
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
      <div className={classes.btnWrapper}>
        <Button onClick={handlerForm}>Сформувати клопотання</Button>
        <Button onClick={handleAddCourses}>Додати курси</Button>
      </div>
    </div>
  );
}

export default CoursesContainer;
