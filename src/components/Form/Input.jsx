import PropTypes from 'prop-types';
import React from 'react';
import { PrimeIcons } from 'primereact/api';

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
    <div className="w-full max-w-[436px]">
      <label
        className="block text-sm font-medium"
        style={{ color: 'rgba(128, 129, 145, 1)' }}
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
              <i className={PrimeIcons.EYE_SLASH}></i>
            ) : (
              <i className={PrimeIcons.EYE}></i>
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
