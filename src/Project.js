import React from "react";
import "./css/Project.css";
import InnogrPro from "./images/innogr.svg";
import MwonyaPro from "./images/mwonya.svg";
import Covid19Ug from "./images/covidug.svg";
import AdobexdPro from "./images/adobexd.svg";

import ProjectPost from "./ProjectPost";

function Project() {
  return (
    <div className="projectpage">
      <div className="pageintroduction">
        <div className="projecthead">
          <h1>My Skills</h1>
          <p>
            Through my studies, I've gained a solid understanding of computer
            science and web development concepts, and have dedicated a lot of my
            free time to apply these concepts to real-world scenarios and
            applications.
          </p>
        </div>
        {/* <div className="skill__list">
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
        </div> */}
      </div>
      <div className="pageintroduction">
        <div className="projecthead">
          <h1>What I've been working on</h1>
          <p>
            I like to stay busy and always have a project in the works. Take a
            look at some of the applications, articles, and companies I've
            dedicated my time to.
          </p>
        </div>
      </div>

      <div className="projectlisting">
        <ProjectPost
          image={InnogrPro}
          title="Innogr"
          description="
        A tool built to help Farmers Collaborate, Promote Agri-Business and
        Provide a Clean Dashboard showing IoT sensor Values used to Monitor
        Gardens/Green houses, Prices of Agricultural Commodities and rich
        News Feed. Users are able to share and ask Current Projects in
        Agriculture.Its built on Django and Python.
        "
          linkpage="/innogr"
        />
        <ProjectPost
          image={MwonyaPro}
          title="Mwonya"
          description="
          Mwonya is a Music Streaming Platform built on Javascript, Html,
          PHP, CSS, AJAX and Material-UI. It has an independent Msql
          Database hosted on Linode. Future Plans is to Shift the Database
          to AWS to cater for the increased Streams.Our Focus is on Local
          Content produced within Uganda. Great Project to Learn alot
        "
          linkpage="/mwonya"
        />
        <ProjectPost
          image={Covid19Ug}
          title="Pkasemer Covid19-UG"
          description="
          A Tool built to track Covid19 Cases and Stats in Uganda,
          EastAfrica and Other Continents. It also performs Sentimental
          Analysis on Responses to Tweets made by Key-Stakeholders in the
          Fight against Covid19. The Tech stack includes; Django, Redis,
          Google Cloud, Heroku, Python, (HTML,CSS,Javascript), Chart.Js
          and Twitter Api
        "
          linkpage="/covid19"
        />
        <ProjectPost
          image={AdobexdPro}
          title="UI/Ux Adobe-XD"
          description="
          My Favourite Design Tool (Adobe Xd). I have Spent Countless
          hours making and Designing and Planning all my Interfaces. From
          School Projects to Crazy Designs for Fun. It makes work easy as
          I visualize all my components both mobile and Web before any
          Code is implemented. 'What else would I ever want to use! '
        "
          linkpage="/designprocess"
        />
      </div>
      <div className="pageintroduction">
        <div className="projecthead">
          <h1>Lets Build a Project Together</h1>
          <p>The Fun is building Something Together and Seeing it Work</p>
        </div>
      </div>
      <div className="pageintroduction">
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
