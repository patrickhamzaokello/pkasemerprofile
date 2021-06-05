import React from "react";
import "./css/Content.css";
import Button from "@material-ui/core/Button";
import Profile from "./images/mkbhd2.png";
import Plant from "./images/plant.png";
import DownArrow from "@material-ui/icons/ArrowDownward";

import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";
import Whatsapp from "@material-ui/icons/WhatsApp";
import Github from "@material-ui/icons/GitHub";

function Content() {
  return (
    <div className="home">
      <div className="content">
        <div className="content__brown">
          <img src={Plant} alt="" />
        </div>
        <div className="content__white">
          <h1 className="headingtext">
            Hey There, I’m Patrick.{" "}
            <span>
              Full Stack <span className="devcolor">Developer,</span>
            </span>{" "}
            <span>Computer Science Student</span>
          </h1>

          <Button className="contactme__button">CONTACT ME</Button>
        </div>

        <div className="content__dark">
          <img src={Profile} alt="" />
        </div>
      </div>

      <div className="arrowdownward">
        <DownArrow className="arrow" />
      </div>
      <div className="homedescription">
        <p>
          I'm a 22-year old student at Mbarara University of Science and
          Technology currently pursueing a Bachelors in Computer Science
        </p>
        <p>
          As I've grown as a developer, I have worked on several Web Platforms
          and Applications including alongside different Teams and Experts in
          the field of both Back End & Front End Web Development.
        </p>

        <div className="socialmedia">
          <Github className="socialicon" />
          <Whatsapp className="socialicon" />
          <Twitter className="socialicon" />
          <Instagram className="socialicon" />
          <Facebook className="socialicon" />
        </div>
      </div>
    </div>
  );
}

export default Content;
