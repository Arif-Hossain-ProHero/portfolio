import React, { useEffect } from "react";
import "./Header.css";
import manVector from "../../images/man_vector.png";
import Aos from "aos";
import "aos/dist/aos.css";
import Particles from "react-particles-js";

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div id="header" className="header-container  mt-5">
      <div className="container">
        <div className="row">
          <div
            data-aos="fade-right"
            className="col-12 col-md-5 d-flex justify-content-center align-items-center"
          >
            <div>
              <p>HI THERE, I'M</p>
              <h1 style={{ fontWeight: "900", fontSize: "5rem" }}>
                Arif Hossain
              </h1>
              <h4 style={{ color: "#00FFBB" }}>
                JUNIOR FRONT-END WEB DEVELOPER
              </h4>
              <p className="mt-3">
                As a frontend developer I am skilled in HTML, CSS, JavaScript,
                Bootstrap, React, Material UI. I am also work in the backend
                with node js, express js, MongoDB
              </p>
              <div className="mt-3">
                <a className="regular-btn" href="#contact">
                  Hire Me
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="col-md-7 col-12 d-flex justify-content-center align-items-center"
          >
            <img className="img-fluid" src={manVector} alt="coding" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
