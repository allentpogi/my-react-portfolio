import React from "react";
import "../styles/style.css";
import ControlledCarousel from "./Carousel";

export default function Portfolio() {
  return (
    <div>
      <div className="jumbotron text-center">
        <h1 className="margin-bottom">My portfolio</h1>
      </div>
      <div className="text-center div-carousel">
        <ControlledCarousel />
      </div>
    </div>
  );
}
