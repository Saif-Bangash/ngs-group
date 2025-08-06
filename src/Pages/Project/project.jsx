import React from "react";
import AboutsCards from "../Home/AboutsCards";
import "../Services/Service.css";

const Project = () => {
  return (
    <>
      <div className="container-fluid project-back-img">
        <div className="row justify-content-center align-items-center project-row">
          <div className="col-12">
            <div className="Home-tag">
              <h1>Project</h1>
              <a href="https://ngsgroup.ca/contact-us/">
                <button className="Home-btn mx-4 ">
                  Get a Free Consultation
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <AboutsCards props={AboutsCards} />
      </div>
    </>
  );
};

export default Project;
