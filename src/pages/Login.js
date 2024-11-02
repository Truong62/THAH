// src/components/Auth/LoginForm.jsx
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

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    setEmailError('');
    setPasswordError('');

    if (!email) {
      setEmailError('Email is required');
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email is invalid');
      valid = false;
    }

    if (!password) {
      setPasswordError('Password is required');
      valid = false;
    }

    if (valid) {
      const user = userData.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        console.log('Logging in with:', { email, password });
      } else {
        console.log('Login failed: Incorrect email or password');
        setPasswordError('Incorrect password');
        valid = false;
      }
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`relative flex items-center justify-center min-h-screen ${isDarkMode ? 'bg-gray-800' : 'bg-[rgba(252,252,253,1)]'}`}
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
        className={`bg-white p-8 md:p-10 rounded-lg w-[556px] h-[556px] z-10 ${isDarkMode ? 'bg-[rgba(255,255,255,1)] text-black' : 'bg-white text-black'}`}
      >
        <h2 className="text-2xl font-bold text-center mb-4">Welcome Back!</h2>
        <p className="text-center mb-4">
          Don't have an account?{' '}
          <Link to="/signup" className="text-green-500">
            Sign up
          </Link>
        </p>
        <GoogleSignInButton />
        <form onSubmit={handleSubmit}>
          <InputField
            label="Email *"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            error={emailError}
          />
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
          <a href="#" className="text-green-500 text-sm float-right mb-4">
            Forgot password?
          </a>
          <button
            type="submit"
            className="w-full custom-button text-white py-3 rounded-lg hover:bg-green-700"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
