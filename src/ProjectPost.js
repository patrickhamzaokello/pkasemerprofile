import React from "react";
import Button from "@material-ui/core/Button";

function ProjectPost({ image, title, description, linkpage }) {
  return (
    <div className="project">
      <img src={image} alt="" />
      <div className="description">
        <h1>{title}</h1>
        <p>{description}</p>
        <Button className="project__button">Read More</Button>
      </div>
    </div>
  );
}

export default ProjectPost;
