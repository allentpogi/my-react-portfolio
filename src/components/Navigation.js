import React from "react";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

export default function PortfolioContainer(props) {
  const renderPage = () => {
    if (props.currentPage === "About") {
      return <About />;
    }
    if (props.currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (props.currentPage === "Contact") {
      return <Contact />;
    }
    return <Resume />;
  };

  return <>{renderPage()}</>;
}
