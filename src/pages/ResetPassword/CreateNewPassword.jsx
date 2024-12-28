import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import BackIcon from '../../components/Icon/Back';
import InputField from '../../components/Form/Input'; // Import InputField

export default function CreateNewPassword() {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true); // State for dark mode
  const [showNewPassword, setShowNewPassword] = useState(false); // State to toggle visibility of new password
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State to toggle visibility of confirm password

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newPassword || !confirmPassword) {
      setError('Password must not be empty.');
    } else if (newPassword !== confirmPassword) {
      setError('Password not matched.');
    } else if (newPassword.length < 8) {
      setError('Password must be at least 8 characters.');
    } else {
      console.log('New password set:', newPassword);
      navigate('/reset-success'); // Redirect to a success page
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
        className={`p-6 md:p-8 rounded-lg w-full max-w-[455px] h-auto shadow-lg z-10 flex flex-col ${isDarkMode ? 'bg-[rgba(28,28,36,1)] text-white' : 'bg-white text-black'}`}
      >
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
            setError(''); // Ẩn thông báo lỗi khi người dùng nhập lại
          }}
          placeholder="New Password"
          className={`border rounded p-2 mb-2 ${isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'border-gray-300'}`}
          isDarkMode={isDarkMode}
          showPassword={showNewPassword}
          togglePasswordVisibility={() => setShowNewPassword(!showNewPassword)}
        />

        <InputField
          type="password"
          label="Confirm New Password *"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            setError('');
          }}
          placeholder="Confirm Password"
          className={`border rounded p-2 mb-2 ${isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'border-gray-300'}`}
          isDarkMode={isDarkMode}
          showPassword={showConfirmPassword}
          togglePasswordVisibility={() =>
            setShowConfirmPassword(!showConfirmPassword)
          }
        />

        {error && <div className="text-red-500 mb-2">{error}</div>}
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
