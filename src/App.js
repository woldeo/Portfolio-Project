import React, { Component } from "react";
import Product from "./components/product";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import PRODUCTS from "./components/productsArray";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
} from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
    this.clearCart = this.clearCart.bind(this);

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

  clearCart() {
    this.setState({
    cart: [],
  })
  }

  handleAddCat(cat) {
    const cartedCats = this.state.cart.filter((c) => c.id === cat.id);

    if (cartedCats.length > 0) {
      const notCartedCats = this.state.cart.filter((c) => c.id !== cat.id);
      const updatedQty = {
        ...cartedCats[0],
        units: cartedCats[0].units + cat.units,
      };

      this.setState({
        cart: [...notCartedCats, updatedQty],
      });
    } else {
      this.setState({
        cart: [...this.state.cart, cat],
      });
    }
  }

  cartContents() {
    const emptyCart = "Your cart is currently empty. Add a cat!";
    const catsInCart = this.state.cart.map((c) => (
      <Table bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Add</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{c.name}</td>
            <td>${c.price * c.units}</td>
            <td>{c.units}</td>
            <td>
              <Button outline size="sm" color="success">
                Add
              </Button>
            </td>
            <td>
              <Button outline size="sm" color="danger">
                Delete
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    ));

    if (catsInCart.length > 0) {
      return catsInCart;
    } else {
      return emptyCart;
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <div>
            <Button onClick={this.toggleModal} className="cart bg-primary">
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
            <h3>Shopping Cart Contents</h3>
          </ModalHeader>
          <ModalBody>
            <div>{this.cartContents()}</div>
          </ModalBody>
          <ModalFooter>
            <Button className="bg-danger" onClick={this.clearCart}>Empty Cart</Button>
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
