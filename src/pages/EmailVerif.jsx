import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import userData from '../user.json';
import BackIcon from '../components/Icon/Back';
import React from 'react';

export default function EmailVerification() {
  const location = useLocation();
  const navigate = useNavigate();
  const { email, password } = location.state || {};

  const [otp, setOtp] = useState(['', '', '', '']);
  const [error, setError] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    if (!email) {
      navigate('/signup');
    }
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);

    const handleChange = (e) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      document.body.style.overflow = 'unset';
    };
  }, [email, navigate]);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) {
      return;
    }

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpString = otp.join('');

    const user = userData.find((user) => user.email === email);

    if (user && otpString === user.active_code) {
      localStorage.setItem('isVerified', 'true');
      console.log('Email:', email);
      console.log('Password:', password);
      navigate('/congratulations');
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen !bg-[#13131A]"
      style={{ fontFamily: 'Epilogue', padding: '24px' }}
    >
      <div className="absolute top-6 left-6 z-20">
        <img
          src="/images/Logo.png"
          alt="Logo"
          className="w-[40px] h-[40px] sm:w-[52px] sm:h-[52px]"
        />
      </div>
      <div
        className="absolute w-full h-full bottom-0 transform translate-y-1/2 hidden md:block"
        style={{
          background: 'url(/images/EllipseBL.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="p-8 rounded-lg w-full max-w-[455px] mx-2.5 md:mx-0 shadow-lg z-10 flex flex-col bg-[#1C1C24] text-white">
        <h2 className="text-2xl font-bold mb-4" style={{ fontSize: '25px' }}>
          Email Verification
        </h2>
        <p className="mb-2" style={{ color: 'rgba(178, 179, 189, 1)' }}>
          Please Enter the OTP you receive to
        </p>
        <p
          className="mb-4 text-white"
          style={{
            color: isDarkMode ? 'white' : 'rgba(23, 23, 37, 1)',
          }}
        >
          {email}
        </p>
        <div className="space-x-2 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              maxLength="1"
              className={`border rounded p-2 w-12 text-center ${isDarkMode ? 'bg-[#1c1c24] text-white border-gray-600' : 'border-gray-300'}`}
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
