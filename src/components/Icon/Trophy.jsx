import React from 'react';
import PropTypes from 'prop-types';
const TrophyIcon = ({ width = 69, height = 70, className = '' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 69 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_7666_2404)">
        <path
          d="M19.5806 45.9159L32.1489 39.3084V52.328H36.8506V39.3084L49.4188 45.9159L46.5694 29.3034L58.6393 17.5384L41.9593 15.1146L34.4998 0L27.0402 15.1146L10.3601 17.5384L22.43 29.3034L19.5806 45.9159Z"
          fill="#FFDA44"
        />
        <path
          d="M25.5165 22.4626L31.7245 21.5604L34.5008 15.9353L37.277 21.5604L43.4849 22.4626L38.9928 26.8415L40.0532 33.0242L34.5008 30.1049L28.9484 33.0242L30.0087 26.8415L25.5165 22.4626Z"
          fill="#FF9811"
        />
        <path
          d="M47.8213 63.2983V49.9771H21.1789V63.2983H16.4772V67.9998H52.5229V63.2983H47.8213Z"
          fill="#FF9811"
        />
        <path
          d="M52.5222 63.2979H16.4764V67.9994H52.5222V63.2979Z"
          fill="#A2001D"
        />
        <path
          d="M39.201 58.5962H29.7977V63.2977H39.201V58.5962Z"
          fill="#FFDA44"
        />
      </g>
      <defs>
        <clipPath id="clip0_7666_2404">
          <rect
            width="68"
            height="68"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
TrophyIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  className: PropTypes.string,
};
export default TrophyIcon;
