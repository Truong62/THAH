// src/pages/Auth.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState(''); // Thay đổi từ email thành username
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Khởi tạo useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://dummyjson.com/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: username, // Sử dụng username
          password: password,
          expiresInMins: 30, // Tùy chọn
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Login successful!'); // Thông báo thành công
        console.log('User data:', data); // In ra dữ liệu người dùng
        // Lưu thông tin người dùng vào localStorage nếu cần
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userEmail', username); // Hoặc username
        // Chuyển hướng đến trang chính
        navigate('/'); // Chuyển hướng về trang chính
      } else {
        setMessage('Invalid username or password'); // Thông báo lỗi
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setMessage('Error logging in');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">
          {isLogin ? 'LOGIN' : 'REGISTER'}
        </h2>
        <p className="text-center mb-4">
          Please enter your {isLogin ? 'login' : 'registration'} details!
        </p>
        <form onSubmit={isLogin ? handleLogin : (e) => e.preventDefault()}>
          <input
            type="text" // Thay đổi từ email thành username
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            {isLogin ? 'LOGIN' : 'REGISTER'}
          </button>
          <p className="text-red-500 text-center mt-2">{message}</p>
        </form>
        <p className="text-center mt-4">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 cursor-pointer"
          >
            {isLogin ? ' Sign Up' : ' Login'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
