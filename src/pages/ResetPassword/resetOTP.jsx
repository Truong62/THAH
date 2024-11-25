// src/pages/EnterOtp.js
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import userData from '../../user.json';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import BackIcon from '../../components/Icon/Back';

export default function EnterOtp() {
  const location = useLocation();
  const navigate = useNavigate();
  const { email } = location.state || {}; // Nhận email từ state

  const [otp, setOtp] = useState(['', '', '', '']);
  const [error, setError] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true); // State for dark mode

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (!email) {
      navigate('/signup'); // Chuyển hướng về trang đăng ký nếu không có email
    }
  }, [email, navigate]);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) {
      return;
    }

    setError('');

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    } else if (!value && index > 0) {
      const prevInput = document.getElementById(`otp-input-${index - 1}`);
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpString = otp.join('');

    const user = userData.find((user) => user.email === email);

    if (user && otpString === user.reset_code) {
      localStorage.setItem('isVerified', 'true');
      navigate('/create-new-password');
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };

  return (
    <div
      className={`relative flex flex-col items-center justify-center min-h-screen ${isDarkMode ? 'bg-[rgba(19,19,26,1)]' : 'bg-white'}`}
      style={{ fontFamily: 'Epilogue', padding: '24px' }}
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
        className={`p-6 md:p-8 rounded-lg w-full max-w-[455px] h-auto shadow-lg z-10 flex flex-col items-center ${
          isDarkMode
            ? 'bg-[rgba(28,28,36,1)] text-white'
            : 'bg-white text-black'
        }`}
      >
        <h2 className="text-2xl font-bold mb-4 text-left">Forgot Password</h2>
        <p
          className="mb-2 text-left"
          style={{ color: 'rgba(178, 179, 189, 1)' }}
        >
          Please Enter the OTP you received to
        </p>
        <p
          className={`mb-4 text-center `}
          style={{
            color: isDarkMode ? 'white' : 'rgba(23, 23, 37, 1)',
          }}
        >
          {email}
        </p>

        <div className="space-x-2 mb-4 flex justify-center">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`} // Unique ID for each input
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
          <Link to="#" className="text-purple-500 mb-3">
            Resend OTP
          </Link>
        </div>
        <button
          type="submit"
          className="bg-[#1DC071] text-white py-2 px-4 rounded w-full mt-2"
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
