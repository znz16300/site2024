/* eslint-disable consistent-return */
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

export const params = {
  GOOGLE_TABLE_USE: true,
  TEACHERS: [''],
  GOLOVA: '',
  ZAKLAD: ''
};

export async function getParams() {
  const url = '../data/params.json';
  await axios
    .get(url)
    .then((response) => {
      const { data } = response;
      params.GOOGLE_TABLE_USE = data.GOOGLE_TABLE_USE;
      params.TEACHERS = data.TEACHERS;
      params.GOLOVA = data.GOLOVA;
      params.ZAKLAD = data.ZAKLAD;
    })
    .catch((error) => {
      console.error('Error fetching the JSON file:', error);
    });
  return null;
}

export default getParams;
