import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <>
      <LargeHeader />
    </>
  );
};

export function LargeHeader() {

  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <Link to={"/"}>
            <img src="https://i.ibb.co/b6qk1yr/logo.png" alt="Logo" />
            <h1>Legacy Code</h1>
          </Link>
        </div>
        <div className="links">
          <ul className="ul-links">
            <li className="li-link">
              <Link to={"#home"} className="active">
                Home
              </Link>
            </li>
            <li className="li-link">
              <Link to={"#work"}>Work</Link>
            </li>
            <li className="li-link">
              <Link to={"#members"}>Members</Link>
            </li>
            <li className="li-link">
              <Link to={"#reviews"}>Reviews</Link>
            </li>
            <li className="li-link">
              <Link to={"#hiring"}>Hiring</Link>
            </li>
          </ul>
        </div>
        <div className="btns">
          <Link to={"/contact"}>Contact</Link>
          <i
            className="uil uil-bars menu-btn"
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Header;
