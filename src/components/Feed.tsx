import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Feed.css';
import FeedItem from './FeedItem';

type Props = { videos: object[] };

const Feed = ({ videos }: Props): JSX.Element => {
  const youtubeList: JSX.Element[] = videos.map((video: any) => {
    const id: string = video.snippet.resourceId.videoId;

    return (
      <Col xs={12} md={4} key={id}>
        <FeedItem video={video} videoId={id} key={id} />
      </Col>
    );
  });

  return (
    <div className="Feed">
      <Container fluid={true}>
        <Row>{youtubeList}</Row>
      </Container>
    </div>
  );
};

export default Feed;
