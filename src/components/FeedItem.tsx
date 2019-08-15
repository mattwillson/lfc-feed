import React from 'react';
import moment from 'moment';
import MediaQuery from 'react-responsive';
import { Card, ResponsiveEmbed, Accordion } from 'react-bootstrap';
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

  videoSrc: string = `https://www.youtube.com/embed/${this.props.videoId}?modestbranding=1&rel=0`;

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
            <ResponsiveEmbed aspectRatio="16by9">
              <iframe
                src={this.videoSrc}
                title="video player"
                allowFullScreen
              />
            </ResponsiveEmbed>
            <Accordion.Collapse
              eventKey={this.props.video.snippet.position.toString()}
            >
              <Card.Body>{this.props.video.snippet.title}</Card.Body>
            </Accordion.Collapse>
            <Accordion.Toggle
              as={Card.Footer}
              className="text-muted"
              eventKey={this.props.video.snippet.position.toString()}
            >
              <time
                dateTime={this.props.video.snippet.publishedAt}
                title={moment(this.props.video.snippet.publishedAt).format(
                  'll'
                )}
              >
                {moment(this.props.video.snippet.publishedAt).fromNow()}
              </time>
            </Accordion.Toggle>
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
