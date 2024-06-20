import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="bottom">
            <div className="logo">
              <Link to={"/"}>
                <img src="https://i.ibb.co/b6qk1yr/logo.png" alt="Logo" />
                <h1>Legacy Code</h1>
              </Link>
            </div>
            <div className="footer-icons">
              <a
                href={"https://web.facebook.com/profile.php?id=61557969256031"}
                target="_blank"
                rel="noreferrer"
              >
                <i className="uil uil-facebook-f"></i>
              </a>
              <a href="/">
                <i className="uil uil-linkedin-alt"></i>
              </a>
              <a href="/">
                <i className="uil uil-github-alt"></i>
              </a>
              <a href="/">
                <i className="uil uil-phone-alt"></i>
              </a>
            </div>
          </div>
          <hr />
          <p className="copy-right">
            All Right Reserved Copyright For{" "}
            <a
              href={"https://web.facebook.com/profile.php?id=61557969256031"}
              target="_blank"
              rel="noreferrer"
            >
              <span className="copy-right-name">Legacy Code</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
