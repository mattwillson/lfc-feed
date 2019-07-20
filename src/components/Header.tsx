import React from 'react';
import { Container } from 'react-bootstrap';
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
        <Container>
          <h1>LFC Feed</h1>
          <YouTubeIcon onClick={this.onYoutubeClick} />
        </Container>
      </header>
    );
  }
}

export default Header;
