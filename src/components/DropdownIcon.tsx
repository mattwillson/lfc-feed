import React, { useContext } from 'react';
import './DropdownIcon.css';
import { ThemeContext } from '../theme-context';

const DropdownIcon = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <button className="DropdownIcon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="27"
        viewBox="0 0 24 24"
      >
        <path fill="none" d="M0 0h24v24H0V0z" />
        <path
          style={{ fill: theme.Header_foreground }}
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 13l-4-4h8l-4 4z"
        />
      </svg>
    </button>
  );
};

export default DropdownIcon;
