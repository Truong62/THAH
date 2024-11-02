// src/components/Form/Input.jsx
import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const InputField = ({
  label,
  type,
  value,
  onChange,
  placeholder,
  error,
  showPassword,
  togglePasswordVisibility,
}) => (
  <div className="mb-4">
    <label className="block">{label}</label>
    <div className="relative">
      <input
        type={type}
        className={`w-full p-2 border rounded-lg ${error ? 'border-red-500' : 'border-gray-300'}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
      {label === 'Password *' && ( // Only show toggle for password field
        <button
          type="button"
          className="absolute right-2 top-2"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? (
            <VisibilityOffIcon className="text-gray-500" />
          ) : (
            <VisibilityIcon className="text-gray-500" />
          )}
        </button>
      )}
    </div>
    {error && <span className="text-red-500 text-sm">{error}</span>}
  </div>
);

export default InputField;
