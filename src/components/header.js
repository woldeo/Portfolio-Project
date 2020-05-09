import React, { Component } from "react";
import { Jumbotron, Button, Modal, ModalHeader, ModalBody } from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);

    this.state = {
      isModalOpen: false,
    };
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid>
          <div className="container">
            <div className="row text-center">
              <div className="col">
                <h1>All The Cats</h1>
                <h3>Your new best friend is just a click away!</h3>
              </div>
            </div>
            <Button onClick={this.toggleModal} className="cart">
              View Cart
            </Button>
          </div>
        </Jumbotron>
        <Modal
          centered
          isOpen={this.state.isModalOpen}
          toggle={this.toggleModal}
        >
          <ModalHeader>Shopping Cart Contents</ModalHeader>
          <ModalBody>Here is a modal with things in it!</ModalBody>
          <Button className="bg-secondary btn-small" onClick={this.toggleModal}>
            Close
          </Button>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Header;
