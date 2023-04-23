import React from "react";
import Logo from "../images/logo-bookmark.svg";
const Navbar = () => {
  return (
    <nav className="top-nav">
      <div>
        <img src={Logo} alt="logo Bookmark" />
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="menu">
        <li>FEATURES</li>
        <li>PRICING</li>
        <li>CONTACT</li>
        <li>
          <button>LOGIN</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
