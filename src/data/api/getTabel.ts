/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import getDaysInMonth from '../utils/getDaysInMonth';
import { formatDate, parseDate } from '../utils/parseDate';

interface DataObject {
  id: string;
  [key: string]: string | DataObject;
}

interface WorkerSchedule {
  id: string;
  worker: string;
  row1Title: string;
  row1: string[];
  row2Title: string;
  row2: string[];
  row3Title: string;
  row3: string[];
  row4Title: string;
  row4: string[];
}

async function getAbsenTeachers() {
  const nameSheet = 'Працівники для табеля та замін';
  try {
    const response = await axios.get(
      `${process.env.PYTHONANYWHERE_SERVER_URL}/getdata/${process.env.GOOGLESHEETS_TABLE_ZAMINI as string}/${nameSheet}/T2:W1000`
    );
    return response.data;
  } catch (err) {
    console.error('Error fetching news:', err);
    return null;
  }
}

function transformData(data: DataObject[]): WorkerSchedule[] | null {
  const result: WorkerSchedule[] = [];

  for (let i = 0; i < data.length; i += 4) {
    const worker = data[i];
    if (worker && worker['Працівник']) {
      result.push({
        id: worker.id,
        worker: worker['Працівник'] as string,
        row1Title: worker['Працівник'] as string,
        row1: [
          data[i]['НД'] as string,
          data[i]['ПН'] as string,
          data[i]['ВТ'] as string,
          data[i]['СР'] as string,
          data[i]['ЧТ'] as string,
          data[i]['ПТ'] as string,
          data[i]['СБ'] as string
        ],
        row2Title: data[i + 1] ? (data[i + 1]['Працівник'] as string) : '',
        row2: [
          data[i + 1] ? (data[i + 1]['НД'] as string) : '',
          data[i + 1] ? (data[i + 1]['ПН'] as string) : '',
          data[i + 1] ? (data[i + 1]['ВТ'] as string) : '',
          data[i + 1] ? (data[i + 1]['СР'] as string) : '',
          data[i + 1] ? (data[i + 1]['ЧТ'] as string) : '',
          data[i + 1] ? (data[i + 1]['ПТ'] as string) : '',
          data[i + 1] ? (data[i + 1]['СБ'] as string) : ''
        ],
        row3Title: data[i + 2] ? (data[i + 2]['Працівник'] as string) : '',
        row3: [
          data[i + 2] ? (data[i + 2]['НД'] as string) : '',
          data[i + 2] ? (data[i + 2]['ПН'] as string) : '',
          data[i + 2] ? (data[i + 2]['ВТ'] as string) : '',
          data[i + 2] ? (data[i + 2]['СР'] as string) : '',
          data[i + 2] ? (data[i + 2]['ЧТ'] as string) : '',
          data[i + 2] ? (data[i + 2]['ПТ'] as string) : '',
          data[i + 2] ? (data[i + 2]['СБ'] as string) : ''
        ],
        row4Title: data[i + 3] ? (data[i + 3]['Працівник'] as string) : '',
        row4: [
          data[i + 3] ? (data[i + 3]['НД'] as string) : '',
          data[i + 3] ? (data[i + 3]['ПН'] as string) : '',
          data[i + 3] ? (data[i + 3]['ВТ'] as string) : '',
          data[i + 3] ? (data[i + 3]['СР'] as string) : '',
          data[i + 3] ? (data[i + 3]['ЧТ'] as string) : '',
          data[i + 3] ? (data[i + 3]['ПТ'] as string) : '',
          data[i + 3] ? (data[i + 3]['СБ'] as string) : ''
        ]
      });
    }
  }

  return result;
}

async function getWorkloadTeachers() {
  const nameSheet = 'Працівники для табеля та замін';
  try {
    const response = await axios.get(
      `${process.env.PYTHONANYWHERE_SERVER_URL}/getdata/${process.env.GOOGLESHEETS_TABLE_ZAMINI as string}/${nameSheet}/B3:J500`
    );
    const result = response.data;
    if (result) {
      const transformed = transformData(result);
      return transformed;
    }
  } catch (err) {
    console.error('Error fetching news:', err);
    return null;
  }
  return null;
}

