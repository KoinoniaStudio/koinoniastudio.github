import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body className="wallArtBody">
        <div>
          <Link to={`/product/${product._id}`}>
            <Card.Title className="wallArtTitle" as="div">
              <strong>{product.name}</strong>
            </Card.Title>
            <Card.Text className="wallArtArtist" as="p">
              {product.brand}
            </Card.Text>
          </Link>
        </div>
        <div>
          <Card.Text className="wallArtPrice" as="h3">
            £{product.price}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Product;
