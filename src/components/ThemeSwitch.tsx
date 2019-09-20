import React, { useContext } from 'react';
import Switch from '@material-ui/core/Switch';
import { ThemeContext } from '../theme-context';

const ThemeSwitch = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return <Switch onChange={toggleTheme} color="default" />;
};

export default ThemeSwitch;
