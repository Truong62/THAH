import PropTypes from 'prop-types';
import React from 'react';

/**
 *
 * @param children
 * @param w
 * @returns {Element}
 * @constructor
 */
const Layout = ({ children, w = '1280px' }) => {
  return (
    <div className="my-0 mx-auto" style={{ maxWidth: w || '1280px' }}>
      {children}
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
  w: PropTypes.string,
};
