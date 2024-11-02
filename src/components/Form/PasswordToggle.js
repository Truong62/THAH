import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const PasswordToggle = ({ showPassword, togglePasswordVisibility }) => (
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
);

export default PasswordToggle;
