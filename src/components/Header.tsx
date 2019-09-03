import React from 'react';
import { Container } from 'react-bootstrap';
import './Header.css';
import LFCIcon from './LFCIcon';
import Title from './Title';
import MenuIcon from './MenuIcon';

class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <Container>
          <LFCIcon />
          <Title />
          <MenuIcon />
        </Container>
      </header>
    );
  }
}

export default Header;
