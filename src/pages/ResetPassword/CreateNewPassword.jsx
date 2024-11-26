// src/pages/CreateNewPassword.js
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BackIcon from '../../components/Icon/Back';
import InputField from '../../components/Form/Input';
import React from 'react';

export default function CreateNewPassword() {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    setNewPasswordError('');
    setConfirmPasswordError('');

    let hasError = false;

    if (!newPassword) {
      setNewPasswordError('Please enter your new password.');
      hasError = true;
    } else if (newPassword.length < 8) {
      setNewPasswordError('Password must be at least 8 characters.');
      hasError = true;
    }

    if (!confirmPassword) {
      setConfirmPasswordError('Please confirm your new password.');
      hasError = true;
    } else if (newPassword !== confirmPassword) {
      setConfirmPasswordError('Passwords not matched');
      hasError = true;
    }

    if (!hasError) {
      console.log('New password set:', newPassword);
      navigate('/reset-success');
    }
  };

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
      className="relative flex flex-col items-center justify-center min-h-screen !bg-[#13131A]"
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
        className="absolute w-full h-full bottom-0 transform translate-y-1/2 hidden md:block" // Thêm hidden md:block
        style={{
          background: 'url(/images/EllipseBL.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="p-6 md:p-8 rounded-lg w-full max-w-[455px] h-auto shadow-lg z-10 flex flex-col bg-[#1C1C24] text-white">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Create New Password
        </h2>
        <p
          className="mb-2 text-center"
          style={{ color: 'rgba(178, 179, 189, 1)' }}
        >
          Your new password must be different from previously used passwords.
        </p>

        <InputField
          type="password"
          label="New Password *"
          value={newPassword}
          onChange={(e) => {
            setNewPassword(e.target.value);
            setNewPasswordError('');
          }}
          placeholder="New Password"
          className={`border rounded p-2 mb-2 ${isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'border-gray-300'}`}
          isDarkMode={isDarkMode}
          showPassword={showNewPassword}
          togglePasswordVisibility={() => setShowNewPassword(!showNewPassword)}
        />
        {newPasswordError && (
          <div className="text-red-500 mb-2 text-sm">{newPasswordError}</div>
        )}

        <InputField
          type="password"
          label="Confirm New Password *"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            setConfirmPasswordError('');
          }}
          placeholder="Confirm Password"
          className={`border rounded p-2 mb-2 ${isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'border-gray-300'}`}
          isDarkMode={isDarkMode}
          showPassword={showConfirmPassword}
          togglePasswordVisibility={() =>
            setShowConfirmPassword(!showConfirmPassword)
          }
        />
        {confirmPasswordError && (
          <div className="text-red-500 mb-2 text-sm">
            {confirmPasswordError}
          </div>
        )}
        <button
          type="submit"
          className="bg-[#1DC071] text-white py-2 px-4 rounded w-full mt-2"
          onClick={handleSubmit}
        >
          Set New Password
        </button>
        <a href="/login" className="text-purple-500 mt-2 flex items-center">
          <BackIcon className="mr-2" /> Back to login
        </a>
      </div>
    </div>
  );
}
