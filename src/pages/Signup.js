// src/components/Auth/SignUpForm.jsx
import React, { useState, useEffect } from 'react';
import LightbulbIcon from '@mui/icons-material/Lightbulb'; // Import lightbulb icon
import './styles/custom-button.css';
import { Link } from 'react-router-dom';
import InputField from '../components/Form/Input';
import GoogleSignInButton from '../components/Form/GG';

export default function SignUpForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode
  const [termsAccepted, setTermsAccepted] = useState(false); // State for terms acceptance

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    // Reset errors
    setEmailError('');
    setPasswordError('');

    // Validate email
    if (!email) {
      setEmailError('Email is required');
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email is invalid');
      valid = false;
    }

    // Validate password
    if (!password) {
      setPasswordError('Password is required');
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
      // Add sign-up logic here
    }
  };

  // Disable scroll when component is displayed
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset'; // Restore when component is removed
    };
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`relative flex items-center justify-center min-h-screen ${isDarkMode ? 'bg-gray-800' : 'bg-[rgba(252,252,253,1)]'}`}
    >
      {/* Dark mode toggle icon */}
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
        className={`bg-white p-8 rounded-lg w-[556px] h-[734px] z-10 ${isDarkMode ? 'bg-gray-900 text-black' : 'bg-white text-black'}`}
      >
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
        <p className="text-center mb-4">
          Already have an account?{' '}
          <Link to="/login" className="text-green-500">
            Sign in
          </Link>
        </p>
        {/* Google Sign Up Button */}
        <GoogleSignInButton />
        <p className="text-center mb-4">Or sign up with email</p>
        {/* Form Fields */}
        <form onSubmit={handleSubmit}>
          <div className="items-center mb-2 w-[436px] h-[94px] mx-auto">
            <InputField
              label="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="items-center mb-2 w-[436px] h-[94px] mx-auto">
            <InputField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="items-center mb-2 w-[436px] h-[94px] mx-auto">
            <InputField
              label="Password *"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={passwordError || 'Enter your password'}
              error={passwordError}
              showPassword={showPassword}
              togglePasswordVisibility={() => setShowPassword(!showPassword)}
            />
          </div>
          <div className="flex items-center mb-7 mx-auto pl-5">
            <input
              type="checkbox"
              className="mr-2"
              checked={termsAccepted}
              onChange={() => setTermsAccepted(!termsAccepted)}
            />
            <span className="text-sm">
              I agree to the{' '}
              <a href="#" className="text-green-500">
                Terms of Use
              </a>{' '}
              and have read and understand the{' '}
              <a href="#" className="text-green-500">
                Privacy policy
              </a>
              .
            </span>
          </div>
          <button
            type="submit"
            className="w-full custom-button-su text-white py-3 rounded-lg "
          >
            Create my account
          </button>
        </form>
      </div>
    </div>
  );
}
