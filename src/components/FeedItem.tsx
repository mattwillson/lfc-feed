import React, { useState } from 'react';
import moment from 'moment';
import { Card, Collapse, ResponsiveEmbed } from 'react-bootstrap';
import './FeedItem.css';
import youtube from '../api/youtube';
import VideoInfo from './VideoInfo';
import FeedModal from './FeedModal';

type Props = { video: any; videoId: string };

const FeedItem = ({ video, videoId }: Props): JSX.Element => {
  const [openCard, setOpen] = useState(false);
  const [showModal, setShow] = useState(false);
  const [views, setViews] = useState(0);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const videoSrc: string = `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0`;

  const getStats: () => Promise<void> = async () => {
    const response = await youtube.get('/videos', {
      params: {
        playlistId: 'UU9LQwHZoucFT94I2h6JOcjw',
        part: 'statistics',
        id: videoId
      }
    });

    setViews(response.data.items[0].statistics.viewCount);
    setLikes(response.data.items[0].statistics.likeCount);
    setDislikes(response.data.items[0].statistics.dislikeCount);
  };

  const handleClick: () => void = () => {
    if (window.matchMedia('(max-width: 575.98px)').matches) {
      if (!openCard) {
        getStats();
      }
      setOpen(!openCard);
    } else {
      getStats();
      setShow(!showModal);
    }
  };

  return (
    <>
      <button className="FeedItem" onClick={handleClick}>
        <Card>
          <Collapse in={!openCard}>
            <div>
              <Card.Img
                src={video.snippet.thumbnails.medium.url}
                title={video.snippet.title}
              />
              <Card.ImgOverlay>
                <Card.Text>{video.snippet.title}</Card.Text>
              </Card.ImgOverlay>
            </div>
          </Collapse>
          <Collapse in={openCard} mountOnEnter={true} unmountOnExit={true}>
            <div>
              <ResponsiveEmbed aspectRatio="16by9">
                <iframe src={videoSrc} title="video player" allowFullScreen />
              </ResponsiveEmbed>
              <VideoInfo
                views={views}
                likes={likes}
                dislikes={dislikes}
                video={video}
              />
            </div>
          </Collapse>
          <Collapse in={!openCard}>
            <div>
              <Card.Footer>
                <time
                  dateTime={video.snippet.publishedAt}
                  title={moment(video.snippet.publishedAt).format('ll')}
                >
                  {moment(video.snippet.publishedAt).fromNow()}
                </time>
              </Card.Footer>
            </div>
          </Collapse>
        </Card>
      </button>

      <FeedModal
        show={showModal}
        onHide={(): void => {
          setShow(!showModal);
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
