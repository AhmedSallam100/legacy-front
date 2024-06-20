import React from "react";
import "../workBox/work-box.css";
import "./review-box.css";
import { Link } from "react-router-dom";

const Review = ({ description, name, duration }) => {
  return (
    <div
      className="review-box"
      data-aos="fade-down"
      data-aos-duration={duration}
    >
      <div className="review-icon">
        <i class="uil uil-award"></i>
      </div>
      <p className="review-text">{description}</p>
      <div className="reviewer">
        By: <span className="reviewer-name">{name}</span>
      </div>
    </div>
  );
};

export default Review;
