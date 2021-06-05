import React from "react";
import "./css/Project.css";
import Ipadimage from "./images/innogr1.png";
import InnogrPro from "./images/innogr.svg";
import MwonyaPro from "./images/mwonya.svg";
import Covid19Ug from "./images/covidug.svg";
import AdobexdPro from "./images/adobexd.svg";

import Button from "@material-ui/core/Button";

function Project() {
  return (
    <div className="projectpage">
      <div className="projectcover">
        <div className="projecthead">
          <h1>My Skills</h1>
          <p>
            Through my studies, I've gained a solid understanding of computer
            science and web development concepts, and have dedicated a lot of my
            free time to apply these concepts to real-world scenarios and
            applications.
          </p>
        </div>
        <div className="skill__list">
          <ul>
            <li>Javascript ES6</li>

            <li>HTML & CSS</li>

            <li>React</li>

            <li>SASS</li>
          </ul>

          <ul>
            <li>React Native</li>

            <li>Styled-Components</li>

            <li>Git</li>

            <li>PHP & SQL</li>
          </ul>
        </div>

        <div className="projecthead">
          <h1>What I've been working on</h1>
          <p>
            I like to stay busy and always have a project in the works. Take a
            look at some of the applications, articles, and companies I've
            dedicated my time to.
          </p>
        </div>

        <div className="project__list">
          <div className="project projecta">
            <img src={InnogrPro} />
            <div className="description">
              <h1>Innogr</h1>
              <p>
                A tool built to help Farmers Collaborate, Promote Agri-Business
                and Provide a Clean Dashboard showing IoT sensor Values used to
                Monitor Gardens/Green houses, Prices of Agricultural Commodities
                and rich News Feed. Users are able to share and ask Current
                Projects in Agriculture.Its built on Django and Python.
              </p>

              <Button className="project__button">Read More</Button>
            </div>
          </div>
          <div className="project">
            <img src={MwonyaPro} />
            <div className="description">
              <h1>Mwonya </h1>
              <p>
                Mwonya is a Music Streaming Platform built on Javascript, Html,
                PHP, CSS, AJAX and Material-UI. It has an independent Msql
                Database hosted on Linode. Future Plans is to Shift the Database
                to AWS to cater for the increased Streams.Our Focus is on Local
                Content produced within Uganda. Great Project to Learn alot
              </p>

              <Button className="project__button">Read More</Button>
            </div>
          </div>
        </div>
        <div className="project__list">
          <div className="project projecta">
            <img src={Covid19Ug} />
            <div className="description">
              <h1>Pkasemer Covid19-UG</h1>
              <p>
                A Tool built to track Covid19 Cases and Stats in Uganda,
                EastAfrica and Other Continents. It also performs Sentimental
                Analysis on Responses to Tweets made by Key-Stakeholders in the
                Fight against Covid19. The Tech stack includes; Django, Redis,
                Google Cloud, Heroku, Python, (HTML,CSS,Javascript), Chart.Js
                and Twitter Api
              </p>

              <Button className="project__button">Read More</Button>
            </div>
          </div>
          <div className="project">
            <img src={AdobexdPro} />
            <div className="description">
              <h1>UI/Ux Adobe-XD</h1>
              <p>
                My Favourite Design Tool (Adobe Xd). I have Spent Countless
                hours making and Designing and Planning all my Interfaces. From
                School Projects to Crazy Designs for Fun. It makes work easy as
                I visualize all my components both mobile and Web before any
                Code is implemented. "What else would I ever want to use! 😉 "
              </p>

              <Button className="project__button">Read More</Button>
            </div>
          </div>
        </div>
        <div className="projecthead">
          <h1> </h1>
          <p></p>
        </div>
        <div className="projecthead">
          <h1>My Social Media Platforms</h1>
          <p>I'm Alot Cooler On My Social Platforms</p>
          <p>
            Through my studies, I've gained a solid understanding of computer
            science and web development concepts, and have dedicated a lot of my
            free time to apply these concepts to real-world scenarios and
            applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
