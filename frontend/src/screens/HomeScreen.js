import React from "react";
import "./HomeScreen.css";
import { Container } from "react-bootstrap";
import Carous from "../components/Carousel";
import LatestCards from "../components/LatestCards";
import AboutMe from "../components/AboutMe";
import Service from "../components/Service";

const HomeScreen = () => {
  return (
    <>
      <Container className="carouselHeight container-fluid" fluid>
        <Carous className="bannerMain" />
        <Service />
        <AboutMe />
        <LatestCards />
      </Container>
    </>
  );
};

export default HomeScreen;
