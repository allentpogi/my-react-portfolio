import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/style.css";
import Image1 from "../../images/homework1.JPG";
import Image2 from "../../images/homework2.JPG";
import Image3 from "../../images/homework3.JPG";
import Image4 from "../../images/homework4.JPG";
import Image5 from "../../images/homework5.JPG";
import Image6 from "../../images/homework6.JPG";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="img-carousel" src={Image1} alt="First slide" />
        <Carousel.Caption>
          <a
            className="btn btn-link"
            target="blank"
            href="https://allentpogi.github.io/wk1-challenge-allen/"
          >
            <h3>HTML, CSS, and Git: Code Refactor</h3>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="img-carousel" src={Image2} alt="Second slide" />
        <Carousel.Caption>
          <a
            className="btn btn-link"
            target="blank"
            href="https://allentpogi.github.io/generate-password-app/"
          >
            <h3>JavaScript: Password Generator</h3>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="img-carousel" src={Image3} alt="Third slide" />
        <Carousel.Caption>
          <a
            className="btn btn-link"
            target="blank"
            href="https://allentpogi.github.io/wk4-webapi-code-quiz/index.html"
          >
            <h3>Web APIs: Code Quiz</h3>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="img-carousel" src={Image4} alt="Fourth slide" />
        <Carousel.Caption>
          <a
            className="btn btn-link"
            target="blank"
            href="https://allentpogi.github.io/wk5-work-day-scheduler/"
          >
            <h3>Third-Party APIs: Work Day Scheduler</h3>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="img-carousel" src={Image5} alt="Fifth slide" />
        <Carousel.Caption>
          <a
            className="btn btn-link"
            target="blank"
            href="https://allentpogi.github.io/wk6-5day-weather-forecast/"
          >
            <h3>Server-Side APIs: Weather Dashboard</h3>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="img-carousel" src={Image6} alt="Sixth slide" />
        <Carousel.Caption>
          <a
            className="btn btn-link"
            target="blank"
            href="https://allentpogi.github.io/my-portfolio/"
          >
            <h3>Advanced CSS: Portfolio</h3>
          </a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
