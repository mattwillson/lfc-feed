import React from 'react';
import { Modal } from 'react-bootstrap';
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
        <Modal.Body>{this.props.video.snippet.title}</Modal.Body>
      </Modal>
    );
  }
}

export default FeedModal;
