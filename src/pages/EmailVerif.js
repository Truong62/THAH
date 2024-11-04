import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import userData from '../user.json';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import BackIcon from '../components/Icon/Back';

export default function EmailVerification() {
  const location = useLocation();
  const navigate = useNavigate();
  const { email } = location.state || {}; // Nhận email từ state

  const [otp, setOtp] = useState(['', '', '', '']);
  const [error, setError] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true); // State for dark mode

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Kiểm tra nếu không có email thì chuyển hướng về trang đăng ký
  useEffect(() => {
    if (!email) {
      navigate('/signup'); // Chuyển hướng về trang đăng ký nếu không có email
    }
  }, [email, navigate]);

  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpString = otp.join('');

    // Tìm người dùng dựa trên email
    const user = userData.find((user) => user.email === email);

    // Kiểm tra mã OTP
    if (user && otpString === user.active_code) {
      // Set verification status in local storage
      localStorage.setItem('isVerified', 'true'); // Example using local storage
      navigate('/congratulations'); // Navigate to the Congratulations page
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };

  return (
    <div
      className={`relative flex items-center justify-center min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}
    >
      <div className="absolute top-4 right-4">
        <LightbulbIcon
          onClick={toggleDarkMode}
          className={`cursor-pointer ${isDarkMode ? 'text-yellow-500' : 'text-gray-800'}`}
          fontSize="large"
        />
      </div>
      <div
        className="absolute w-full h-full bottom-0 transform translate-y-1/2"
        style={{
          background: 'url(/images/EllipseBL.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div
        className={`p-8 rounded-lg w-[455px] h-[467px] shadow-lg z-10 flex flex-col ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
      >
        <h2 className="text-2xl font-bold mb-4" style={{ fontSize: '25px' }}>
          Email Verification
        </h2>
        <p className="mb-2" style={{ color: 'rgba(178, 179, 189, 1)' }}>
          Please Enter the OTP you receive to
        </p>
        <p className="mb-4">{email}</p>
        <div className="space-x-2 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              maxLength="1"
              className={`border rounded p-2 w-12 text-center ${isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'border-gray-300'}`}
              style={{ height: '65px' }}
            />
          ))}
        </div>
        {error && <div className="text-red-500 mb-2">{error}</div>}
        <div className="flex justify-between w-full mt-4">
          <Link href="#" className="text-purple-500 mb-3">
            Resend OTP
          </Link>
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-4 rounded w-full mt-2"
          onClick={handleSubmit}
        >
          Confirm
        </button>
        <a href="/login" className="text-purple-500 mt-2 flex items-center">
          <BackIcon className="mr-2" /> Back to login
        </a>
      </div>
    </div>
  );
}
