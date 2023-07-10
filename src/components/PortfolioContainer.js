import React, { useState } from "react";
import NavTabs from "./NavTabs";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./Footer";
import Image from "../images/wallpaperflare.com_wallpaper.jpg";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div
        style={{
          backgroundImage: `url(${Image})`,
          backgroundRepeat: "no-repeat",
          filter: "grayscale(90%)",
          width: "100%",
          margin: "auto",
          // backgroundSize: "contain",
        }}
      >
        {/* We are passing the currentPage from state and the function to update it */}

        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}
      </div>
      <Footer />;
    </div>
  );
}
