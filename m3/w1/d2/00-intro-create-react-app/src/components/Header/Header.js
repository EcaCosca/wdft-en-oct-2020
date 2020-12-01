import React from "react";
import "./Header.css";

// Loading images located inside of the `src` folder
// If an image is smaller than 100kb, it will be bundled in the build
import logo from "./../../logo.svg";

// Load files located in the `/public` folder
const logoPublic = "/logo192.png";

function Header() {
  return (
    <header className="App-header">
      <img src={logoPublic} alt="" />
      {/* <img src={logo} alt="" /> */}

      <h1 className="App-title text-dark">Welcome to React App</h1>
      <h3 className="greeting">You are ready to take this to another level</h3>
    </header>
  );
}

export default Header;
