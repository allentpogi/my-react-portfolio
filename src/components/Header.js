import React from "react";
import "./styles/style.css";

function NavTabs({ currentPage, handlePageChange }) {
  const menuItems = [
    { name: "About", href: "#about-me", text: "About me" },
    { name: "Portfolio", href: "#portfolio", text: "Portfolio" },
    { name: "Resume", href: "#my-resume", text: "Resume" },
    { name: "Contact", href: "#contact-me", text: "Contact" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-flex container-fluid">
        <div className="navbar-head">
          <p className="navbar-brand">Allen Tuazon</p>
        </div>
        <ul className="nav">
          {menuItems.map((menuItem) => (
            <li key={menuItem.name}>
              <a
                href={menuItem.href}
                onClick={() => handlePageChange(menuItem.name)}
                className={
                  currentPage === menuItem.name ? "nav-link active" : "nav-link"
                }
              >
                {menuItem.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;
