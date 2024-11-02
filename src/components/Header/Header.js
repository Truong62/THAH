import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import CartModal from '../Cart/CartModal.js';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import axios from 'axios'; // Import axios

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const cartItems = useSelector((state) => state.cart || []);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const uniqueItemsCount = cartItems.length;

  const handleCloseModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsAccountMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const userEmail = localStorage.getItem('userEmail');
  const userRole = localStorage.getItem('userRole');

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
    navigate('/'); // Chuyển hướng về trang chính
  };

  const handleDashboardAccess = () => {
    if (userRole === 'admin') {
      navigate('/dashboard'); // Chuyển hướng đến Dashboard nếu là admin
    } else if (userRole === 'user') {
      navigate('/home'); // Chuyển hướng đến Home nếu là user
    } else {
      setSnackbarMessage('Bạn không có quyền truy cập');
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleAddToCart = (product) => {
    if (isAuthenticated) {
      // Nếu người dùng đang đăng nhập, lưu vào giỏ hàng của tài khoản
      axios
        .post(`/api/cart/${userEmail}`, product)
        .then((response) => {
          console.log('Product added to user cart:', response.data);
        })
        .catch((error) => {
          console.error('Error adding product to user cart:', error);
        });
    } else {
      // Nếu không, lưu vào localStorage
      const currentCart = JSON.parse(localStorage.getItem('userCart')) || [];
      currentCart.push(product);
      localStorage.setItem('userCart', JSON.stringify(currentCart));
      console.log('Product added to localStorage cart:', product);
    }
  };

  return (
    <div className="container flex flex-col mx-auto sticky top-0 left-0 right-0 z-50 bg-white">
      <div className="relative flex flex-wrap items-center justify-between w-full group py-7 shrink-0">
        <div className="flex items-center">
          <Link to={'/'}>
            <img
              className="w-[50px] rounded-2xl"
              src="https://yt3.googleusercontent.com/HnAnUZS7d8LFtPHaHRtPH9nMoUmrsBBy_FDD-T-YQIycPW55peuWo1NO_rxPIswDbukXYlk7=s160-c-k-c0x00ffffff-no-rj"
              alt=""
            />
          </Link>
          <div className="flex items-center ml-3 shadow-lg w-[250px] rounded-full p-4">
            <input className="h-full outline-none" placeholder="Search ...." />
          </div>
        </div>
        <div className="items-center justify-between hidden gap-12 text-black md:flex">
          <Link
            to={'/products'}
            className="text-sm text-dark-grey-700 hover:text-blue-400 font-bold"
          >
            Products
          </Link>
          <Link
            to={'/'}
            className="text-sm text-dark-grey-700 hover:text-blue-400 font-bold"
          >
            Pricing
          </Link>
          <Link
            to={'/blogs'}
            className="text-sm text-dark-grey-700 hover:text-blue-400 font-bold"
          >
            Blogs
          </Link>
          <Link
            to={'/'}
            className="text-sm text-dark-grey-700 hover:text-blue-400 font-bold"
          >
            Company
          </Link>
        </div>
        <div className="items-center hidden gap-8 md:flex">
          <Link to="/cart">
            <button className="relative flex items-center px-4 py-2 text-sm font-bold text-gray-800 hover:text-blue-400 transition duration-300">
              <FontAwesomeIcon icon={faCartShopping} className="mr-2" />
              {uniqueItemsCount > 0 && (
                <span className="absolute font-semibold top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                  {uniqueItemsCount}
                </span>
              )}
            </button>
          </Link>
          <div className="relative" ref={menuRef}>
            <button
              className="flex items-center text-sm text-gray-800 hover:text-blue-400 font-bold transition duration-300"
              onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
            >
              <AccountCircleIcon />
              {isAuthenticated && userEmail && (
                <span className="ml-2 text-sm text-gray-600">{userEmail}</span>
              )}
            </button>
            {isAccountMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-700 text-white rounded shadow-lg">
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/orders"
                      className="block px-4 py-2 hover:bg-gray-600"
                    >
                      Đơn Hàng
                    </Link>
                    <Link
                      to="/account"
                      className="block px-4 py-2 hover:bg-gray-600"
                    >
                      Thông tin tài khoản
                    </Link>
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-600"
                      onClick={handleLogout}
                    >
                      Đăng xuất
                    </button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    className="block px-4 py-2 hover:bg-gray-600"
                  >
                    Đăng Nhập
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <CartModal isOpen={isModalOpen} onClose={handleCloseModal} />

      {/* Snackbar for unauthorized access */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="error">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Header;
