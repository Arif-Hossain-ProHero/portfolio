import React from "react";
import "./About.css";
import resume from "../../images/resume.pdf";

const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-12 col-sm-12 d-flex justify-content-end about-img">
            <img
              className="img-fluid "
              src="https://image.freepik.com/free-vector/code-typing-concept-illustration_114360-4296.jpg"
              alt="coding"
            />
          </div>
          <div className="col-md-7 col-12 col-sm-12 d-flex justify-content-start">
            <div>
              <h1
                className="text-white"
                style={{ fontWeight: "900", fontSize: "3rem" }}
              >
                ABOUT ME
              </h1>
              <div className="text-white">
                <p>
                  I’m ARIF HOSSAIN, a professional and talented Product Designer
                  with front end development skills. I am passionate about
                  leveraging my diverse backgrounds to decipher challenging
                  problems and create delightful experiences. I honed my skills
                  at web development, technical writing, product design and SEO
                  analytics.
                </p>
                <p>
                  I develop websites with HTML, CSS and JavaScript. I have top
                  skills in using design softwares like Figma, Adobe XD,
                  Invision and PhotoShop; with prototype tools like Framer and
                  Protopie.
                </p>
                <p>
                  Being a diligent, hardworking and result oriented lady, I
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
