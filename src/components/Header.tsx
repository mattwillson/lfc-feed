import React from 'react';
import { Container } from 'react-bootstrap';
import './Header.css';
import Logo from './Logo';
import SocialIcons from './SocialIcons';

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
          <Logo />
          <SocialIcons onYoutubeClick={this.onYoutubeClick} />
        </Container>
      </header>
    );
  }
}

export default Header;
