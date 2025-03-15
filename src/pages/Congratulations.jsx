import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TrophyIcon from '../components/Icon/Trophy';
// @todo hiep sót mất 1 icon này
// import LightbulbIcon from '@mui/icons-material/Lightbulb';
import React from 'react';

const Congratulations = () => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const isVerified = localStorage.getItem('isVerified');
    if (isVerified !== 'true') {
      navigate('/email-verification');
    }
  }, [navigate]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

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
  }, []);

  return (
    <div
      className={`relative flex items-center justify-center min-h-screen ${isDarkMode ? 'bg-[rgba(19,19,26,1)]' : 'bg-white'}`}
      style={{ fontFamily: 'Epilogue' }}
    >
      <div className="absolute top-4 right-4">
        {/*@todo hiep sót mất 1 icon này*/}
        {/*<LightbulbIcon*/}
        {/*  onClick={toggleDarkMode}*/}
        {/*  className={`cursor-pointer ${isDarkMode ? 'text-yellow-500' : 'text-gray-800'}`}*/}
        {/*  fontSize="large"*/}
        {/*/>*/}
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
        className={`p-8 rounded-lg w-[525px] h-[421px] shadow-lg z-10 flex flex-col items-center justify-center ${isDarkMode ? 'bg-[rgba(28,28,36,1)] text-white' : 'bg-white text-gray-800'}`}
      >
        <TrophyIcon className="mb-4" />
        <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
        <p
          className="text-center mb-4"
          style={{ color: 'rgba(128, 129, 145, 1)', fontSize: '14px' }} // Corrected font size style
        >
          Congratulations! You have successfully completed all of the steps for
          this verification process.
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-[#1DC071] text-white py-2 px-4 rounded mt-4 w-[356px] h-[52px] transition duration-200 ease-in-out hover:bg-green-700"
          style={{ fontSize: '16px' }}
        >
          Got to homepage
        </button>
      </div>
    </div>
  );
};

export default Congratulations;
