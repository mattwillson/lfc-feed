import React from 'react';
import MediaQuery from 'react-responsive';
import { Card, Accordion } from 'react-bootstrap';
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
        <MediaQuery maxWidth={575.98}>
          <Card className="FeedItem">
            <Accordion.Toggle
              as={Card.Img}
              src={this.props.video.snippet.thumbnails.medium.url}
              eventKey={this.props.videoId}
            />
            <Accordion.Collapse eventKey={this.props.videoId}>
              <Card.Body>{this.props.video.snippet.title}</Card.Body>
            </Accordion.Collapse>
          </Card>
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
