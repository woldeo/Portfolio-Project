import React, { Component } from "react";
import { Jumbotron,  } from "reactstrap";




class Header extends Component {
  
  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid className="mb-0">
          <div className="container">
            <div className="row text-center">
              <div className="col">
                <h1>Cats in Carts</h1>
                <h3>Put a cat in your cart.</h3>
              </div>
            </div>
          </div>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default Header;
