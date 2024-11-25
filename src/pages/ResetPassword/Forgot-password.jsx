// src/pages/ForgotPassword.js
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BackIcon from '../../components/Icon/Back';
import InputField from '../../components/Form/Input'; // Import InputField
import userData from '../../user.json'; // Import dữ liệu người dùng

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true); // State for dark mode

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kiểm tra xem email có tồn tại trong dữ liệu không
    const user = userData.find((user) => user.email === email);

    if (!email) {
      setError('Please enter your email.');
    } else if (!user) {
      setError('Email does not exist.');
    } else {
      // Giả sử gửi email thành công
      console.log('Password reset link sent to:', email);
      navigate('/enter-otp', { state: { email } }); // Chuyển hướng đến trang nhập mã OTP
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
      style={{
        padding: '24px',
        gap: '10px',
        opacity: '1',
      }}
    >
      <div
        className="absolute w-full h-full bottom-0 transform translate-y-1/2"
        style={{
          background: 'url(/images/EllipseBL.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div
        className={`p-6 md:p-8 rounded-lg w-full max-w-[455px] h-auto shadow-lg z-10 flex flex-col items-center ${isDarkMode ? 'bg-[rgba(28,28,36,1)] text-white' : 'bg-white text-black'}`}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Forgot Password</h2>
        <p
          className="mb-2 text-center"
          style={{ color: 'rgba(178, 179, 189, 1)' }}
        >
          Please enter your email to receive a password reset link.
        </p>

        <InputField
          type="email"
          label="Email *"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError('');
          }}
          placeholder="example@gmail.com"
          className={`border rounded p-2 mb-4 ${isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'border-gray-300'}`}
          isDarkMode={isDarkMode}
        />

        {error && <div className="text-red-500 mb-2">{error}</div>}
        <button
          type="submit"
          className="bg-[#1DC071] text-white py-2 px-4 rounded w-full mt-2"
          onClick={handleSubmit}
        >
          Send Reset Link
        </button>
        <a href="/login" className="text-purple-500 mt-2 flex items-center">
          <BackIcon className="mr-2" /> Back to login
        </a>
      </div>
    </div>
  );
}
