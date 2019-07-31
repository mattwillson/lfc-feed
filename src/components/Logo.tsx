import React from 'react';
import './Logo.css';
import LFCIcon from './LFCIcon';

class Logo extends React.Component {
  render() {
    return (
      <a className="Logo" href="/lfc-feed" target="_self">
        <LFCIcon />
        <span>LFC FEED</span>
      </a>
    );
  }
}

export default Logo;
