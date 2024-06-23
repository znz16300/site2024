import React from 'react';
import { IconProps } from '../../../../data/types/interfaces/iconProps';

export default function SaveMarkIcon({ width, height, fill = 'green' }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.91007421,17.4958607 L3.70710678,11.2928932 C3.31658249,10.9023689 2.68341751,10.9023689 2.29289322,11.2928932 C1.90236893,11.6834175 1.90236893,12.3165825 2.29289322,12.7071068 L9.29289322,19.7071068 C9.71681992,20.1310335 10.4159202,20.0892374 10.7863183,19.6178216 L21.7863183,5.61782155 C22.1275318,5.18354992 22.0520932,4.55489508 21.6178216,4.21368166 C21.1835499,3.87246824 20.5548951,3.94790682 20.2136817,4.38217845 L9.91007421,17.4958607 Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        data-testid="save-mark-icon"
      />
    </svg>
  );
}
