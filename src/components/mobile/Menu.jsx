import React from "react";
import "./menu.css";

const Menu = () => {
  return (
    <div class="nav-menu">
      <div class="close-menu">
        <i class="uil uil-times"></i>
      </div>
      <div class="nav-links">
        <a href="#home">Home</a>
        <a href="#services">Work</a>
        <a href="#skills">Members</a>
        <a href="#work">Reviews</a>
        <a href="contact.html" style={{ width: "202%", height: "52px" }}>
          Contact
        </a>
      </div>
    </div>
  );
};

export default Menu;
