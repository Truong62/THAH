import PropTypes from 'prop-types';

/**
 *
 * @param children
 * @param w
 * @returns {Element}
 * @constructor
 */
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
