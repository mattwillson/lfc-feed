import React from 'react';
import { Card } from 'react-bootstrap';
import './FeedItem.css';

type Props = {
  publishedAt: string;
  videoTitle: string;
  videoThumbnail: string;
  videoId: string;
};

class FeedItem extends React.Component<Props, {}> {
  videoSrc: string = `https://www.youtube.com/embed/${this.props.videoId}`;

  render() {
    return (
      <Card className="FeedItem">
        <Card.Img src={this.props.videoThumbnail} />
      </Card>
    );
  }
}

export default FeedItem;
