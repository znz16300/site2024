/* eslint-disable prettier/prettier */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import { COURSES_TABLE_COLLS } from '../../constants';
import { fullNameToInic, fullNameToParts } from '../utils/nameUtils';
import { getGenitiveAll } from '../utils/getPatronymic';
import { params } from './getParams';

interface Context {
  teacher: string;
  teacherINIC: string;
  golova: string;
  zaklad: string;
  date: string;
  file: string;
  [key: string]: string;
}

interface DataObject {
  id: string;
  [key: string]: string;
}

function formatDate(date: Date): string {
  let dd: number | string = date.getDate();
  if (dd < 10) dd = `0${dd}`;
  let mm: number | string = date.getMonth() + 1;
  if (mm < 10) mm = `0${mm}`;
  let yy: number | string = date.getFullYear() % 100;
  if (yy < 10) yy = `0${yy}`;
  return `${dd}.${mm}.20${yy}`;
}

function createContext(records: DataObject[], golova: string, zaklad: string): Context {
  // eslint-disable-next-line import/no-extraneous-dependencies, global-require, @typescript-eslint/no-var-requires
  // const shevchenko = require('shevchenko');
  const currentDate = new Date();
  const teacher = records[0][COURSES_TABLE_COLLS[2].field];
  const teacherParts = fullNameToParts(teacher);
  const teacherRod = getGenitiveAll(
    `${teacherParts.lastName} ${teacherParts.firstName} ${teacherParts.middleName}`
  );

  const teacherINIC = fullNameToInic(teacher);
  const formattedDate = formatDate(currentDate);

  const context: Context = {
    teacher: teacherRod,
    teacherINIC,
    golova,
    zaklad,
    date: formattedDate,
    file: 'klopot.docx'
  };

  let list = '';
  records.forEach((record, index) => {
    context[`title${index}`] = record.title;
    const sym = index === records.length - 1 ? '.' : ';';
    const long = records[index][COURSES_TABLE_COLLS[4].field];
    const title = records[index][COURSES_TABLE_COLLS[3].field];
    const date = records[index][COURSES_TABLE_COLLS[9].field];
    const num = records[index][COURSES_TABLE_COLLS[8].field];
    const forma = records[index][COURSES_TABLE_COLLS[11].field];
    const subj = records[index][COURSES_TABLE_COLLS[10].field];
    list += `-${'\t'} "${title}" від ${date}, реєстраційний номер - ${num}, кількість годин - ${long}, форма підвищення кваліфікації - інституційна (${forma}), навчання за програмою підвищення кваліфікації (${subj})${sym}\n`;
  });

  const s1 = records.length === 1 ? '' : 'и';
  const s2 = records.length === 1 ? 'у' : 'ів';
  const p1 = records.length === 1 ? 'а' : 'и';
  const p2 = records.length === 1 ? 'у' : 'ів';

  context.list = list;
  context.s1 = s1;
  context.s2 = s2;
  context.p1 = p1;
  context.p2 = p2;
  context.dateInput = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;

  return context;
}

async function getClopot(courses: DataObject[]) {
  if (courses.length > 0) {
    console.log('params.GOLOVA', params.GOLOVA);
    const context = createContext(courses, params.GOLOVA, params.ZAKLAD);
    const url = `${process.env.PYTHONANYWHERE_SERVER_URL}/getFileKursi`;
    // Створення URLSearchParams для тіла запиту
    const formData = new URLSearchParams();
    for (const key in context) {
      if (context.hasOwnProperty(key)) {
        formData.append(key, context[key]);
      }
    }

    try {
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });
      // eslint-disable-next-line prefer-destructuring
      const data = response.data;
      document.location.href = `${process.env.PYTHONANYWHERE_SERVER_URL}/test/${data}`;
    } catch (error) {
      console.error('Error fetching file:', error);
    }
  } else {
    console.log('Ви нічого не вибрали');
  }
}

export default getClopot;
