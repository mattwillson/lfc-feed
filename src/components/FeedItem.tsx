import React from 'react';
import { Card } from 'react-bootstrap';
import './FeedItem.css';
import FeedModal from './FeedModal';

type Props = {
  video: any;
  videoId: string;
};

type State = {
  show: boolean;
};

class FeedItem extends React.Component<Props, State> {
  state: State = {
    show: false
  };

  modalClose = (): void => {
    this.setState({ show: false });
  };

  modalShow = (): void => {
    this.setState({ show: true });
  };

  render() {
    return (
      <>
        <button onClick={this.modalShow} className="FeedItem" type="button">
          <Card>
            <Card.Img src={this.props.video.snippet.thumbnails.medium.url} />
            <Card.ImgOverlay>
              <Card.Text>{this.props.video.snippet.title}</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </button>

        <FeedModal
          show={this.state.show}
          onHide={this.modalClose}
          video={this.props.video}
          videoId={this.props.videoId}
        />
      </>
    );
  }
}

export default FeedItem;
