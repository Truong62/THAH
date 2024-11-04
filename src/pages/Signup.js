import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import './styles/custom-button.css';
import InputField from '../components/Form/Input';
import GoogleSignInButton from '../components/Form/GG';
import userData from '../user.json';
import Checkbox from '@mui/material/Checkbox';

export default function SignUpForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();

  const handleFocus = (field) => {
    if (field === 'email') {
      setEmailError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    // Reset errors
    setEmailError('');
    setPasswordError('');
    setFullNameError('');

    // Validate full name
    if (fullName === '') {
      setFullNameError('Full Name is required');
      valid = false;
    }

    // Validate email
    if (!email) {
      setEmailError('Email is required');
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email is invalid');
      valid = false;
    } else {
      const user = userData.find((user) => user.email === email);
      if (user) {
        if (!user.isActive) {
          setEmailError(
            'This account is not activated. Please check your email for the activation code.'
          );
          valid = false;
        }
      }
    }

    // Validate password
    if (!password) {
      setPasswordError('Password is required');
      valid = false;
    } else if (password.length < 8) {
      setPasswordError('Password must be 8 characters');
      valid = false;
    }

    // Check if terms are accepted
    if (!termsAccepted) {
      alert('You must accept the terms and conditions.');
      valid = false;
    }

    // If valid, proceed with sign-up logic
    if (valid) {
      console.log('Signing up with:', { fullName, email, password });
      navigate('/email-verification', { state: { email } });
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
          background: 'url(/images/EllipseBL.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div
        className={`p-8 rounded-lg w-full max-w-[556px] h-auto shadow-lg z-10 flex flex-col items-center ${isDarkMode ? 'bg-[rgba(28,28,36,1)] text-white' : 'bg-white text-black'}`}
      >
        <h2 className="text-2xl font-bold text-center mb-2">Sign Up</h2>
        <p className="text-center mb-1">
          Already have an account?{' '}
          <Link to="/login" className="text-green-500">
            Sign in
          </Link>
        </p>
        <GoogleSignInButton />
        <p className="text-center mb-2">Or sign up with email</p>
        <form
          onSubmit={handleSubmit}
          style={{ fontFamily: 'Epilogue' }}
          className="w-full flex flex-col items-center"
        >
          <InputField
            label="Full Name *"
            value={fullName}
            placeholder="John Doe"
            onChange={(e) => {
              setFullName(e.target.value);
              if (e.target.value) setFullNameError('');
            }}
            className={`w-full p-2 rounded-md ${fullNameError ? 'border-red-500 text-red-500' : 'border-gray-300'}`}
            isDarkMode={isDarkMode}
          />
          {fullNameError && (
            <div className="text-red-500 text-sm text-center">
              {fullNameError}
            </div>
          )}

          <InputField
            label="Email *"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (e.target.value) setEmailError('');
            }}
            className={`w-full p-2 rounded-md ${emailError ? 'border-red-500 text-red-500' : 'border-gray-300'}`}
            isDarkMode={isDarkMode}
          />
          {emailError && (
            <div className="text-red-500 text-sm text-center">{emailError}</div>
          )}
          <InputField
            label="Password *"
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            showPassword={showPassword}
            togglePasswordVisibility={() => setShowPassword(!showPassword)}
            className={`w-full p-2 rounded-md ${passwordError ? 'border-red-500 text-red-500' : 'border-gray-300'}`}
            isDarkMode={isDarkMode}
          />
          {passwordError && (
            <div className="text-red-500 text-sm text-center">
              {passwordError}
            </div>
          )}

          <div className="flex items-center mb-4 p-2 rounded-lg">
            <Checkbox
              checked={termsAccepted}
              onChange={() => setTermsAccepted(!termsAccepted)}
              sx={{
                color: 'rgba(29, 192, 113, 1)',
                '&.Mui-checked': {
                  color: 'rgba(29, 192, 113, 1)',
                },
                '& .MuiSvgIcon-root': {
                  width: 20,
                  height: 20,
                },
              }}
            />
            <span className="text-sm ">
              I agree to the{' '}
              <Link href="#" className="text-purple-600 underline">
                Terms of Use{' '}
              </Link>
              and have read and understand the{' '}
              <Link href="#" className="text-purple-600 underline">
                Privacy policy
              </Link>
              .
            </span>
          </div>

          <button
            type="submit"
            className="w-full custom-button text-white py-3 rounded-lg hover:bg-green-700"
            style={{ height: '52px', opacity: '1' }}
          >
            Create my account
          </button>
        </form>
      </div>
    </div>
  );
}
