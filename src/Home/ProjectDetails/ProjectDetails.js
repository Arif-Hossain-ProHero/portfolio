import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const { id } = useParams();
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/fakedata.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);
  const item = projects.filter((p) => p.id == id);
  return (
    <div>
      <Navbar></Navbar>
      <div className="about-container details">
        <div className="container py-5">
          {item.map((p) => (
            <div>
              <h2 className="text-center my-5 text-warning">{p.name}</h2>
              <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                  <img src={p.img[0]} className="img-fluid rounded" />
                </div>
                <div className="col">
                  {/* features */}
                  <h3>Key Features</h3>
                  <ul className="mb-5">
                    {p.features.map((f) => (
                      <li>{f}</li>
                    ))}
                  </ul>
                  {/* link button */}
                  <div className="text-center">
                    <a className="me-2" href={p.link} target="_blank">
                      <button className="regular-btn">Visit Site</button>
                    </a>
                    <a href={p.gitRepo} target="_blank">
                      <button className="regular-btn">GitHub Repo</button>
                    </a>
                    <br />
                    <br />
                    {p.serverRepo && (
                      <a href={p.serverRepo} target="_blank">
                        <button className="regular-btn">
                          Server Repository
                        </button>
                      </a>
                    )}
                  </div>
                  <div>
                    {p.tech?.map((t) => (
                      <button
                        style={{
                          backgroundColor: "#011627",
                          borderRadius: "8px",
                          marginRight: "3px",
                          padding: "6px 8px",
                          border: "none",
                          marginBottom: "5px",
                          marginTop: "12px",
                        }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mb-5 screenshot container mx-auto">
                <h2 className="my-5 text-center">MORE SCREENSHOTS</h2>
                <div className="row row-cols-1 row-cols-md-2 g-4 my-5">
                  <div className="col">
                    <img className="img-fluid" src={p.img[1]} alt="" />
                  </div>
                  <div className="col">
                    <img className="img-fluid" src={p.img[2]} alt="" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ProjectDetails;
