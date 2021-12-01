import React, { useEffect } from "react";
import "./Portfolio.css";
import shoesbd from "../../images/shoesbd3.PNG";
import optic from "../../images/optic-center3.PNG";
import nicetrip from "../../images/nicetrip3.PNG";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div id="project" className="about-container portfolio">
      <div className="container">
        <div className="d-flex justify-content-center mb-5">
          <h3 className="heading text-white">PROJECTS</h3>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div data-aos="fade-right" className="card">
              <img src={shoesbd} className="card-img-top" alt="..." />
              <div className="text-center my-3">
                <Link to={"/portfolio/1"}>
                  {" "}
                  <button className="regular-btn">View Details</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div data-aos="zoom-in" className="card">
              <img src={nicetrip} className="card-img-top" alt="..." />
              <div className="text-center my-3">
                <Link to={"/portfolio/2"}>
                  {" "}
                  <button className="regular-btn">View Details</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div data-aos="fade-left" className="card">
              <img src={optic} className="card-img-top" alt="..." />
              <div className="text-center my-3">
                <Link to={"/portfolio/3"}>
                  {" "}
                  <button className="regular-btn">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
