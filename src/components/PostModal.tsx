import React from 'react';
import { Modal } from 'react-bootstrap';
import './PostModal.css';
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

const PostModal = ({
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
      dialogClassName="PostModal"
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

export default PostModal;
