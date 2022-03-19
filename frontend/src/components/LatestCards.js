import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import "./LatestCards.css";

const LatestCards = () => {
  return (
    <CardGroup className="MainCardStyle">
      <Card className="eachCard">
        <Card.Img
          variant="top"
          alt="First slide"
          src="./images/JFbrightpinkonblack.png"
          className="imageStyle"
        />
        <Card.Body className="cardBodyMain">
          <a className="cardButton" href="/latest">
            Shop Photography
          </a>
        </Card.Body>
      </Card>
      <Card className="eachCard">
        <Card.Img
          variant="top"
          className="imageStyle"
          src="./images/JFcolourstripes.png"
          alt="second slide"
        />
        <Card.Body className="cardBodyMainB">
          <a className="cardButton" href="/latest">
            Shop wall art
          </a>
        </Card.Body>
      </Card>
      <Card className="eachCard">
        <Card.Img
          variant="top"
          src="./images/JFgoldonblue.png"
          alt="third slide"
          className="imageStyle"
        />
        <Card.Body className="cardBodyMain">
          <a className="cardButton" href="/latest">
            Shop coasters art
          </a>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default LatestCards;
