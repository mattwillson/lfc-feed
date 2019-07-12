import React from 'react';
import { Card } from 'react-bootstrap';

type Props = {
  publishedAt: string;
  videoTitle: string;
  videoId: string;
};

class FeedItem extends React.Component<Props, {}> {
  videoSrc: string = `https://www.youtube.com/embed/${this.props.videoId}`;

  render() {
    return (
      <div className="FeedItem">
        <Card>
          <Card.Body>
            <iframe src={this.videoSrc} title="video player" />
            <Card.Title>{this.props.videoTitle}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default FeedItem;
