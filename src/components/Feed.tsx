import React from 'react';
import MediaQuery from 'react-responsive';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import './Feed.css';
import FeedItem from './FeedItem';

type Props = { videos: object[] };

const Feed = ({ videos }: Props): JSX.Element => {
  const youtubeList: JSX.Element[] = videos.map((video: any) => {
    const id: string = video.snippet.resourceId.videoId;

    return (
      <Col xs={12} sm={4} key={id}>
        <FeedItem video={video} videoId={id} key={id} />
      </Col>
    );
  });

  return (
    <div className="Feed">
      <Container fluid={true}>
        <MediaQuery maxWidth={575.98}>
          <Row>
            <Accordion defaultActiveKey="0">{youtubeList}</Accordion>
          </Row>
        </MediaQuery>
        <MediaQuery minWidth={576}>
          <Row>{youtubeList}</Row>
        </MediaQuery>
      </Container>
    </div>
  );
};

export default Feed;
