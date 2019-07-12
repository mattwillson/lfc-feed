import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Feed.css';
import FeedItem from './FeedItem';

type Props = { videos: object[] };

const Feed = ({ videos }: Props): JSX.Element => {
  const youtubeList: JSX.Element[] = videos.map((video: any) => {
    return (
      <FeedItem
        publishedAt={video.snippet.publishedAt}
        videoTitle={video.snippet.title}
        videoId={video.snippet.resourceId.videoId}
        key={video.snippet.resourceId.videoId}
      />
    );
  });

  return (
    <div className="Feed">
      <Container>
        <Row>
          <Col>{youtubeList}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Feed;
