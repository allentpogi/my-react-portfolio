import React from "react";
import "../styles/style.css";
import Image from "../../images/avatar.JPG";

export default function About() {
  return (
    <div className="jumbotron">
      <div className="text-center container-fluid">
        <div>
          <img
            src={Image}
            className="img-responsive img-circle margin"
            alt="avatar"
          />
        </div>
        <h1 className="margin-top">I'm Allen.</h1>
        <p>I am on a quest to become a full stack developer extraordinaire.</p>
        <p>Armed with a keyboard and my love for problem-solving,</p>
        <p>
          I dive headfirst into the vast ocean of programming languages,
          frameworks, and databases.
        </p>
        <p></p>
      </div>
    </div>
  );
}
