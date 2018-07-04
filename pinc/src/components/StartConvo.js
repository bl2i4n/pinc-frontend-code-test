import React from 'react';
import { Popover, Tooltip, Button, Modal, OverlayTrigger, Image, Glyphicon } from 'react-bootstrap';


class StartConvo extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {

    return (
      <div>
        <Button bsStyle="btn btn-light" bsSize="large" onClick={this.handleShow}>
        <Image className="convo-size" src="/start.png" circle />
          Start a conversation
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Image className="pic-in-modal" src="/profile_pic.png" />
            <p>Rafael Doe in</p>
            <Button>
            <Glyphicon glyph="plus" />
              Add to Group
            </Button>
          </Modal.Header>
          <Modal.Body>
            <h4>What is your question? Make it short and simple</h4>
            <Button> > </Button>
          </Modal.Body>
          <Modal.Footer>
            <input type="checkbox"></input>
            <p>Be Anonymous</p>
            <Button className="post-btn" onClick={this.handleClose}>Post</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}


export default StartConvo;
