import React from "react";

import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import mapcomponent from "../../component/mapcomponent/data"; // Import the object

const { features } = mapcomponent;

const UnmatchedCareers = () => {
  return (
    <>
      <div className="container about-container p-md-5 pt-4">
        <div className="row">
          {/* Left Section: Image */}
          <div className="col-12 col-md-12 col-lg-4 mb-4 mb-md-0">
            <div className="image-container">
              <img
                src="https://ngsgroup.ca/wp-content/uploads/2024/09/image-37.png"
                alt="..."
                className="w-100 img-fluid "
              />
            </div>
          </div>
          {/* Right Section: Text Content */}
          <div className="col-12 col-md-12 col-lg-8">
            <div className="fs-2 mb-md-3">
              <h3 className="fw-bold custom-heading">Join US</h3>
            </div>
            <div className="fs-1 mb-md-4">
              <h1 className="custom-heading">Why Work with Us?</h1>
            </div>
            <div className="mb-4">
              <p>
                We offer more than just a job—we offer a platform for growth,
                innovation, & making a meaningful impact. Join us to collaborate
                with industry experts, advance your career, & contribute to
                projects that shape a better future.
              </p>
            </div>
            <div className="row">
              {features.map((feature, index) => (
                <div key={index} className="col-12 col-md-12 col-lg-6 mb-4">
                  <div className="card border-0">
                    <div className=" d-flex align-items-center mb-3">
                      <MdKeyboardDoubleArrowRight className="icon-style fs-md-2 me-3" />
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

      <div className="container Current-background">
        <div className="row">
          <div className="col-12 col-md-6 p-md-5">
            <div className="card career-card p-md-5">
              <div className="career-heading">
                <h1>Current Opportunities</h1>
              </div>
              <div className="Careers-paragraph">
                <p>
                  We’re always on the lookout for passionate and skilled
                  professionals in various fields, including:
                </p>
              </div>
              <div>
                <ul className="ulCareer">
                  <li>Environmental Engineers</li>
                  <li>Quality Assurance Specialists</li>
                  <li>Project Managers</li>
                  <li>Field Technicians</li>
                  <li>Lab Analysts</li>
                  <li>Administrative Staff</li>
                </ul>
              </div>
              <div className="Careers-paragraph">
                <p>
                  If you’re ready to take the next step in your career and work
                  in a dynamic, forward-thinking environment, we’d love to hear
                  from you. Explore our current job openings and find out how
                  you can become part of the NGS team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnmatchedCareers;
