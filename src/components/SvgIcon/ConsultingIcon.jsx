import React from 'react';
import PropTypes from 'prop-types';

const ConsultingIcon = ({
  width = 48,
  height = 48,
  fill = 'rgba(16,101,220,1)',
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    fill={fill}
  >
    <path d="M11 2.04938V13H21.9506C21.4489 18.0533 17.1853 22 12 22C6.47715 22 2 17.5229 2 12C2 6.81465 5.94668 2.5511 11 2.04938ZM13 2.04938C17.7244 2.51845 21.4816 6.27559 21.9506 11H13V2.04938Z" />
  </svg>
);
ConsultingIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
};

export default ConsultingIcon;
