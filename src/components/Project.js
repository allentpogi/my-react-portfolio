import React, { useState } from "react";
import NavTabs from "./Header";
import PortfolioContainer from "./Navigation";
// import About from "./pages/About";
// import Portfolio from "./pages/Portfolio";
// import Contact from "./pages/Contact";
// import Resume from "./pages/Resume";
import Footer from "./Footer";
import Image from "../images/wallpaperflare.com_wallpaper.jpg";

export default function Project() {
  const [currentPage, setCurrentPage] = useState("About");
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div
        style={{
          backgroundImage: `url(${Image})`,
          // backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <PortfolioContainer currentPage={currentPage} />
      </div>
      <Footer />;
    </div>
  );
}
