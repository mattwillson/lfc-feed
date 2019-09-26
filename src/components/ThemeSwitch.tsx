import React, { useContext } from 'react';
import Toggle from 'react-toggle';
import './ThemeSwitch.css';
import MoonIcon from './MoonIcon';
import SunIcon from './SunIcon';
import { ThemeContext } from '../theme-context';

const ThemeSwitch = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <Toggle
      className="ThemeSwitch"
      onChange={toggleTheme}
      defaultChecked={false}
      icons={{
        checked: <MoonIcon />,
        unchecked: <SunIcon />
      }}
    />
  );
};

export default ThemeSwitch;
