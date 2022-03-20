import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "./Carousel.css";

const Carous = () => {
  return (
    <Carousel variant="dark" className="mainContainer" fade>
      <Carousel.Item style={{ height: 800 }} className="imageStyle">
        <img
          className="d-block w-100 sliderImage"
          src="./images/iNNOVATIONphotography-commercial-photographer-Swansea-2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="slideOneContainer">
            <h3 className="titleOne">Discover our newest pieces</h3>
            <a className="buttonSliderTwo" href="./latest">
              Shop now
            </a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: 800 }} className="imageStyle">
        <img
          className="d-block w-100 sliderImage"
          src="./images/iNNOVATIONphotography-commercial-photographer-Swansea-102.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <div className="slideTwoContainer">
            <h3 className="titleTwo">Collect art that makes an impact</h3>
            <a className="buttonSliderTwo" href="./latest">
              Shop now
            </a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: 800 }} className="imageStyle">
        <img
          className="d-block w-100 sliderImage"
          src="./images/iNNOVATIONphotography-commercial-photographer-Swansea-5.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className="sliderCaption">
          <div className="slideThreeContainer">
            <h3 className="titleThree">Browse our favourites</h3>
            <a className="buttonSliderTwo" href="./latest">
              Shop now
            </a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carous;
