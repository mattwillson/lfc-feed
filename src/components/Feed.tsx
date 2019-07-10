import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Feed.css';
import FeedItem from './FeedItem';

class Feed extends React.Component {
  render() {
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
  }
}

export default Feed;
