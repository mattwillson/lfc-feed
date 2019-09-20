import React, { useContext } from 'react';
import './Title.css';
import { ThemeContext } from '../theme-context';

const Title = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <a className="Title" href="/lfc-feed" target="_self">
      <span style={{ color: theme.primary }}>LFC FEED</span>
    </a>
  );
};

export default Title;
