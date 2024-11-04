import React, { useState, useEffect } from 'react';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import userData from '../user.json';
import './styles/custom-button.css';
import { Link } from 'react-router-dom';
import InputField from '../components/Form/Input';
import GoogleSignInButton from '../components/Form/GG';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const errorMessages = {
    emailRequired: { message: '* Email is required', color: 'red' },
    emailInvalid: { message: '* Email is invalid', color: 'red' },
    emailNotExist: { message: '* Email does not exist', color: 'red' },
    passwordRequired: { message: '* Password is required', color: 'red' },
    incorrectPassword: { message: '* Incorrect Password', color: 'red' },
  };

  const handleFocus = (field) => {
    if (field === 'email') {
      setEmailError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    setEmailError('');
    setPasswordError('');

    if (!email) {
      setEmailError(errorMessages.emailRequired.message);
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError(errorMessages.emailInvalid.message);
      valid = false;
    } else {
      const userExists = userData.some((user) => user.email === email);
      if (!userExists) {
        setEmailError(errorMessages.emailNotExist.message);
        valid = false;
      }
    }

    if (valid) {
      if (!password) {
        setPasswordError(errorMessages.passwordRequired.message);
        valid = false;
      } else {
        const user = userData.find(
          (user) => user.email === email && user.password === password
        );
        if (user) {
          console.log('Logging in with:', { email, password });
        } else {
          setPasswordError(errorMessages.incorrectPassword.message);
          valid = false;
        }
      }
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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`relative flex flex-col items-center justify-center min-h-screen ${isDarkMode ? 'bg-[rgba(19,19,26,1)]' : 'bg-white'}`}
      style={{
        padding: '24px',
        gap: '10px',
        opacity: '1', // Đặt opacity thành 1 để hiển thị
      }}
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
          background: 'url(/images/Ellipse65.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div
        className={`p-8 rounded-lg w-full max-w-[556px] h-auto shadow-lg z-10 flex flex-col items-center ${isDarkMode ? 'bg-[rgba(28,28,36,1)] text-white' : 'bg-white text-black'}`}
      >
        <h2 className="text-2xl font-bold text-center ">Welcome Back!</h2>
        <p className="text-center mb-2">
          Don't have an account?{' '}
          <Link to="/signup" className="text-green-500">
            Sign up
          </Link>
        </p>
        <GoogleSignInButton />

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center"
          style={{ fontFamily: 'Epilogue' }}
        >
          <InputField
            label="Email *"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => handleFocus('email')}
            className={`w-full p-2 rounded-md ${emailError ? 'border-red-500 text-red-500' : 'border-gray-300'}`}
            isDarkMode={isDarkMode}
          />
          {emailError && (
            <div className="text-red-500 text-sm mb-2">{emailError}</div>
          )}

          <InputField
            label="Password *"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => handleFocus('password')}
            showPassword={showPassword}
            togglePasswordVisibility={() => setShowPassword(!showPassword)}
            className={`w-full p-2 rounded-md ${passwordError ? 'border-red-500 text-red-500' : 'border-gray-300'}`}
            isDarkMode={isDarkMode}
          />
          {passwordError && (
            <div className="text-red-500 text-sm mb-2">{passwordError}</div>
          )}

          <div className="mb-2 w-full flex justify-end">
            <a href="#" className="text-green-500 text-sm">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full custom-button text-white py-3 rounded-lg hover:bg-green-700"
            style={{ height: '52px', opacity: '1' }} // Kích thước button
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
