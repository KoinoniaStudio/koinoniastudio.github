import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "./Carousel.css";

const Carous = () => {
  return (
    <Carousel className="mainContainer">
      <Carousel.Item style={{ height: 600 }} className="imageStyle">
        <img
          className="d-block w-100"
          src="./images/JFheartcoasters.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="slideOneContainer">
            <h3 className="slideOneTitle">Bespoke Coasters</h3>
            <p>Using any combination of colours.</p>
            <Button
              className="slideOneButton"
              variant="danger"
              href="/Latest"
              active
            >
              See Jo's coasters
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: 600 }} className="imageStyle">
        <img
          className="d-block w-100"
          src="./images/JFpinkheartcoaster.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Totally unique</h3>
          <p>Hand crafted in Swansea!</p>
          <Button href="#" className="colorButton" variant="danger" active>
            See selection of Coasters
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: 600 }} className="imageStyle">
        <img
          className="d-block w-100"
          src="./images/JForangepetals.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          <Button href="#" variant="danger" active>
            See selection of Coasters
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carous;
