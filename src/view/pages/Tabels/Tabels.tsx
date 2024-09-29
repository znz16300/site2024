/* eslint-disable react/no-children-prop */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-console */
import React, { useState } from 'react';
import * as classes from './tabels.module.css';
import { REASONS } from '../../../constants';
import Header from '../../components/common/header/header';
import Footer from '../../components/common/footer/footer';
import Button from '../../components/common/Button/Button';
import getTabel from '../../../data/api/getTabel';
import Modal from '../../components/common/modal/modal';
import { params } from '../../../data/api/getParams';

function Tabels() {
  const [teacher, setTeacher] = useState<string>('');
  const [reasons, setReasons] = useState<string>('');
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [resultTabel, setResultTabel] = useState<boolean>(false);
  async function handlerGetTable(): Promise<void> {
    await getTabel(month, year);
    setResultTabel(true);
    setTimeout(() => setResultTabel(false), 3000);
  }

  const MONTH = [
    { value: 9, title: 'Вересень' },
    { value: 10, title: 'Жовтень' },
    { value: 11, title: 'Листопад' },
    { value: 12, title: 'Грудень' },
    { value: 1, title: 'Січень' },
    { value: 2, title: 'Лютий' },
    { value: 3, title: 'Березень' },
    { value: 4, title: 'Квітень' },
    { value: 5, title: 'Травень' },
    { value: 6, title: 'Червень' },
    { value: 7, title: 'Липень' },
    { value: 8, title: 'Серпень' }
  ];
  const YEAR = [
    { value: 2024, title: '2024' },
    { value: 2025, title: '2025' },
    { value: 2026, title: '2026' },
    { value: 2027, title: '2027' },
    { value: 2028, title: '2028' },
    { value: 2029, title: '2029' },
    { value: 2030, title: '2030' }
  ];

  function handler123(): void {
    // throw new Error('Function not implemented.');
  }

  return (
    <>
      <Header page="tables" />
      <main className={classes.wrapper}>
        <div className={classes.filter}>
          <div className={classes.blocsWrapper}>
            <div className={classes.tabelWrapper}>
              <div className={classes.labelBlock}>Відсутні</div>
              <label className={classes.labelWrapper} htmlFor="teacher">
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
              <label className={classes.labelWrapper} htmlFor="from">
                З якого
                <input id="from" type="date" />
              </label>
              <label className={classes.labelWrapper} htmlFor="to">
                по яке
                <input id="to" type="date" />
              </label>
              <div>
                <label className={classes.labelWrapper} htmlFor="reasons">
                  Причина відсутності:&nbsp;
                  <select
                    className={classes.select}
                    id="reasons"
                    value={reasons}
                    onChange={(e) => setReasons(e.currentTarget.value)}>
                    <option key="empty" value="" aria-label="empty" />
                    {REASONS.sort((a, b) => a.title.localeCompare(b.title)).map((item) => (
                      <option key={item.title} value={item.title}>
                        {item.title}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <Button className={classes.btn} onClick={handler123} aria-label="get">
                Додати
              </Button>
            </div>
            <div className={classes.tabelWrapper}>
              <div className={classes.labelBlock}>Табель</div>
              <label className={classes.labelWrapper} htmlFor="month">
                місяць
                <select
                  name="month"
                  id="month"
                  value={month}
                  onChange={(e) => setMonth(parseInt(e.currentTarget.value, 10))}>
                  {MONTH.map((item) => (
                    <option value={item.value} key={item.value}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </label>
              <label className={classes.labelWrapper} htmlFor="year">
                рік
                <select
                  name="year"
                  id="year"
                  value={year}
                  onChange={(e) => setYear(parseInt(e.currentTarget.value, 10))}>
                  {YEAR.map((item) => (
                    <option value={item.value} key={item.value}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </label>
              <div>
                <Button className={classes.btn} onClick={handlerGetTable} aria-label="get">
                  Отримати
                </Button>
              </div>
            </div>
          </div>
        </div>
        {resultTabel && (
          <Modal
            style={undefined}
            visible={resultTabel}
            setVisible={setResultTabel}
            children={<div className={classes.resultLabel}>Виконано</div>}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default Tabels;
