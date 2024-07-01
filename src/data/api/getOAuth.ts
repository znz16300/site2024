// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import { OAuthObject } from '../types/main-props';

async function getOAuth() {
  try {
    const response = await axios.get(`${process.env.PYTHONANYWHERE_SERVER_URL}/getoauth`);
    const resp: OAuthObject = response.data;
    return resp;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('error');
  }
  return null;
}

export default getOAuth;
