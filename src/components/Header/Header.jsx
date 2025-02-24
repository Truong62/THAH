import { useEffect, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartModal from '../Cart/CartModal.jsx';
import SidebarContainer from './Sidebar';
import useDeviceType from '../../hooks/useDeviceType';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { PrimeIcons } from 'primereact/api';

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
    setActiveLink(path.length > 1 ? `/${path[1]}` : '/');
  }, []);
  console.log(document.querySelector('.pi-shopping-cart'));

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 p-2">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img
              className="w-12 h-12 rounded-lg"
              src="https://yt3.googleusercontent.com/HnAnUZS7d8LFtPHaHRtPH9nMoUmrsBBy_FDD-T-YQIycPW55peuWo1NO_rxPIswDbukXYlk7=s160-c-k-c0x00ffffff-no-rj"
              alt="Logo"
            />
          </Link>
          <div className="relative hidden md:flex items-center border border-gray-300 rounded-full px-3 py-2">
            <i className="pi pi-search text-gray-500"></i>
            <InputText
              className="ml-2 outline-none border-none w-64"
              placeholder="Search ..."
            />
          </div>
          {isMobile && (
            <div className="relative flex items-center border border-gray-300 rounded-full px-2 py-1 w-60">
              <i className="pi pi-search text-gray-500"></i>
              <InputText
                className="ml-2 outline-none border-none w-full text-xl"
                placeholder="Search ..."
              />
            </div>
          )}
        </div>

        <nav className="hidden md:flex space-x-6">
          {['Products', 'Pricing', 'Blogs', 'Company'].map((text) => (
            <Link
              key={text}
              to={`/${text.toLowerCase()}`}
              className={`text-sm font-semibold px-4 py-2 rounded-lg transition duration-300 ${
                activeLink === `/${text.toLowerCase()}`
                  ? 'bg-[#A8DCE7] text-black'
                  : 'hover:bg-gray-200 text-gray-700'
              }`}
            >
              {text}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <span className="cursor-pointer">
              <i className="pi pi-shopping-cart text-xl"></i>
            </span>

            {uniqueItemsCount > 0 && (
              <span className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-red-500 text-white text-xs font-bold rounded-full px-2">
                {uniqueItemsCount}
              </span>
            )}
          </Link>

          {!isMobile && (
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button className="p-button-text text-gray-700 font-semibold">
                  Log In
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="p-button-rounded p-button-primary font-semibold">
                  Sign Up
                </Button>
              </Link>
            </div>
          )}

          {isMobile && (
            <Button
              icon={PrimeIcons.BARS}
              className="p-button-text"
              onClick={() => setVisibleRight(true)}
            />
          )}
        </div>
      </div>

      {isMobile && (
        <SidebarContainer {...{ visibleRight, setVisibleRight, activeLink }} />
      )}
      <CartModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </header>
  );
};

export default Header;
