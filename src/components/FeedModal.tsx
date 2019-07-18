import React from 'react';
import { Modal, ResponsiveEmbed } from 'react-bootstrap';
import './FeedModal.css';

type Props = {
  show: boolean;
  onHide: () => void;
  video: any;
  videoId: string;
};

class FeedModal extends React.Component<Props, {}> {
  videoSrc: string = `https://www.youtube.com/embed/${this.props.videoId}`;

  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        dialogClassName="FeedModal"
        centered
      >
        <Modal.Body>
          <ResponsiveEmbed aspectRatio="16by9">
            <iframe src={this.videoSrc} title="video player" />
          </ResponsiveEmbed>
        </Modal.Body>
      </Modal>
    );
  }
}

export default FeedModal;
