import React from "react";
import "./css/Header.css";
import logo from "./images/logo.svg";

import Instagrm from "@material-ui/icons/Instagram";
import Twitter from "@material-ui/icons/Twitter";
import Github from "@material-ui/icons/GitHub";
import Facebook from "@material-ui/icons/Facebook";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} width="34" alt="logo" />
      </div>

      <hr />

      <div className="social">
        <a
          href="https://github.com/patrickhamzaokello"
          target="_blank"
          rel="noreferrer"
        >
          <Github className="socialmediaicon" />
        </a>
        <a
          href="https://www.instagram.com/patrick_hamza_okello/?hl=en"
          rel="noreferrer"
          target="_blank"
        >
          <Instagrm className="socialmediaicon" />
        </a>
        <a
          href="https://twitter.com/patrick_hamza"
          target="_blank"
          rel="noreferrer"
        >
          <Twitter className="socialmediaicon" />
        </a>{" "}
        <a
          href="https://www.facebook.com/PatrickHamzaOkello"
          target="_blank"
          rel="noreferrer"
        >
          <Facebook className="socialmediaicon" />
        </a>
      </div>
    </div>
  );
}

export default Header;
