import React from 'react';
import './Title.css';

class Title extends React.Component {
  render() {
    return (
      <a className="Title" href="/lfc-feed" target="_self">
        <span>LFC FEED</span>
      </a>
    );
  }
}

export default Title;
