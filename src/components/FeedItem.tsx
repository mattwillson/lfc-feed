import React from 'react';
import MediaQuery from 'react-responsive';
import FeedItemMobile from './FeedItemMobile';
import FeedItemDesktop from './FeedItemDesktop';

type Props = {
  video: any;
  videoId: string;
};

class FeedItem extends React.Component<Props, {}> {
  render() {
    return (
      <>
        <MediaQuery maxWidth={575.98}>
          <FeedItemMobile
            video={this.props.video}
            videoId={this.props.videoId}
          />
        </MediaQuery>

        <MediaQuery minWidth={576}>
          <FeedItemDesktop
            video={this.props.video}
            videoId={this.props.videoId}
          />
        </MediaQuery>
      </>
    );
  }
}

export default FeedItem;
