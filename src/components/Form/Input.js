import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const InputField = ({
  label,
  type = 'text',
  value,
  onChange,
  onFocus,
  className = '',
  showPassword,
  togglePasswordVisibility,
  placeholder, // Add placeholder prop
  isDarkMode, // Add isDarkMode prop
}) => {
  return (
    <div className="mb-2 w-full max-w-[436px]">
      {/* Đặt kích thước cho toàn bộ thành phần */}
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        <input
          type={type === 'password' && showPassword ? 'text' : type}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          placeholder={placeholder} // Render the placeholder
          className={`p-2 border rounded-md ${className}`}
          style={{
            width: '100%', // Đặt chiều rộng là 100% để sử dụng tối đa không gian
            height: '52px', // Đặt chiều cao cố định
            boxSizing: 'border-box',
            fontSize: '14px',
            backgroundColor: isDarkMode ? 'rgba(28, 28, 36, 1)' : 'white', // Set background color based on dark mode
            color: isDarkMode ? 'white' : 'black', // Set text color based on dark mode
          }}
        />

        {type === 'password' && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-2 flex items-center text-gray-500"
          >
            {showPassword ? (
              <VisibilityOffIcon className="text-gray-500" />
            ) : (
              <VisibilityIcon className="text-gray-500" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
