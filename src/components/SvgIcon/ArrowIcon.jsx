import PropTypes from 'prop-types';
import React from 'react';

/**
 *
 * @param isOpen
 * @returns {React.JSX.Element}
 * @constructor
 */
const ArrowIcon = ({ isOpen }) => (
  <svg
    className={`w-4 h-4 transform transition-transform ${isOpen ? 'rotate-90' : ''}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 5l7 7-7 7"
    ></path>
  </svg>
);

ArrowIcon.displayName = 'ArrowIcon';

ArrowIcon.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default ArrowIcon;
