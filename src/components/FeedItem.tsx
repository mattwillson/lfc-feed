import React, { useState } from 'react';
import moment from 'moment';
import { Card, Collapse } from 'react-bootstrap';
import './FeedItem.css';
import youtube from '../api/youtube';
import VideoEmbed from './VideoEmbed';
import VideoInfo from './VideoInfo';
import FeedModal from './FeedModal';

type Props = { video: any; videoId: string };

const FeedItem = ({ video, videoId }: Props) => {
  const [imageShow, setImageShow] = useState(true);
  const [videoShow, setVideoShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [views, setViews] = useState(0);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const mql: MediaQueryList = window.matchMedia('(max-width: 575.98px)');

  const getVideoStats: () => Promise<void> = async () => {
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
    if (mql.matches) {
      // the viewport is 575.98 pixels wide or less
      if (imageShow) {
        getVideoStats();
        setImageShow(false);
        setVideoShow(true);
      } else {
        setVideoShow(false);
        setImageShow(true);
      }
    } else {
      // the viewport is more than 575.98 pixels wide
      getVideoStats();
      setModalShow(true);
    }
  };

  return (
    <>
      <button className="FeedItem" onClick={handleClick}>
        <Card>
          <Collapse in={imageShow}>
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
          <Collapse in={videoShow} mountOnEnter={true} unmountOnExit={true}>
            <div>
              <VideoEmbed videoId={videoId} />
              <VideoInfo
                views={views}
                likes={likes}
                dislikes={dislikes}
                video={video}
              />
            </div>
          </Collapse>
          <Collapse in={imageShow}>
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
