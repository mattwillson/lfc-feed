import React from 'react';
import { Container } from 'react-bootstrap';
import './Header.css';
import MenuIcon from './MenuIcon';
import Title from './Title';
import ThemeSwitch from './ThemeSwitch';

const Header = () => {
  return (
    <header className="Header">
      <Container>
        <MenuIcon />
        <Title />
        <ThemeSwitch />
      </Container>
    </header>
  );
};

export default Header;
