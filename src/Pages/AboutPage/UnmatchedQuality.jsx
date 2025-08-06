import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import mapcomponent from "../../component/mapcomponent/data"; // Import the object

const { features } = mapcomponent;

const UnmatchedQuality = () => {
  return (
    <div className="container about-container p-md-5">
      <div className="row">
        {/* Left Section: Image */}
        <div className="col-12 col-sm-12 col-md-12 col-lg-4 mb-4 mb-md-0">
          <div className="image-container">
            <img
              src="https://ngsgroup.ca/wp-content/uploads/2024/09/image-36.png"
              alt="..."
              className="w-100 img-fluid "
            />
          </div>
        </div>
        {/* Right Section: Text Content */}
        <div className="col-12 col-sm-12 col-md-12 col-lg-8 mt-md-3">
          <div className="fs-2 mb-3">
            <h3 className="fw-bold custom-heading">Why Choose</h3>
          </div>
          <div className="fs-1 mb-4">
            <h1 className="custom-heading">Exceptional Craftsmanship</h1>
          </div>
          <div className="mb-4">
            <p>
              We create impressive results with a focus on quality and precision. Our team is skilled in delivering projects that stand out.
            </p>
          </div>
          <div className="row">
            {features.map((feature, index) => (
              <div key={index} className="col-12 col-sm-12 col-md-12 col-lg-6 mb-4">
                <div className="card border-0">
                <div className=" d-flex align-items-center mb-3">
                  <MdKeyboardDoubleArrowRight className="icon-style fs-2 me-3" />
                  <h2 className="custom-heading fs-md-3">{feature.title}</h2>
                </div>
                <div className="custom-paragraph">
                  <p className="">{feature.description}</p>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnmatchedQuality;
