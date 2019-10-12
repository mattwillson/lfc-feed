import React, { useState } from 'react';
import PostImage from './PostImage';
import PostInfo from './PostInfo';
import PostModal from './PostModal';
import youtube from '../api/youtube';

type Props = {
  video: any;
  videoId: string;
};

const Post = ({ video, videoId }: Props) => {
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
      <div className="Post" style={{ fontSize: '0' }}>
        <PostImage handleClick={handleClick} video={video} />
        <PostInfo handleClick={handleClick} video={video} />
      </div>

      <PostModal
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

export default Post;
