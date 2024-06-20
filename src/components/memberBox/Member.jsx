import React from "react";
import "./member-box.css";

const Member = ({ image, name, description, duration, fs, ln, gh }) => {
  return (
    <div className="member" data-aos="fade-down" data-aos-duration={duration}>
      <div className="member-img">
        <img src={image} alt="member" />
      </div>
      <p className="member-about">
        <span className="member-name">{name}</span>
        {description}
      </p>
      <div className="member-social">
        <a href={fs} target="_blank" rel="noreferrer">
          <i className="uil uil-facebook-f"></i>
        </a>
        <a href={ln} target="_blank" rel="noreferrer">
          <i className="uil uil-linkedin-alt"></i>
        </a>
        <a href={gh} target="_blank" rel="noreferrer">
          <i className="uil uil-github-alt"></i>
        </a>
      </div>
    </div>
  );
};

export default Member;
