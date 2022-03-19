import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="aboutMeDiv">
      <h1 className="color">About Koinonia </h1>
      <p className="paragraphAboutMe">
        All the proceeds are going to the 'Have a Heart Foundation' - a charity
        to help provide safe spaces for young people struggling with mental
        health in Wales.
      </p>
      <a className="aboutMeButton" href="/AboutMe">
        Read Jo's story
      </a>
    </div>
  );
};

export default AboutMe;
