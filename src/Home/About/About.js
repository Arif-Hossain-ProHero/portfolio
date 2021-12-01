import React, { useEffect } from "react";
import "./About.css";
import resume from "../../images/resume.pdf";
import myPhoto from "../../images/my-photo.png";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div id="about" className="about-container">
      <div className="container">
        <div className="row">
          <div
            data-aos="fade-right"
            className="col-md-5 col-12 col-sm-12 d-flex justify-content-end about-img"
          >
            <img className="img-fluid " src={myPhoto} alt="coding" />
          </div>
          <div className="col-md-7 col-12 col-sm-12 d-flex justify-content-start">
            <div className="ms-3">
              <h1
                className="text-white"
                style={{ fontWeight: "900", fontSize: "3rem" }}
              >
                ABOUT ME
              </h1>
              <div className="text-white ">
                <p>
                  I’m ARIF HOSSAIN, a professional and talented Front-End web
                  Developer. I am passionate about leveraging my diverse
                  backgrounds to decipher challenging problems and create
                  delightful experiences. I honed my skills at web development.
                  I write standards based code that is semantic, accessible,
                  search-engine friendly, easy to maintain, cross browser
                  compatible, and performant.
                </p>
                <p>
                  I develop websites with HTML, CSS and JavaScript, React,
                  Firebase, Express.js and so on. I'm also learning Back-End
                  Development and looking forward to be a Full Stack Web
                  Developer.
                </p>
                <p>
                  Being a diligent, hardworking and result oriented Peson, I
                  always work towards achieving best result on each project I
                  lay my hands on.
                </p>
              </div>
              <a href={resume} target="_blank">
                <button className="regular-btn">DOWNLOAD RESUME</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
