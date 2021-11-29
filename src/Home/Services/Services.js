import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div id="services" className="about-container text-white">
      <div className="d-flex justify-content-center mb-5">
        <h3 className="heading">SERVICES</h3>
      </div>
      <div className="container mx-auto row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card-body p-4">
            <img
              className="img-fluid"
              src="https://cdn-icons-png.flaticon.com/512/1005/1005141.png"
              alt=""
            />
            <h5 className="card-title">WEB DEVELOPMENT</h5>
            <p className="card-text">
              I use various web technologies to develop attractive websites
              which converts visitors to customers. I develop creative and
              responsive website layouts.
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
            <h5 className="card-title">UX-UI DESIGN</h5>
            <p className="card-text">
              I use various web technologies to develop attractive websites
              which converts visitors to customers. I develop creative and
              responsive website layouts.
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
            <h5 className="card-title">RESPONSIVE DESIGN</h5>
            <p className="card-text">
              I use various web technologies to develop attractive websites
              which converts visitors to customers. I develop creative and
              responsive website layouts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
