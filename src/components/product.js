import React from "react";
import {
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

const Product = ({ id, name, description, img, price, addCat }) => {
  return (
    <div id={id} className="col-sm-4 p-4 box">
      <CardBody className="text-center cardBod">
        <CardImg src={img} className="cardPic" name={name} />
        <CardTitle>{name}</CardTitle>
        <CardText>{description}</CardText>
        <Button
          className="bg-secondary col"
          onClick={() =>
            addCat({ id, name, description, img, price, units: 1 })
          }
        >
          Add
        </Button>
        <span>${price}</span>
      </CardBody>
    </div>
  );
};

export default Product;
