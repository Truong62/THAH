import { useEffect, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import CartModal from '../Cart/CartModal.jsx';
import SidebarContainer from './Sidebar';
import Button from '@mui/material/Button';
import { TfiAlignJustify } from 'react-icons/tfi';
import useDeviceType from '../../hooks/useDeviceType';
import LoadingRoute from '../LoadingRoute/LoadingRoute';

/**
 *
 * @returns {Element}
 * @constructor
 */
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleRight, setVisibleRight] = useState(false);
  const cartItems = useSelector((state) => state.cart || []);
  const uniqueItemsCount = cartItems.length;
  const { isMobile } = useDeviceType();

  const handleCloseModal = () => setIsModalOpen(false);

  const [activeLink, setActiveLink] = useState('/');

  useEffect(() => {
    const path = window.location.pathname.split('/');

    if (path.length > 1) {
      setActiveLink(`/${path[1]}`);
    } else {
      setActiveLink('/');
    }
  }, []);

  return (
    <div className="w-full flex flex-col sticky top-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-screen-xl mx-auto w-full">
        <div className="relative flex items-center justify-between w-full group lg:py-7 mx-2 shrink-0 md:py-2">
          <div className="flex items-center md:ml-2">
            <Link to={'/'}>
              <img
                className="w-[50px] rounded-lg"
                src="https://yt3.googleusercontent.com/HnAnUZS7d8LFtPHaHRtPH9nMoUmrsBBy_FDD-T-YQIycPW55peuWo1NO_rxPIswDbukXYlk7=s160-c-k-c0x00ffffff-no-rj"
                alt=""
              />
            </Link>
            <div className="flex items-center ml-3 hover:shadow-lg w-[250px] rounded-full p-4 transition-all duration-500 md:w-auto">
              <input
                className="h-full outline-none md:w-auto"
                placeholder="Search ...."
              ></input>
            </div>
          </div>
          <div className="items-center justify-between hidden md:gap-6 gap-12 text-black md:flex">
            <Link
              to={'/products'}
              className={`text-sm font-bold px-5 py-2 md:px-3 md:py-1 rounded-xl transition-all duration-500 hover:bg-[#A8DCE7] ${activeLink === '/products' ? 'bg-[#A8DCE7]' : ''}`}
            >
              Products
            </Link>
            <Link
              to={'/pricing'}
              className={`text-sm font-bold px-5 py-2 md:px-3 md:py-1 rounded-xl transition-all duration-500 hover:bg-[#A8DCE7] ${activeLink === '/pricing' ? 'bg-[#A8DCE7]' : ''}`}
            >
              Pricing
            </Link>
            <Link
              to={'/blogs'}
              className={`text-sm font-bold px-5 py-2 md:px-3 md:py-1 rounded-xl transition-all duration-500 hover:bg-[#A8DCE7] ${activeLink === '/blogs' ? 'bg-[#A8DCE7]' : ''}`}
            >
              Blogs
            </Link>
            <Link
              to={'/company'}
              className={`text-sm font-bold px-5 py-2 md:px-3 md:py-1 rounded-xl transition-all duration-500 hover:bg-[#A8DCE7] ${activeLink === '/company' ? 'bg-[#A8DCE7]' : ''}`}
            >
              Company
            </Link>
          </div>
          <div className="items-center hidden gap-8 md:flex md:gap-6">
            <Link
              to="/cart"
              className={`text-sm font-bold px-5 py-2 md:px-3 md:py-1 rounded-xl transition-all duration-500 hover:bg-[#A8DCE7] ${activeLink === '/cart' ? 'bg-[#A8DCE7]' : ''}`}
            >
              <button className="relative flex items-center py-2 text-sm font-bold text-gray-800 hover:text-[#272B3B] transition duration-300">
                <FontAwesomeIcon icon={faCartShopping} className="mr-2" />
                {uniqueItemsCount > 0 && (
                  <p className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full px-2 py-1 text-xs font-bold">
                    {uniqueItemsCount}
                  </p>
                )}
              </button>
            </Link>
            <button className="flex items-center text-sm text-gray-800 hover:text-[#272B3B] font-bold transition duration-300">
              <Link to="/login">Log In</Link>
            </button>
            <button className="flex items-center px-4 py-2 text-sm font-bold rounded-xl bg-purple-blue-100 text-purple-blue-600 hover:bg-purple-blue-600 hover:text-white transition duration-300">
              <Link to="/signup">Sign up</Link>
            </button>
          </div>
          {isMobile && (
            <>
              <Button
                style={{ fontSize: '25px' }}
                onClick={() => setVisibleRight(true)}
              >
                <TfiAlignJustify />
              </Button>
              <SidebarContainer
                {...{ visibleRight, setVisibleRight, activeLink }}
              />
            </>
          )}
        </div>
        <CartModal isOpen={isModalOpen} onClose={handleCloseModal}></CartModal>
      </div>
    </div>
  );
};

export default Header;
