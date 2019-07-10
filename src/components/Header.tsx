import React from 'react';
import './Header.css';
import YouTubeIcon from './YouTubeIcon';

class Header extends React.Component {
  render() {
    return (
      <header className="Header">
        <h1>LFC Feed</h1>
        <YouTubeIcon />
      </header>
    );
  }
}

export default Header;
