import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="navbar py-5">
      <div className="container d-block d-md-flex text-white">
        <div className="text-center">
          <h1 className="logo">ARIF HOSSAIN</h1>
        </div>
        <div className="text-center">
          <p>&copy;Copyright 2021. All Rights Reserved By Arif Hossain</p>
          <div className="text-center">
            <a href="https://github.com/Arif-Hossain-ProHero" target="_blank">
              <i className="fab fa-github-square fs-2 me-3"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/arif-hossain121/"
              target="_blank"
            >
              <i className="fab fa-linkedin fs-2 me-3"></i>
            </a>
            <a
              href="https://www.facebook.com/tarek.jamil.92560/"
              target="_blank"
            >
              {" "}
              <i className="fab fa-facebook-square fs-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
