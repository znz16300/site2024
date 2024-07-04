// eslint-disable-next-line import/no-extraneous-dependencies
import axios, { AxiosResponse } from 'axios';

interface FacebookAttachment {
  media: {
    image: {
      src: string;
    };
  };
}

interface FacebookPostData {
  message: string;
  attachments: {
    data: FacebookAttachment[];
  };
}

const getFacebookPostData = async (
  postId: string,
  accessToken: string
): Promise<FacebookPostData> => {
  try {
    const response: AxiosResponse<FacebookPostData> = await axios.get(
      `https://graph.facebook.com/v12.0/${postId}`,
      {
        params: {
          fields: 'message,attachments',
          access_token: accessToken
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching Facebook post:', error);
    throw new Error('Error fetching Facebook post');
  }
};

export default getFacebookPostData;
