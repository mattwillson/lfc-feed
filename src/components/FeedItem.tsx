import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import './FeedItem.css';
import FeedItemNav from './FeedItemNav';
import FeedModal from './FeedModal';
import youtube from '../api/youtube';

type Props = {
  video: any;
  videoId: string;
};

const FeedItem = ({ video, videoId }: Props) => {
  const [modalShow, setModalShow] = useState(false);
  const [views, setViews] = useState(0);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const getVideoStats: () => Promise<void> = async () => {
    const response = await youtube.get('/videos', {
      params: {
        playlistId: 'UU9LQwHZoucFT94I2h6JOcjw',
        part: 'statistics',
        id: videoId
      }
    });

    const stats: any = response.data.items[0].statistics;

    setViews(stats.viewCount);
    setLikes(stats.likeCount);
    setDislikes(stats.dislikeCount);
  };

  const handleClick: () => void = () => {
    getVideoStats();
    setModalShow(true);
  };

  return (
    <>
      <button className="FeedItem" onClick={handleClick}>
        <Card>
          <Card.Img
            src={video.snippet.thumbnails.medium.url}
            title={video.snippet.title}
          />
          <Card.ImgOverlay>
            <Card.Text>{video.snippet.title}</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </button>

      <FeedItemNav video={video} />

      <FeedModal
        show={modalShow}
        onHide={(): void => {
          setModalShow(false);
        }}
        views={views}
        likes={likes}
        dislikes={dislikes}
        video={video}
        videoId={videoId}
      />
    </>
  );
};

export default FeedItem;
