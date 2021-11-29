import React from "react";
import "./Navbar.css";
import resume from "../../images/resume.pdf";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg py-4">
        <div className="container-fluid">
          <a className="navbar-brand logo" href="#header">
            ARIF HOSSAIN
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav d-flex ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#project">
                  Project
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#contact">
                  Contact Me
                </a>
              </li>

              <a href={resume} target="_blank">
                <button className="regular-btn">Download Resume</button>
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
