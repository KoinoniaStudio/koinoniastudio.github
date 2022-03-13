import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="aboutMeDiv">
      <h1 className="color">About me</h1>
      <p className="paragraphAboutMe">
        So much has happened to pave the way for this art shop. I am passionate
        about providing more support for mental health in Wales, and all
        proceeds will go towards funding a place of safety for young people to
        recover.
      </p>
      <a className="aboutMeButton" href="/AboutMe">
        Read Jo's story
      </a>
    </div>
  );
};

export default AboutMe;
