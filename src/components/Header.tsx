import React from 'react';
import { Container } from 'react-bootstrap';
import './Header.css';
import LFCIcon from './LFCIcon';
import Title from './Title';
import ThemeSwitch from './ThemeSwitch';

const Header = () => {
  return (
    <header className="Header">
      <Container>
        <LFCIcon />
        <Title />
        <ThemeSwitch />
      </Container>
    </header>
  );
};

export default Header;
