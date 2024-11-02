import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children, w = '1280px' }) => {
  return (
    <div className="my-0 mx-auto" style={{ maxWidth: w }}>
      {children}
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
  w: PropTypes.string,
};
