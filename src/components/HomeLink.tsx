import React from 'react';
import './HomeLink.css';
import LFCIcon from './LFCIcon';

class HomeLink extends React.Component {
  render() {
    return (
      <a className="HomeLink" href="http://localhost:3000/" target="_self">
        <LFCIcon />
        <span>LFC FEED</span>
      </a>
    );
  }
}

export default HomeLink;
