/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import InputField from '../common/InputField/InputField';
import { COURSES_TABLE_COLLS } from '../../../constants';
import ModalWithCloseButton from '../common/ModalWithCloseButton/ModalWithCloseButton';
import * as classes from './сoursesDetail.module.css';
import { extractIdFromUrl } from '../../../data/utils/imgPathUtils';
import { useAppContext } from '../../../App';
import getPublicFileData from '../../../data/api/getPublicFileData';
import { DriveFile } from '../../../data/types/interfaces/googleFileInfo';
import pdfIcon from '../../../assets/images/pdf-image.png';

interface DataObject {
  id: string;
  [key: string]: string;
}

interface CoursesDetailsProps {
  selectedItem: DataObject | null;
  fileInfo: DriveFile | null;
  setVisibleDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

function CoursesDetails({ selectedItem, fileInfo, setVisibleDetails }: CoursesDetailsProps) {
  const [formData, setFormData] = useState(COURSES_TABLE_COLLS.map(() => ''));
  const handleChange = (index: number, value: string) => {
    const newData = [...formData];
    newData[index] = value;
    setFormData(newData);
  };

  function fieldUpdater(col: number) {
    if (selectedItem) {
      const content = COURSES_TABLE_COLLS[col].field;
      return content;
    }
    return '';
  }

  const generateInputFields = (start: number, fin: number) => {
    const inputFields = [];
    for (let i = start; i < fin + 1; i += 1) {
      if (selectedItem) {
        inputFields.push(
          <InputField
            key={i} // eslint-disable-line react/no-array-index-key
            label={COURSES_TABLE_COLLS[i].title}
            valu={selectedItem[fieldUpdater(i)]}
            // valu={formData[i]}
            send={(value) => handleChange(i, value)}
          />
        );
      }
    }
    return inputFields;
  };

  function getImage(url: string) {
    if (selectedItem && selectedItem[url]) {
      const elementsArray: string[] = selectedItem[url].split(/[\s,\n]+/);
      if (elementsArray) {
        const idDocument = extractIdFromUrl(elementsArray[0]);
        if (idDocument) {
          const newUrl = `https://drive.google.com/thumbnail?id=${idDocument}`;
          return { id: idDocument, url: newUrl };
        }
      }
    }

    return { id: '', url };
  }

  const [imgAngle, setImgAngle] = useState(0);

  const [orientation] = useState<string>('landscape');

  function handleLoad(event: React.SyntheticEvent<HTMLImageElement, Event>): void {
    const { naturalWidth, naturalHeight } = event.currentTarget;
    if (naturalWidth < naturalHeight) {
      setImgAngle(-90);
    }
  }

  function handlerImgClick(): void {
    setImgAngle(imgAngle + 90);
  }

  // if (!fileInfo) return <div>Loading...</div>;
  let src = '';
  if (fileInfo?.fileExtension === 'pdf') {
    src = pdfIcon;
  } else {
    src = getImage(fieldUpdater(12)).url;
  }
  let downloadLink = '';
  if (selectedItem) {
    downloadLink = selectedItem[fieldUpdater(12)];
  }

  return (
    <ModalWithCloseButton setVisible={setVisibleDetails} initialX={100} initialY={50}>
      {generateInputFields(0, 6)}
      {generateInputFields(8, 10)}
      <div>
        <div>Документ</div>
        <div className={classes.fileWrapper}>
          <div className={classes.fileBlock}>
            <a href={downloadLink} target="_blank" download rel="noreferrer">
              Завантажити документ
            </a>
          </div>
          <div className={classes.fileBlock}>
            <img
              style={{ transform: `rotate(${imgAngle}deg)` }}
              // src={fileInfo?.thumbnailLink}
              src={src}
              // src={getImage(fieldUpdater(12)).url}
              alt="документ"
              title="клацніть щоб повернути"
              onLoad={handleLoad}
              className={classes[orientation]}
              onClick={handlerImgClick}
            />
          </div>
        </div>
      </div>
    </ModalWithCloseButton>
  );
}

export default CoursesDetails;
