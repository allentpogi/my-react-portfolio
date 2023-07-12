import React, { useState } from "react";
import NavTabs from "./Header";
import PortfolioContainer from "./Navigation";
import Footer from "./Footer";
// import Image from "../images/wallpaperflare.com_wallpaper.jpg";
import "./styles/style.css";

export default function Project() {
  const [currentPage, setCurrentPage] = useState("About");
  const handlePageChange = (page) => setCurrentPage(page);

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
