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

const FeedModal = ({
  show,
  onHide,
  views,
  likes,
  dislikes,
  video,
  videoId
}: Props) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      dialogClassName="FeedModal"
      centered
      restoreFocus
    >
      <Modal.Body>
        <VideoEmbed videoId={videoId} />
        <VideoInfo
          views={views}
          likes={likes}
          dislikes={dislikes}
          video={video}
        />
      </Modal.Body>
    </Modal>
  );
};

export default FeedModal;
