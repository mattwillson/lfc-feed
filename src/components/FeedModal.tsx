import React from 'react';
import { Modal } from 'react-bootstrap';
import './FeedModal.css';

type Props = {
  show: boolean;
  onHide: () => void;
};

class FeedModal extends React.Component<Props, {}> {
  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        dialogClassName="FeedModal"
        centered
      >
        <Modal.Body>Modal body</Modal.Body>
      </Modal>
    );
  }
}

export default FeedModal;
