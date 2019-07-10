import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Feed.css';

class Feed extends React.Component {
  render() {
    return (
      <div className="Feed">
        <Container>
          <Row>
            <Col>
              <p>Feed</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Feed;
