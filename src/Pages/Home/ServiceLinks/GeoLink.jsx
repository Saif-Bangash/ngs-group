import React from "react";
import "./ServiceLinks.css";

const GeoLink = () => {
  return (
    <div id="geolinks">
      <div className="container-fluid Geotechnical-links-bg">
        <div className="row align-items-center link-row">
          <div className="col-12 col-sm-12 col-md-8 col-lg-6">
            <div className="fs-1">
              <h1 className="text-center text-white custom-font">
                Geotechnical & Environmental.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <CardLinks />
    </div>
  );
};

export default GeoLink;

// For CardLinks
const CardLinks = ({ props }) => {
  return (
    <div className="container card-links-container mt-md-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-12 col-lg-8">
          <div className="fs-1 links-heading">
            <h1>Quality Assurance / Quality Control</h1>
          </div>
          <div className="links-paragraph">
            <p>
              At NGS, our Quality Assurance and Quality Control (QA/QC) services
              are meticulously crafted to ensure that every project adheres to
              the highest standards of quality and regulatory compliance. Our
              experienced team utilizes a blend of rigorous methodologies and
              industry best practices to scrutinize every detail, from initial
              planning through to project completion. By implementing
              comprehensive inspection processes and adhering to strict industry
              standards, we ensure that all aspects of your project are executed
              with precision, efficiency, and excellence. We go beyond
              traditional QA/QC approaches by integrating advanced testing
              techniques and continuous improvement strategies into our service
              offerings. Our commitment to thorough documentation and
              transparent reporting provides you with clear insights into the
              quality and performance of your project.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-4">
          <div className="quotation-form-container">
            <h5 className="form-heading">Get a Quotation</h5>
            <p className="form-description">
              Fill out the form below or contact us directly to discuss your
              requirements. We’re here to offer expert advice and provide a
              comprehensive quote that meets your project’s needs and budget.
            </p>
            <form className="quotation-form">
              <input
                type="text"
                placeholder="Name"
                className="form-input"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="form-input"
                required
              />
              <button type="submit" className="btn btn-primary w-100">
                Get a Quote
              </button>
            </form>
          </div>
        </div>
      </div>
      <section className="">
        <div className="background-color"></div>
      </section>
    </div>
  );
};

export { CardLinks }; // Named export
