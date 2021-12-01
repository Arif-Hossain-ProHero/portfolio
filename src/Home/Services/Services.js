import React, { useEffect } from "react";
import "./Services.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div id="services" className="about-container text-white">
      <div className="d-flex justify-content-center mb-5">
        <h3 className="heading">SERVICES</h3>
      </div>
      <div
        data-aos="zoom-in-up"
        className="container mx-auto row row-cols-1 row-cols-md-3 g-4"
      >
        <div className="col">
          <div className="card-body p-4">
            <img
              className="img-fluid"
              src="https://cdn-icons-png.flaticon.com/512/1005/1005141.png"
              alt=""
            />
            <h5 className="card-title text-warning">WEB DEVELOPMENT</h5>
            <p className="card-text">
              I use various web technologies to develop attractive websites
              which converts visitors to customers. I develop creative and
              responsive website layouts using React and Node.js.
            </p>
          </div>
        </div>
        <div className="col">
          <div className="card-body p-4">
            <img
              className="img-fluid"
              src="https://cdn-icons-png.flaticon.com/512/6230/6230849.png"
              alt=""
            />
            <h5 className="card-title text-warning">UX-UI DESIGN</h5>
            <p className="card-text">
              I do create user-friendly interfaces that enable users to
              understand how to use complex technical products. As a UX Designer
              I focused on all aspects of a product's development.
            </p>
          </div>
        </div>
        <div className="col">
          <div className="card-body p-4">
            <img
              className="img-fluid"
              src="https://cdn-icons-png.flaticon.com/512/3437/3437364.png"
              alt=""
            />
            <h5 className="card-title text-warning">RESPONSIVE DESIGN</h5>
            <p className="card-text">
              Responsive web design services ensure a web solution's adaptive
              behavior to the screen size it is displayed on. I create Mobile
              friendly and Responsive web App for my clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
