import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TrophyIcon from '../components/Icon/Trophy';
import React from 'react';

const Congratulations = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isVerified = localStorage.getItem('isVerified');
    if (isVerified !== 'true') {
      navigate('/email-verification');
    }
  }, [navigate]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

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
      <div className="p-8 rounded-lg w-[525px] h-[421px] shadow-lg z-10 flex flex-col items-center justify-center bg-[#1C1C24] text-white">
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
