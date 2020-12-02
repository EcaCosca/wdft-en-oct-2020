import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav id="navbar">
      <ul>
        <a href="#home">
          <li>Home</li>
        </a>
        <a href="#contact">
          <li>Contact</li>
        </a>
        <a href="#about">
          <li>About</li>
        </a>
      </ul>

      <div className="nav-details">
        <p className="nav-username">User's name</p>
      </div>
    </nav>
  );
}

export default Navbar;
