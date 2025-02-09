import { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './styles/custom-button.css';
import InputField from '../components/Form/Input';
import GoogleSignInButton from '../components/Form/GG';
import userData from '../user.json';
import Checkbox from '@mui/material/Checkbox';
import { Toast } from 'primereact/toast';
import React from 'react';

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
  const toast = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    setEmailError('');
    setPasswordError('');
    setFullNameError('');

    if (fullName === '') {
      setFullNameError('* Full Name is required');
      valid = false;
    }

    if (!email) {
      setEmailError('* Email is required');
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('* Email is invalid');
      valid = false;
    } else {
      const user = userData.find((user) => user.email === email);
      if (user) {
        if (!user.isActive) {
          setEmailError(
            '* This account is not activated. Please check your email for the activation code.'
          );
          valid = false;
        }
      }
    }

    if (!password) {
      setPasswordError('* Password is required');
      valid = false;
      return;
    } else if (password.length < 8) {
      setPasswordError('* Password must be 8 characters');
      valid = false;
      return;
    }

    if (!termsAccepted) {
      toast.current.show({
        severity: 'warn',
        summary: 'Warning',
        detail: '* You must accept the terms and conditions.',
        life: 3000,
      });
      valid = false;
    }

    if (valid) {
      navigate('/email-verification', { state: { email, password } });
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
    <>
      <div
        className={`relative flex flex-col items-center justify-center min-h-screen ${isDarkMode ? 'bg-[rgba(19,19,26,1)]' : 'bg-white'}`}
        style={{
          padding: '24px',
          gap: '10px',
          opacity: '1',
        }}
      >
        <div className="absolute top-4 right-4">
          <i
            className={`pi pi-lightbulb cursor-pointer ${isDarkMode ? 'text-yellow-500' : 'text-gray-800'}`}
            onClick={toggleDarkMode}
            style={{ fontSize: '24px' }}
          ></i>
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
          <p
            className="text-center mb-1"
            style={{ color: 'rgba(128, 129, 145, 1)' }}
          >
            Already have an account?{' '}
            <Link to="/login" className="text-green-500">
              Sign in
            </Link>
          </p>
          <GoogleSignInButton />
          <p
            className="text-center mb-2"
            style={{ color: 'rgba(128, 129, 145, 1)' }}
          >
            Or sign up with email
          </p>
          <form
            onSubmit={handleSubmit}
            style={{ fontFamily: 'Epilogue' }}
            className="w-full flex flex-col items-center gap-y-3"
          >
            <div className="w-full flex flex-col items-center">
              <InputField
                label="Full Name *"
                value={fullName}
                placeholder="John Doe"
                onChange={(e) => {
                  setFullName(e.target.value);
                  if (e.target.value) setFullNameError('');
                }}
                className={`w-full p-2 rounded-md mb-2 ${fullNameError ? 'border-red-500 text-red-500' : 'border-gray-300'}`}
                isDarkMode={isDarkMode}
              />
              <div className="text-red-500 text-sm text-left w-full min-h-[20px] pl-7">
                {fullNameError || '\u00A0'}
              </div>
            </div>

            <div className="w-full flex flex-col items-center">
              <InputField
                label="Email *"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (e.target.value) setEmailError('');
                }}
                className={`w-full p-2 rounded-md mb-2 ${emailError ? 'border-red-500 text-red-500' : 'border-gray-300'}`}
                isDarkMode={isDarkMode}
              />
              <div className="text-red-500 text-sm text-left w-full min-h-[20px] pl-7">
                {emailError || '\u00A0'}
              </div>
            </div>

            <div className="w-full flex flex-col items-center">
              <InputField
                label="Password *"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (e.target.value) setPasswordError('');
                }}
                showPassword={showPassword}
                togglePasswordVisibility={() => setShowPassword(!showPassword)}
                className={`w-full p-2 rounded-md mb-2 ${passwordError ? 'border-red-500 text-red-500' : 'border-gray-300'}`}
                isDarkMode={isDarkMode}
              />
              <div className="text-red-500 text-sm text-left w-full min-h-[20px] pl-7">
                {passwordError || '\u00A0'}
              </div>
            </div>

            <div className="flex flex-col w-auto mb-4">
              <div className="flex items-start">
                <Checkbox
                  size="small"
                  checked={termsAccepted}
                  onChange={() => setTermsAccepted(!termsAccepted)}
                  sx={{
                    color: 'rgba(29, 192, 113, 1)',
                    '&.Mui-checked': { color: 'rgba(29, 192, 113, 1)' },
                    '& .MuiSvgIcon-root': { width: 20, height: 20 },
                  }}
                />
                <span className="text-sm text-gray-500 ml-1">
                  I agree to the{' '}
                  <Link to="#" className="text-purple-600 underline">
                    Terms of Use
                  </Link>{' '}
                  and have read and understand the{' '}
                  <Link to="#" className="text-purple-600 underline">
                    Privacy policy
                  </Link>
                  .
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full custom-button text-white py-3 rounded-lg hover:bg-green-700"
              style={{
                height: '52px',
                backgroundColor: 'rgba(29, 192, 113, 1)',
              }}
            >
              Create my account
            </button>
          </form>
        </div>
      </div>
      <Toast ref={toast} position="top-right" />
    </>
  );
}