interface DateObject {
  reason: string;
  date: Date;
}

function isDateInArray(date: Date, array: DateObject[]): boolean {
  return array.some((item) => item.date.getTime() === date.getTime());
}

function buildTable(
  month: number,
  year: number,
  absentTeachers: DataObject[],
  workloadTeachers: WorkerSchedule[]
): string[] {
  const result = [];
  const daysInMonth = getDaysInMonth(month, year);
  const tabCount = 31 - daysInMonth;
  result.push(
    `ПІБ, посада\t${Array.from({ length: daysInMonth }, (_, i) => i + 1).join('\t')}${'\t'.repeat(tabCount)}`
  );
  result.push('');
  for (let i = 0; i < workloadTeachers.length; i += 1) {
    const teacher = workloadTeachers[i];
    const teacherAbsent = absentTeachers.filter((item) => item['Працівник'] === teacher.worker);
    // Формуємо масив дат, де цей працівник відсутній із зазначенням причини
    const absentDates: DateObject[] = [];
    teacherAbsent.forEach((item) => {
      const dateStart = new Date(parseDate(item['Початок'] as string));
      const dateFinish = new Date(parseDate(item['Кінець'] as string));
      const currentDate = dateStart;
      while (currentDate.getTime() <= dateFinish.getTime()) {
        absentDates.push({ reason: item['Мітка'] as string, date: new Date(currentDate) });
        currentDate.setDate(currentDate.getDate() + 1);
      }
    });
    let row1 = teacher.row1Title;
    let row2 = teacher.row2Title;
    let row3 = teacher.row3Title;
    let row4 = teacher.row4Title;
    for (let day = 1; day < daysInMonth + 1; day += 1) {
      const date = new Date(year, month - 1, day);
      const dayOfWeek = date.getDay();
      // якщо вчитель у цей день не на лікарняному
      if (!isDateInArray(date, absentDates)) {
        row1 += `\t${teacher.row1[dayOfWeek]}`;
        row2 += `\t${teacher.row2[dayOfWeek]}`;
        row3 += `\t${teacher.row3[dayOfWeek]}`;
        row4 += `\t${teacher.row4[dayOfWeek]}`;
      } else {
        // Якщо ж на лікарняному
        row1 += `\t${absentDates.find((item) => item.date.getTime() === date.getTime())?.reason}`;
        row2 += '\t';
        row3 += '\t';
        row4 += '\t';
      }
    }
    // Якщо кількість днів у місяці менша ніж 31, додаємо таби
    row1 += '\t'.repeat(tabCount);
    row2 += '\t'.repeat(tabCount);
    row3 += '\t'.repeat(tabCount);
    row4 += '\t'.repeat(tabCount);
    result.push(row1);
    result.push(row2);
    result.push(row3);
    result.push(row4);
  }
  result.push(
    `${formatDate(new Date())}\t${formatDate(new Date(year, month - 1, 1))}\t${formatDate(new Date(year, month - 1, daysInMonth))}`
  );

  return result;
}

async function sendToTabelSheet(table: string[]) {
  if (table.length > 0) {
    const arraysTable = table.map((row) => row.split('\t'));
    console.log('table', arraysTable);
    const url = `${process.env.PYTHONANYWHERE_SERVER_URL}/tabel`;
    const formData = new URLSearchParams();
    formData.append(
      'text',
      JSON.stringify({
        idSSheet: process.env.GOOGLESHEETS_TABLE_ZAMINI_TABLE_TABEL as string,
        nameSheet: process.env.GOOGLESHEETS_TABLE_ZAMINI_SHEET_TABEL as string,
        addr: 'D3',
        table: arraysTable
      })
    );
    axios
      .post(url, formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

async function getTabel(month: number, year: number) {
  try {
    const [absentTeachers, workloadTeachers] = await Promise.all([
      getAbsenTeachers(),
      getWorkloadTeachers()
    ]);

    if (absentTeachers && workloadTeachers) {
      const table: string[] = buildTable(month, year, absentTeachers, workloadTeachers);
      sendToTabelSheet(table);
      return table;
    }
    console.error('Failed to fetch one or both data sets');
  } catch (err) {
    console.error('Error in getTabel:', err);
  }
  return null;
}

export default getTabel;
