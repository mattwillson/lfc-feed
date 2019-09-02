import React from 'react';
import { Modal, ResponsiveEmbed } from 'react-bootstrap';
import './FeedModal.css';
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
  videoSrc: string = `https://www.youtube.com/embed/${this.props.videoId}?modestbranding=1&rel=0`;

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
          <ResponsiveEmbed aspectRatio="16by9">
            <iframe src={this.videoSrc} title="video player" allowFullScreen />
          </ResponsiveEmbed>
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
