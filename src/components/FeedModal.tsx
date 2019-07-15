import React from 'react';
import { Modal, Button } from 'react-bootstrap';

type Props = {
  show: boolean;
  onHide: () => void;
};

class FeedModal extends React.Component<Props, {}> {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default FeedModal;
