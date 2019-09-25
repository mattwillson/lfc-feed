import React, { useContext } from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import './ThemeSwitch.css';
import { ThemeContext } from '../theme-context';

const ThemeSwitch = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <Toggle
      className="ThemeSwitch"
      onChange={toggleTheme}
      defaultChecked={false}
    />
  );
};

export default ThemeSwitch;
