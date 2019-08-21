import React, { useState } from 'react';
import moment from 'moment';
import { Card, Collapse, ResponsiveEmbed } from 'react-bootstrap';
import './FeedItemMobile.css';
import youtube from '../api/youtube';

type Props = { video: any; videoId: string };

const FeedItemMobile = ({ video, videoId }: Props): JSX.Element => {
  const [open, setOpen] = useState(false);

  const [views, setViews] = useState(0);

  const videoSrc: string = `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0`;

  const getViewCount: () => Promise<void> = async () => {
    const response = await youtube.get('/videos', {
      params: {
        playlistId: 'UU9LQwHZoucFT94I2h6JOcjw',
        part: 'statistics',
        id: videoId
      }
    });

    setViews(response.data.items[0].statistics.viewCount);
  };

  const handleClick: () => void = () => {
    if (!open) {
      getViewCount();
    }

    setOpen(!open);
  };

  return (
    <Card className="FeedItemMobile">
      <Collapse in={!open}>
        <div>
          <Card.Img
            onClick={handleClick}
            src={video.snippet.thumbnails.medium.url}
          />
        </div>
      </Collapse>
      <Collapse in={open} mountOnEnter={true} unmountOnExit={true}>
        <div>
          <ResponsiveEmbed aspectRatio="16by9">
            <iframe src={videoSrc} title="video player" />
          </ResponsiveEmbed>
          <Card.Body onClick={handleClick}>
            <Card.Title>{video.snippet.title}</Card.Title>
            <Card.Text>
              <span>
                {views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} views
              </span>
            </Card.Text>
          </Card.Body>
        </div>
      </Collapse>
      <Card.Footer onClick={handleClick}>
        <time
          dateTime={video.snippet.publishedAt}
          title={moment(video.snippet.publishedAt).format('ll')}
        >
          {moment(video.snippet.publishedAt).fromNow()}
        </time>
      </Card.Footer>
    </Card>
  );
};

export default FeedItemMobile;
