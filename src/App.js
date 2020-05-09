import React, { Component } from "react";
import Product from "./components/product";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";

const products = [
  {
    id: 1,
    name: "Dapper Dan",
    description: "Long-haired, cute AF, ready for all the pets.",
    img:
      "https://images.unsplash.com/photo-1498100152307-ce63fd6c5424?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
    price: 300,
  },
  {
    id: 2,
    name: "Jelly Bean",
    description: "Green-eyes, sharp claws, big ears, all the meows.",
    img:
      "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    price: 275,
  },
  {
    id: 3,
    name: "Midnight",
    description: "Sleek, stealthy, hunter of the night.",
    img:
      "https://images.unsplash.com/photo-1503431128871-cd250803fa41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    price: 400,
  },
  {
    id: 4,
    name: "Derps McGee",
    description: "Super cute, super dumb.",
    img: "https://i.insider.com/5d24d6b921a861093e71fef3",
    price: 600,
  },
  {
    id: 5,
    name: "Bartholemue",
    description: "This noble beast has zero time for you.",
    img:
      "https://thenypost.files.wordpress.com/2019/12/cat.jpg?quality=80&strip=all",
    price: 250,
  },
  {
    id: 6,
    name: "Phats",
    description:
      "Don't let his cuteness fool you, if you touch that belly, he will murder you in your sleep.",
    img:
      "https://www.rd.com/wp-content/uploads/2019/09/Cute-cat-lying-on-his-back-on-the-carpet.-Breed-British-mackerel-with-yellow-eyes-and-a-bushy-mustache.-Close-up-e1573490045672.jpg",
    price: 275,
  },
  {
    id: 7,
    name: "Sleepy",
    description:
      "Despite her calm demeanor, Sleepy kitty slays the mice. All. Night. Long.",
    img:
      "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2018/03/Russian-Blue_01.jpg",
    price: 300,
  },
  {
    id: 8,
    name: "Happy",
    description:
      "The only things that outweighs Happy's joy, are her sad looks.",
    img:
      "https://www.catster.com/wp-content/uploads/2018/05/A-gray-cat-crying-looking-upset.jpg",
    price: 500,
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      cart: {},
    };
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <div className="row">
            {products.map((cat) => (
              <Product key={cat.id} {...cat} />
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
