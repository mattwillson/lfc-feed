import React from 'react';
import MediaQuery from 'react-responsive';
import { Card } from 'react-bootstrap';
import './FeedItem.css';
import FeedItemMobile from './FeedItemMobile';
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
        <MediaQuery maxWidth={575.98}>
          <FeedItemMobile
            video={this.props.video}
            videoId={this.props.videoId}
          />
        </MediaQuery>

        <MediaQuery minWidth={576}>
          <button className="FeedItem" onClick={this.modalShow}>
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
        </MediaQuery>
      </>
    );
  }
}

export default FeedItem;
