import React, { useState, useEffect } from "react";
import NavTabs from "./Header";
import PortfolioContainer from "./Navigation";
import Footer from "./Footer";
// import Image from "../images/wallpaperflare.com_wallpaper.jpg";
import "./styles/style.css";

export default function Project() {
  const [currentPage, setCurrentPage] = useState("About");
  const handlePageChange = (page) => setCurrentPage(page);

  useEffect(() => {
    document.title = "AllenPogi's portfolio";
  }, []);

  return (
    <div className="bg">
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <main>
        <PortfolioContainer currentPage={currentPage} />
      </main>
      <Footer />;
    </div>
  );
}
