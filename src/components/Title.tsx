import React, { useContext } from 'react';
import './Title.css';
import { ThemeContext } from '../theme-context';

const Title = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <a className="Title" href="/lfc-feed" target="_self">
      <span style={{ color: theme.Header_foreground }}>LFC FEED</span>
    </a>
  );
};

export default Title;
