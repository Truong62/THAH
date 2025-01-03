import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import PropTypes from 'prop-types';
import React from 'react';

const InputField = ({
  label,
  type = 'text',
  value,
  onChange,
  onFocus,
  className = '',
  showPassword,
  togglePasswordVisibility,
  placeholder,
  isDarkMode,
}) => {
  return (
    <div className=" w-full max-w-[436px]">
      <label
        className="block text-sm font-medium"
        style={{ color: 'rgba(128, 129, 145, 1)' }} // Đặt màu cho label
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={type === 'password' && showPassword ? 'text' : type}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          placeholder={placeholder}
          className={`p-2 border rounded-md ${className}`}
          style={{
            width: '100%',
            height: '52px',
            boxSizing: 'border-box',
            fontSize: '14px',
            backgroundColor: isDarkMode ? 'rgba(28, 28, 36, 1)' : 'white',
            color: isDarkMode ? 'white' : 'black',
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
      <style>{`
        input::placeholder {
          color: rgba(75, 82, 100, 1);
        }
      `}</style>
    </div>
  );
};
InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  className: PropTypes.string,
  showPassword: PropTypes.bool,
  togglePasswordVisibility: PropTypes.func,
  placeholder: PropTypes.string,
  isDarkMode: PropTypes.bool,
};

export default InputField;
