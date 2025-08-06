/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const ExpertSolutions = () => {
  return (
    <>
      <div className="background-Expert">
        <div className="container Expert-Container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-8">
              <div className="Expert-title">
                <h6 className="px-md-5">
                  Expert Solutions Across Diverse Industries
                </h6>
              </div>
              <div className="Expert-text">
                <p className="Paragraph px-md-5">
                  NGS is proud to offer our expertise across a wide range of
                  industries. Our tailored Geotechnical, Environmental and
                  Compliance Solutions are designed to meet the unique
                  challenges of each sector.
                </p>
              </div>
              <a href="https://ngsgroup.ca/contact-us/">
                <button className="contact-btn mx-md-5 mt-md-2 mt-sm-0">
                  Contact us
                </button>
              </a>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div className="card border-0 mt-md-2 mt-2">
                <img
                  src="https://ngsgroup.ca/wp-content/uploads/2024/08/pollution-industry-exterior-daylight.png"
                  alt="Expert Image"
                  className="Expert-img w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpertSolutions;
