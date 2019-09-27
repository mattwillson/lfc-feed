import React, { useContext } from 'react';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import './MenuIcon.css';
import { ThemeContext } from '../theme-context';

const MenuIcon = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <button className="MenuIcon" style={{ color: theme.Header_foreground }}>
      <MenuRoundedIcon />
    </button>
  );
};

export default MenuIcon;
