/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-shadow */
import React, { useEffect } from 'react';
import getPublicFileData from '../../../data/api/getPublicFileData';
import { useAppContext } from '../../../App';
import GoogleDriveImage from '../common/GoogleDriveImage/GoogleDriveImage';

function FileInfoTest() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { state } = useAppContext();
  useEffect(() => {
    async function fetchData() {
      const response = await getPublicFileData(
        '10wHe9rqHLDfHg_JsneGBePcNPH0A04Uz',
        state.oauth?.google_public_api_key as string
        // state.oauth?.google_public_api_key as string
      );
      return response;
    }

    const data = fetchData();

    if (data) {
      // eslint-disable-next-line no-console
      console.log(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <GoogleDriveImage fileId="1-BAaHXv7p_tywRUZb3QVyxdNNs-NRygM" />
    </div>
  );
}

export default FileInfoTest;
