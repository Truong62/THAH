import { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './styles/custom-button.css';
import InputField from '../components/Form/Input';
import GoogleSignInButton from '../components/Form/GG';
import userData from '../user.json';
// import { Toast } from 'primereact/toast';
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

  const [termsError, setTermsError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {
      fullNameError: '',
      emailError: '',
      passwordError: '',
      termsError: '',
    };

    if (!fullName) errors.fullNameError = '* Full Name is required';

    if (!email) {
      errors.emailError = '* Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.emailError = '* Email is invalid';
    } else {
      const user = userData.find((user) => user.email === email);
      if (user && !user.isActive) {
        errors.emailError =
          '* This account is not activated. Please check your email.';
      }
    }

    if (!password) {
      errors.passwordError = '* Password is required';
    } else if (password.length < 8) {
      errors.passwordError = '* Password must be at least 8 characters';
    }

    if (!termsAccepted) {
      errors.termsError = '* You must accept the terms and conditions.';
    }

    setFullNameError(errors.fullNameError);
    setEmailError(errors.emailError);
    setPasswordError(errors.passwordError);
    setTermsError(errors.termsError);

    if (errors.termsError) {
      toast.current.show({
        severity: 'warn',
        summary: 'Warning',
        detail: errors.termsError,
        life: 3000,
      });
    }

    if (
      !errors.fullNameError &&
      !errors.emailError &&
      !errors.passwordError &&
      !errors.termsError
    ) {
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
                <input
                  type="checkbox"
                  id="terms"
                  checked={termsAccepted}
                  onChange={() => {
                    setTermsAccepted(!termsAccepted);
                    if (!termsAccepted) setTermsError(''); // Xóa lỗi khi người dùng chọn
                  }}
                  className={`hidden peer ${termsError ? 'border-red-500' : ''}`}
                />
                <label
                  htmlFor="terms"
                  className={`w-5 h-5 border-2 rounded-md flex items-center justify-center cursor-pointer peer-checked:border-[rgba(29,192,113,1)] peer-checked:bg-[rgba(29,192,113,1)] transition-all ${
                    termsError ? 'border-red-500' : 'border-gray-400'
                  }`}
                >
                  {termsAccepted && (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </label>
                <span className="text-sm text-gray-500 ml-2">
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
              {termsError && (
                <div className="text-red-500 text-sm mt-1">{termsError}</div>
              )}
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
      {/* <Toast ref={toast} position="top-right" /> */}
    </>
  );
}
