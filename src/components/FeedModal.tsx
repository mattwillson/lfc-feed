import React from 'react';
import { Modal } from 'react-bootstrap';
import './FeedModal.css';
import VideoEmbed from './VideoEmbed';
import VideoInfo from './VideoInfo';

type Props = {
  show: boolean;
  onHide: () => void;
  views: number;
  likes: number;
  dislikes: number;
  video: any;
  videoId: string;
};

class FeedModal extends React.Component<Props, {}> {
  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        dialogClassName="FeedModal"
        centered
        restoreFocus
      >
        <Modal.Body>
          <VideoEmbed videoId={this.props.videoId} />
          <VideoInfo
            views={this.props.views}
            likes={this.props.likes}
            dislikes={this.props.dislikes}
            video={this.props.video}
          />
        </Modal.Body>
      </Modal>
    );
  }
}

export default FeedModal;
