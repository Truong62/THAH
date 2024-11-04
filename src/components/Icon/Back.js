import React from 'react';

const BackIcon = ({
  width = 22,
  height = 22,
  fill = '#808191',
  className = '',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_7658_2141)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.7404 16.7539L9.56141 11.3643C9.37065 11.1979 9.3509 10.9084 9.51729 10.7176C9.53066 10.7023 9.54504 10.6879 9.56034 10.6744L15.7393 5.25084C15.9296 5.08386 16.2191 5.10271 16.3861 5.29295C16.4595 5.37657 16.5 5.48404 16.5 5.5953V16.4085C16.5 16.6616 16.2948 16.8668 16.0417 16.8668C15.9309 16.8668 15.8239 16.8267 15.7404 16.7539Z"
          fill={fill}
        />
        <path
          d="M7.33333 5.5H6.41667C5.91041 5.5 5.5 5.91041 5.5 6.41667V15.5833C5.5 16.0896 5.91041 16.5 6.41667 16.5H7.33333C7.83959 16.5 8.25 16.0896 8.25 15.5833V6.41667C8.25 5.91041 7.83959 5.5 7.33333 5.5Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_7658_2141">
          <rect width="22" height="22" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BackIcon;
