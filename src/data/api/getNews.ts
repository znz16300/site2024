// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const tableNews = {
  tableName: '1Dk0WYpOKeRoDATgzMkIkFjUcFwNAG5MRn4W7bEyzd0M',
  sheetName: 'Аркуш1'
};

async function getNews() {
  try {
    const response = await axios.get(
      `https://schooltools.pythonanywhere.com/getmultiblock/${tableNews.tableName}`
    );
    // eslint-disable-next-line no-console
    console.log(response.data);
    return response.data;
  } catch (err) {
    return null;
  }
}

export default getNews;
