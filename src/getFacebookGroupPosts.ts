/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

interface FacebookGroupPost {
  id: string;
  message: string;
  // Додаткові поля поста
}

const getFacebookGroupPosts = async (
  groupId: string,
  accessToken: string
): Promise<FacebookGroupPost[]> => {
  try {
    const response = await axios.get(`https://graph.facebook.com/v12.0/${groupId}/feed`, {
      params: {
        access_token: accessToken
      }
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching Facebook group posts:', error);
    throw new Error('Error fetching Facebook group posts');
  }
};

export default getFacebookGroupPosts;
