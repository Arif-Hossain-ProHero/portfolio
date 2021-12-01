import React, { useEffect } from "react";
import "./Navbar.css";
import resume from "../../images/resume.pdf";
import { HashLink, NavHashLink } from "react-router-hash-link";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg">
        <div className="container py-3">
          <NavHashLink
            data-aos="zoom-in"
            className="navbar-brand logo"
            smooth
            to="/#"
          >
            ARIF HOSSAIN
          </NavHashLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon bg-white"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav d-flex ms-auto mb-2 mb-lg-0">
              <li className="nav-item ps-2">
                <NavHashLink
                  className="nav-link text-white"
                  activeStyle={{ borderBottom: "3px solid red" }}
                  smooth
                  to="/#"
                >
                  Home
                </NavHashLink>
              </li>
              <li className="nav-item ps-2">
                <NavHashLink
                  className="nav-link text-white"
                  activeStyle={{ borderBottom: "3px solid red" }}
                  smooth
                  to="/#about"
                >
                  About
                </NavHashLink>
              </li>
              <li className="nav-item ps-2">
                <NavHashLink
                  className="nav-link text-white"
                  activeStyle={{ borderBottom: "3px solid red" }}
                  smooth
                  to="/#services"
                >
                  Services
                </NavHashLink>
              </li>
              <li className="nav-item ps-2">
                <NavHashLink
                  className="nav-link text-white"
                  smooth
                  to="/#project"
                >
                  Projects
                </NavHashLink>
              </li>
              <li className="nav-item ps-2">
                <Link to="/blogs" className="nav-link text-white" smooth>
                  Blogs
                </Link>
              </li>
              <li className="nav-item px-2">
                <NavHashLink
                  className="nav-link text-white"
                  smooth
                  to="/#contact"
                >
                  Contact Me
                </NavHashLink>
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
