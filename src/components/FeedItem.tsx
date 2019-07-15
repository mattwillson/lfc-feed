import React from 'react';
import { Card } from 'react-bootstrap';
import './FeedItem.css';
import FeedModal from './FeedModal';

type Props = {
  publishedAt: string;
  videoTitle: string;
  videoThumbnail: string;
  videoId: string;
};

type State = {
  show: boolean;
};

class FeedItem extends React.Component<Props, State> {
  state: State = {
    show: false
  };

  videoSrc: string = `https://www.youtube.com/embed/${this.props.videoId}`;

  modalClose = (): void => {
    this.setState({ show: false });
  };

  modalShow = (): void => {
    this.setState({ show: true });
  };

  render() {
    return (
      <>
        <Card onClick={this.modalShow} className="FeedItem">
          <Card.Img src={this.props.videoThumbnail} />
        </Card>

        <FeedModal show={this.state.show} onHide={this.modalClose} />
      </>
    );
  }
}

export default FeedItem;
