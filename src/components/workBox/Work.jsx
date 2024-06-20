import React from "react";
import "./work-box.css";
import { Link } from "react-router-dom";

const Work = ({ image, name, type, link, duration }) => {
  return (
    <div className="work-box" data-aos="fade-down" data-aos-duration={duration}>
      <div className="work-img">
        <img src={process.env.PUBLIC_URL + image} alt="work" />
      </div>
      <div className="work-details">
        <span className="work-name">{name}</span>
        <span className="work-type">{type}</span>
      </div>
      <Link to={link} className="work-link" target="_blank">
        Visit
      </Link>
    </div>
  );
};

export default Work;
