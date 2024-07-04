/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import getFacebookPostData from '../../../data/api/getFacebookPostData ';
import getFacebookGroupPosts from '../../../getFacebookGroupPosts';

interface FacebookPostProps {
  postId: string;
  accessToken: string;
}

const FacebookPost: React.FC<FacebookPostProps> = ({ postId, accessToken }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [postData, setPostData] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const data = await getFacebookPostData(postId, accessToken);
        // eslint-disable-next-line prettier/prettier
        const data = await getFacebookGroupPosts(postId, accessToken);
        setPostData(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [postId, accessToken]);

  if (!postData) return <p>Loading...</p>;

  return (
    <div>
      <p>{postData.message}</p>
      {postData.attachments &&
        postData.attachments.data.map(
          (
            attachment: { media: { image: { src: string | undefined } } },
            index: React.Key | null | undefined
            // eslint-disable-next-line react/no-array-index-key
          ) => <img key={index} src={attachment.media.image.src} alt="Facebook Post" />
        )}
    </div>
  );
};

export default FacebookPost;
