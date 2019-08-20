import React, { useState } from 'react';
import moment from 'moment';
import { Card, Collapse, ResponsiveEmbed } from 'react-bootstrap';
import './FeedItemMobile.css';

type Props = { video: any; videoId: string };

const FeedItemMobile = ({ video, videoId }: Props): JSX.Element => {
  const [open, setOpen] = useState(false);

  const videoSrc: string = `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0`;

  return (
    <Card className="FeedItemMobile">
      <Collapse in={!open}>
        <div>
          <Card.Img
            onClick={() => setOpen(!open)}
            src={video.snippet.thumbnails.medium.url}
          />
        </div>
      </Collapse>
      <Collapse in={open} mountOnEnter={true} unmountOnExit={true}>
        <div>
          <ResponsiveEmbed aspectRatio="16by9">
            <iframe src={videoSrc} title="video player" />
          </ResponsiveEmbed>
          <Card.Body onClick={() => setOpen(!open)}>
            {video.snippet.title}
          </Card.Body>
        </div>
      </Collapse>
      <Card.Footer onClick={() => setOpen(!open)}>
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
