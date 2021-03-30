import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles, Theme } from '@material-ui/core';
import clsx from 'clsx';

interface IconProps {
  className?: string;
  isActive?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: theme.spacing(9.25),
    height: theme.spacing(9.25),
    fill: 'white',
  },
}));

function TrustIcon({ className, isActive }: IconProps): JSX.Element {
  const classes = useStyles();

  return isActive ? (
    <SvgIcon
      className={clsx(className, classes.root)}
      width="68"
      height="75"
      viewBox="0 0 68 75"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.5859 2.71344C32.0039 2.33305 32.498 2.14285 33.03 2.14285C33.5621 2.14285 34.0562 2.33305 34.5882 2.71344C41.1631 8.76162 49.5621 12.3753 58.7212 12.3753C59.4089 12.3753 60.062 12.3408 60.7464 12.3047L60.8495 12.2992H60.9635C62.0656 12.2992 63.0538 13.1741 63.2438 14.4294C63.7379 17.4725 64.0039 20.6298 64.0039 23.8631C64.0039 46.2299 51.4623 65.2874 33.8661 72.667C33.6001 72.7811 33.3341 72.8191 33.068 72.8191C32.802 72.8191 32.536 72.7811 32.2699 72.667C14.6738 65.2874 2.1322 46.2299 2.1322 23.8631C2.1322 20.6298 2.39824 17.4725 2.8923 14.4294C3.08232 13.2122 4.07044 12.2992 5.17258 12.2992H5.28659C6.00868 12.3373 6.69277 12.3753 7.41486 12.3753C16.574 12.3753 24.973 8.76162 31.5859 2.71344Z"
        stroke="#4FB573"
        strokeWidth="3"
      />
      <path
        d="M57.0182 18.7807L57.0182 18.7807L57.0199 18.7913C57.4199 21.2301 57.6354 23.7606 57.6354 26.3521C57.6354 44.2948 47.4729 59.508 33.3257 65.3804L33.3257 65.3804L33.3183 65.3835C33.252 65.4117 33.1719 65.4286 33.049 65.4286C32.9262 65.4286 32.8461 65.4117 32.7797 65.3835L32.7798 65.3835L32.7723 65.3804C18.6251 59.508 8.46268 44.2948 8.46268 26.3521C8.46268 23.7606 8.67811 21.2301 9.07815 18.7913L9.07817 18.7913L9.07912 18.7853C9.17006 18.2087 9.62206 17.8857 9.97731 17.8857H10.0455C10.0676 17.8868 10.0896 17.888 10.1117 17.8891C10.672 17.9184 11.2362 17.9479 11.8318 17.9479C19.6765 17.9479 26.857 14.8826 32.4932 9.78087C32.6593 9.63158 32.8306 9.57143 33.0176 9.57143C33.1852 9.57143 33.3838 9.62007 33.6823 9.82261C39.2814 14.9004 46.4443 17.9479 54.2662 17.9479C54.8611 17.9479 55.4234 17.9186 55.982 17.8894L55.9933 17.8888L55.9933 17.8888L56.0525 17.8857H56.1208C56.4886 17.8857 56.9279 18.1904 57.0182 18.7807Z"
        stroke="#4FB573"
        strokeWidth="2"
      />
      <path
        d="M33.068 48.3601C40.1205 48.3601 45.8376 42.6378 45.8376 35.579C45.8376 28.5203 40.1205 22.798 33.068 22.798C26.0156 22.798 20.2985 28.5203 20.2985 35.579C20.2985 42.6378 26.0156 48.3601 33.068 48.3601Z"
        stroke="#4FB573"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M26.4932 37.9374L30.1797 41.6272L39.6049 32.1555"
        stroke="#4FB573"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  ) : (
    <SvgIcon
      className={clsx(className, classes.root)}
      width="89"
      height="99"
      viewBox="0 0 89 99"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M41.8548 3.58178C42.4088 3.07967 43.0635 2.82861 43.7685 2.82861C44.4736 2.82861 45.1282 3.07967 45.8333 3.58178C54.5457 11.5654 65.6753 16.3355 77.8122 16.3355C78.7234 16.3355 79.5889 16.2899 80.4957 16.2422L80.6324 16.235H80.7835C82.2439 16.235 83.5533 17.3899 83.8051 19.0469C84.4598 23.0638 84.8123 27.2313 84.8123 31.4993C84.8123 61.0235 68.1933 86.1794 44.8764 95.9204C44.5239 96.0711 44.1714 96.1213 43.8189 96.1213C43.4663 96.1213 43.1138 96.0711 42.7613 95.9204C19.4444 86.1794 2.82544 61.0235 2.82544 31.4993C2.82544 27.2313 3.17796 23.0638 3.83265 19.0469C4.08445 17.4401 5.39382 16.235 6.85428 16.235H7.00536C7.96221 16.2853 8.8687 16.3355 9.82555 16.3355C21.9624 16.3355 33.0921 11.5654 41.8548 3.58178Z"
        fill="white"
        stroke="#8F8F8F"
        strokeWidth="3"
      />
      <path
        d="M75.877 24.7426L75.8769 24.7426L75.8787 24.7533C76.4115 27.9891 76.6984 31.3464 76.6984 34.7847C76.6984 58.5843 63.1657 78.7906 44.2862 86.5971L44.2789 86.6002C44.1406 86.6587 43.9885 86.6856 43.7937 86.6856C43.5989 86.6856 43.4468 86.6587 43.3085 86.6002L43.3011 86.5971C24.4216 78.7906 10.8889 58.5843 10.8889 34.7847C10.8889 31.3464 11.1758 27.9891 11.7087 24.7533L11.7087 24.7533L11.7097 24.7472C11.851 23.8545 12.5665 23.289 13.2211 23.289H13.3201C13.3514 23.2906 13.3828 23.2923 13.4142 23.2939C14.1584 23.3327 14.8981 23.3712 15.6785 23.3712C25.985 23.3712 35.4235 19.3601 42.8381 12.6742C43.1164 12.4249 43.421 12.3142 43.752 12.3142C44.0614 12.3142 44.3926 12.4116 44.8361 12.7151C52.2035 19.3775 61.6248 23.3712 71.9088 23.3712C72.6885 23.3712 73.4263 23.3328 74.1687 23.2941L74.1803 23.2935L74.2673 23.289H74.3663C75.0335 23.289 75.7363 23.8262 75.877 24.7426Z"
        stroke="#8F8F8F"
        strokeWidth="2"
      />
      <path
        d="M43.8188 63.8353C53.1641 63.8353 60.7399 56.2819 60.7399 46.9643C60.7399 37.6467 53.1641 30.0933 43.8188 30.0933C34.4735 30.0933 26.8977 37.6467 26.8977 46.9643C26.8977 56.2819 34.4735 63.8353 43.8188 63.8353Z"
        fill="#EFEFEF"
        stroke="#8F8F8F"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M35.1064 50.0774L39.9914 54.9479L52.4808 42.4453"
        stroke="#8F8F8F"
        strokeWidth="3"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
}

export default TrustIcon;
