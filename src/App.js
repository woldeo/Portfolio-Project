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
  Navbar,
} from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
    this.clearCart = this.clearCart.bind(this);
    this.lessCats = this.lessCats.bind(this);

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
    });
  }

  lessCats(cat) {
    const cartedCats = this.state.cart.filter((c) => c.id === cat.id);

    if (cartedCats.length > 0) {
      const notCartedCats = this.state.cart.filter((c) => c.id !== cat.id);
      const updatedQty = {
        ...cartedCats[0],
        units: cartedCats[0].units - 1,
      };

      this.setState({
        cart: [...notCartedCats, updatedQty],
      });
    }
  }

  handleAddCat(cat) {
    const cartedCats = this.state.cart.filter((c) => c.id === cat.id);

    if (cartedCats.length > 0) {
      const notCartedCats = this.state.cart.filter((c) => c.id !== cat.id);
      const updatedQty = {
        ...cartedCats[0],
        units: cartedCats[0].units + 1,
      };

      this.setState({
        cart: [...notCartedCats, updatedQty],
      });
    } else {
      const newCat = cat;
      newCat.units = 1;
      this.setState({
        cart: [...this.state.cart, newCat],
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
              <Button
                onClick={() => this.handleAddCat(c)}
                outline
                size="sm"
                color="success"
              >
                Add
              </Button>
            </td>
            <td>
              <Button
                onClick={() => this.lessCats(c)}
                outline
                size="sm"
                color="danger"
              >
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
        <Navbar className="brick">
        <Button onClick={this.toggleModal} className="cart bg-danger">
              View Cart
            </Button>
          </Navbar>
        <div className="container-fluid backdrop">
            
          <div className="row justify-content-around">
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
            <Button className="bg-danger" onClick={this.clearCart}>
              Empty Cart
            </Button>
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
