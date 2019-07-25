import React from 'react';
import { Container } from 'react-bootstrap';
import './Header.css';
import HomeLink from './HomeLink';
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
          <HomeLink />
          <YouTubeIcon onClick={this.onYoutubeClick} />
        </Container>
      </header>
    );
  }
}

export default Header;
