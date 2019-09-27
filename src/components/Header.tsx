import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import './Header.css';
import MenuIcon from './MenuIcon';
import Title from './Title';
import ThemeSwitch from './ThemeSwitch';
import { ThemeContext } from '../theme-context';

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <header
      className="Header"
      style={{ backgroundColor: theme.Header_background }}
    >
      <Container>
        <MenuIcon />
        <Title />
        <ThemeSwitch />
      </Container>
    </header>
  );
};

export default Header;
