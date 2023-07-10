import React from "react";
import Image1 from "../../images/homework1.JPG";

export default function About() {
  return (
    <div className="jumbotron text-center">
      <div>
        <h1 className="margin-bottom">My portfolio</h1>
        <div className="row margin-bottom">
          <div className="col-sm-4">
            <p>HTML, CSS, and Git: Code Refactor</p>
            <img src={Image1} className="img-responsive margin" alt="HW1" />
          </div>
          <div className="col-sm-4">
            <p>Advanced CSS: Portfolio</p>
            <img
              src={Image1}
              className="img-responsive margin"
              // style="width:100%"
              alt="HW2"
            />
          </div>
          <div className="col-sm-4">
            <p>JavaScript: Password Generator</p>
            <img
              src={Image1}
              className="img-responsive margin"
              // style="width:100%"
              alt="HW3"
            />
          </div>
        </div>
        <div className="row margin-bottom">
          <div className="col-sm-4">
            <p>Web APIs: Code Quiz</p>
            <img src={Image1} className="img-responsive margin" alt="HW1" />
          </div>
          <div className="col-sm-4">
            <p>Third-Party APIs: Work Day Scheduler</p>
            <img
              src={Image1}
              className="img-responsive margin"
              // style="width:100%"
              alt="HW2"
            />
          </div>
          <div className="col-sm-4">
            <p>Server-Side APIs: Weather Dashboard</p>
            <img
              src={Image1}
              className="img-responsive margin"
              // style="width:100%"
              alt="HW3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
