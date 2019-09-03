import React from 'react';
import './MenuIcon.css';

class MenuIcon extends React.Component {
  render() {
    return (
      <button className="MenuIcon" title="Menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M3 6h18v2.016h-18v-2.016zM3 12.984v-1.969h18v1.969h-18zM3 18v-2.016h18v2.016h-18z" />
        </svg>
      </button>
    );
  }
}

export default MenuIcon;