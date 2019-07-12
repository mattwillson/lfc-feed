import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Feed.css';
import FeedItem from './FeedItem';

type Props = { videos: object[] };

const Feed = ({ videos }: Props): JSX.Element => {
  console.log(videos);

  return (
    <div className="Feed">
      <Container>
        <Row>
          <Col>
            <FeedItem />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Feed;
