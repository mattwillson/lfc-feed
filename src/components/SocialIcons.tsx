import React from 'react';
import './SocialIcons.css';
import YouTubeIcon from './YouTubeIcon';
import TwitterIcon from './TwitterIcon';

type Props = {
  onYoutubeClick: (videos: object[]) => void;
};

class SocialIcons extends React.Component<Props, {}> {
  onYoutubeClick = (videos: object[]): void => {
    this.props.onYoutubeClick(videos);
  };

  render() {
    return (
      <div className="SocialIcons">
        <YouTubeIcon onClick={this.onYoutubeClick} />
        <TwitterIcon />
      </div>
    );
  }
}

export default SocialIcons;
