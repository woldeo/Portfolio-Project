import React from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Button
} from "reactstrap";

const Product = ({ id, name, description, img, price, addCat }) => {
  return (
    <Card id={id} className="col-sm-3 p-3 catio">
      <CardBody className="text-center cardBod">
        <CardImg top src={img} className="cardPic" name={name} />
        <CardTitle>{name}</CardTitle>
        <CardText>{description}</CardText>
        <Button className="bg-primary col" onClick ={() => addCat({ id, name, description, img, price, units: 1 })}>Add</Button>
        <span style={{ color: "tomato" }}>${price}</span>
      </CardBody>
    </Card>
  );
};

export default Product;
