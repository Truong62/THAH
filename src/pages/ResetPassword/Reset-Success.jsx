import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const ResetSuccess = () => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(true); // State for dark mode

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);

    const isVerified = localStorage.getItem('isVerified');
    if (isVerified !== 'true') {
      navigate('/email-verification');
    }
    const handleChange = (e) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      document.body.style.overflow = 'unset';
    };
  }, [navigate]);

  return (
    <div
      className={`relative flex flex-col items-center justify-center min-h-screen ${isDarkMode ? 'bg-[rgba(19,19,26,1)]' : 'bg-white'}`}
      style={{ fontFamily: 'Epilogue', padding: '24px' }}
    >
      <div
        className="absolute w-full h-full bottom-0 transform translate-y-1/2"
        style={{
          background: 'url(/images/EllipseBL.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div
        className={`p-6 md:p-8 rounded-lg w-full max-w-[525px] h-auto shadow-lg z-10 flex flex-col items-center justify-center ${isDarkMode ? 'bg-[rgba(28,28,36,1)] text-white' : 'bg-white text-gray-800'}`}
      >
        <div>
          <img src="/images/Clap.png" alt="Clap Icon" className="mb-4" />
        </div>
        <h2 className="text-2xl font-bold mb-4">Password reset successful</h2>
        <p
          className="text-center mb-4"
          style={{ color: 'rgba(128, 129, 145, 1)', fontSize: '14px' }} // Corrected font size style
        >
          You can now use your new password to log in to your account.
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-[#1DC071] text-white py-2 px-4 rounded mt-4 w-full max-w-[356px] h-[52px] transition duration-200 ease-in-out hover:bg-green-700"
          style={{ fontSize: '16px' }}
        >
          Go to homepage
        </button>
      </div>
    </div>
  );
};

export default ResetSuccess;
