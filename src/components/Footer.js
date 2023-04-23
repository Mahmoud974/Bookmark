import React from "react";

import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="element_in_footer">
        <img
          src="../images/logo-bookmark-white.svg"
          alt="logo Bookmark"
          className="logo Bookmark"
        />
        <ul>
          <li>FEATURES</li>
          <li>PRICING</li>
          <li>CONTACT</li>
        </ul>
        <div className="social">
          <FaFacebookSquare className="social_fb" />
          <IoLogoTwitter className="social_tw" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
