import React from "react";
import "../styles/style.css";
import Image from "../../images/avatar.JPG";

export default function About() {
  return (
    <div>
      <div className="jumbotron text-center">
        <div>
          <img
            src={Image}
            className="img-responsive img-circle margin"
            alt="avatar"
          />
        </div>
        <h1>About me</h1>
        <p>
          I'm Allen. I am currently on an exciting jour full stack developer.
        </p>
        <p>
          This is my first attempt to build a portfolio website showcasing my
          completed work during the coding bootcamp.
        </p>
      </div>
    </div>
  );
}
