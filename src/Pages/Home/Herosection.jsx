import React from "react";
import "./Home.css";

const Herosection = () => {
  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center bg-Home">
        <div className="row w-100">
          <div className="col-12 col-sm-12 col-md-8">
            <div className="Home-tag">
              <h1 className="text-white">
                Expert in Geotechnical, Environmental and Compliance Solutions
              </h1>
            </div>
            <div className="px-5">
              <a href="https://ngsgroup.ca/contact-us/">
                <button className="Home-btn mx-4 ">
                  Get a Free Consultation
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
