import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../styles/style.css";
import Image1 from "../../images/homework1.JPG";
import Image2 from "../../images/homework2.JPG";
import Image3 from "../../images/homework3.JPG";
import Image4 from "../../images/homework4.JPG";
import Image5 from "../../images/homework5.JPG";
import Image6 from "../../images/homework6.JPG";
import Image7 from "../../images/Project3.JPG";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const carouselItems = [
    {
      image: Image1,
      alt: "First slide",
      link: "https://allentpogi.github.io/wk1-challenge-allen/",
      caption: "HTML, CSS, and Git: Code Refactor",
    },
    {
      image: Image2,
      alt: "Second slide",
      link: "https://allentpogi.github.io/generate-password-app/",
      caption: "JavaScript: Password Generator",
    },
    {
      image: Image3,
      alt: "Third slide",
      link: "https://allentpogi.github.io/wk4-webapi-code-quiz/index.html",
      caption: "Web APIs: Code Quiz",
    },
    {
      image: Image4,
      alt: "Fourth slide",
      link: "https://allentpogi.github.io/wk5-work-day-scheduler/",
      caption: "Third-Party APIs: Work Day Scheduler",
    },
    {
      image: Image5,
      alt: "Fifth slide",
      link: "https://allentpogi.github.io/wk6-5day-weather-forecast/",
      caption: "Server-Side APIs: Weather Dashboard",
    },
    {
      image: Image6,
      alt: "Sixth slide",
      link: "https://allentpogi.github.io/my-portfolio/",
      caption: "Advanced CSS: Portfolio",
    },
    {
      image: Image7,
      alt: "Seventh slide",
      link: "https://pimp-your-pooch-2826a7e23bfe.herokuapp.com/",
      caption: "MERN Stack Single-Page Application",
    },
  ];

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {carouselItems.map((item, i) => (
        <Carousel.Item key={i}>
          <img className="img-carousel" src={item.image} alt={item.alt} />
          <Carousel.Caption>
            <a target="_blank" href={item.link}>
              <p className="carousel-text">{item.caption}</p>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;
