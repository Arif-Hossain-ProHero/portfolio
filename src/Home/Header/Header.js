import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div id="header" className="header-container">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 d-flex justify-content-center align-items-center">
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
              <button className="regular-btn">Hire Me</button>
            </div>
          </div>
          <div className="col-md-7 col-12 d-flex justify-content-center align-items-center">
            <img
              className="img-fluid"
              src="https://res.cloudinary.com/dejiabiola/image/upload/v1607804394/envato_2.0/kem-hero.png"
              alt="coding"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
