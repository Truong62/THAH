import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

/**
 *
 * @param visibleRight
 * @param setVisibleRight
 * @param activeLink
 * @returns {JSX.Element}
 * @constructor
 */
const SidebarContainer = ({ visibleRight, setVisibleRight, activeLink }) => {
  return (
    <Sidebar
      visible={visibleRight}
      position="right"
      onHide={() => setVisibleRight(false)}
      className="p-sidebar-sm"
    >
      <div className="p-4">
        <ul className="list-none p-0 m-0">
          {['Products', 'Pricing', 'Blogs', 'Company'].map((text, index) => (
            <li key={index} className="mb-2">
              <Link
                to={`/${text}`}
                className={`block text-sm font-bold px-5 py-2 rounded-xl transition-all duration-500 hover:bg-[#A8DCE7] ${
                  activeLink === `/${text.toLowerCase()}` ? 'bg-[#A8DCE7]' : ''
                }`}
                onClick={() => setVisibleRight(false)}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
        <hr className="my-4" />
        <ul className="list-none p-0 m-0">
          <li className="mb-2">
            <Button
              label="Log In"
              className="w-full text-sm font-bold rounded-xl bg-purple-blue-100 text-purple-blue-600 hover:bg-purple-blue-600 hover:text-white transition duration-300"
              onClick={() => setVisibleRight(false)}
            >
              <Link to="/login" className="text-white block w-full h-full">
                Log In
              </Link>
            </Button>
          </li>
          <li>
            <Button
              label="Sign Up"
              className="w-full text-sm font-bold rounded-xl bg-purple-blue-100 text-purple-blue-600 hover:bg-purple-blue-600 hover:text-white transition duration-300"
              onClick={() => setVisibleRight(false)}
            >
              <Link to="/signup" className="text-white block w-full h-full">
                Sign Up
              </Link>
            </Button>
          </li>
        </ul>
      </div>
    </Sidebar>
  );
};

export default SidebarContainer;

SidebarContainer.propTypes = {
  setVisibleRight: PropTypes.func,
  visibleRight: PropTypes.bool,
  activeLink: PropTypes.string,
};
