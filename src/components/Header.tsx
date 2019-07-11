import React from 'react';
import './Header.css';
import YouTubeIcon from './YouTubeIcon';

type Props = {
  onYoutubeClick: (videos: object[]) => void;
};

class Header extends React.Component<Props, {}> {
  onYoutubeClick = (videos: object[]): void => {
    this.props.onYoutubeClick(videos);
  };

  render() {
    return (
      <header className="Header">
        <h1>LFC Feed</h1>
        <YouTubeIcon onClick={this.onYoutubeClick} />
      </header>
    );
  }
}

export default Header;
