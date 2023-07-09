import React from "react";
import "./styles/style.css";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#myPage">
            Allen Tuazon
          </a>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <li class="nav-item">
            <a
              href="#about-me"
              onClick={() => handlePageChange("About")}
              // This is a conditional (ternary) operator that checks to see if the current page is "Home"
              // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
              class={currentPage === "About" ? "nav-link active" : "nav-link"}
            >
              About me
            </a>
          </li>
          <li class="nav-item">
            <a
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              class={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </a>
          </li>
          <li class="nav-item">
            <a
              href="#my-resume"
              onClick={() => handlePageChange("Resume")}
              // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              class={currentPage === "Resume" ? "nav-link active" : "nav-link"}
            >
              My resume
            </a>
          </li>
          <li class="nav-item">
            <a
              href="#contact-me"
              onClick={() => handlePageChange("Contact")}
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              class={currentPage === "Contact" ? "nav-link active" : "nav-link"}
            >
              Contact me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;
