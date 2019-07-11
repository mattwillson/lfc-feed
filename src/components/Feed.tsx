import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Feed.css';
import FeedItem from './FeedItem';

type Props = {
  videos: object[];
};

class Feed extends React.Component<Props, {}> {
  componentDidUpdate(): void {
    console.log(this.props.videos);
  }

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
