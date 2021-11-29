import React from "react";
import "./Portfolio.css";
import shoesbd from "../../images/shoesbd3.PNG";
import optic from "../../images/optic-center3.PNG";
import nicetrip from "../../images/nicetrip3.PNG";

const Portfolio = () => {
  return (
    <div id="project" className="about-container portfolio">
      <div className="container">
        <div className="d-flex justify-content-center mb-5">
          <h3 className="heading text-white">PROJECTS</h3>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card">
              <img src={shoesbd} className="card-img-top" alt="..." />
              <div className="text-center my-3">
                <div>
                  <a href="https://shoesbd-543e7.web.app/" target="_blank">
                    <button className="regular-btn">View Details</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={nicetrip} className="card-img-top" alt="..." />
              <div className="text-center my-3">
                <div>
                  <a href="https://nice-trip-e6b1c.web.app/" target="_blank">
                    {" "}
                    <button className="regular-btn">View Details</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={optic} className="card-img-top" alt="..." />
              <div className="text-center my-3">
                <div>
                  <a
                    href="https://optic-center-hospital.web.app/"
                    target="_blank"
                  >
                    <button className="regular-btn">View Details</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
