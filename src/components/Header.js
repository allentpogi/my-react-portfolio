import React from "react";
import "./styles/style.css";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar">
      <div className="nav-flex container-fluid">
        <div className="navbar-head">
          <p className="navbar-brand">Allen Tuazon</p>
        </div>
        <ul className="nav">
          <li>
            <a
              href="#about-me"
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
            >
              About me
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#my-resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="#contact-me"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;
