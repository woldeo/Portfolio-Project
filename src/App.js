import React, { Component } from "react";
import Product from "./components/product";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import PRODUCTS from "./components/productsArray";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);

    this.state = {
      isModalOpen: false,
      products: PRODUCTS,
      cart: [],
    };
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleAddCat(cat) {
    const cartedCat = this.state.cart.filter((c) => c.id === cat.id);

    if (cartedCat.length > 0) {
      const notCartedCat = this.state.cart.filter((c) => c.id !== cat.id);
      const updatedQty = {
        ...cartedCat[0],
        units: cartedCat[0].units + cat.units,
      };

      this.setState({
        cart: [...notCartedCat, updatedQty],
      });
    } else {
      this.setState({
        cart: [...this.state.cart, cat],
      });
    }
    console.log(this.state.cart);
  }
  render() {
    const cartContents = this.state.cart.map((c) => (
      <li>
        {c.name} : Qty {c.units}
      </li>
    ));

    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <div>
            <Button onClick={this.toggleModal} className="cart">
              View Cart
            </Button>
          </div>
          <div className="row">
            {this.state.products.map((cat) => (
              <Product
                key={cat.id}
                {...cat}
                addCat={this.handleAddCat.bind(this)}
              />
            ))}
          </div>
        </div>
        <Modal
          centered
          isOpen={this.state.isModalOpen}
          toggle={this.toggleModal}
        >
          <ModalHeader toggle={this.toggleModal}>
            Shopping Cart Contents
          </ModalHeader>
          <ModalBody>
            <ul>{cartContents}</ul>
          </ModalBody>
          <ModalFooter>
            <Button className="bg-secondary" onClick={this.toggleModal}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

export default App;
