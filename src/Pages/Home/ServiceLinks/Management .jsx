import React from "react";
import { CardLinks } from "./GeoLink";

const Management = () => {
  return (
    <div id="management">
      <div className="container-fluid managements-links-bg">
        <div className="row align-items-center link-row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-8">
            <div className="text-white mx-md-5">
              <h1 className=" custom-font">Management services.</h1>
            </div>
          </div>
        </div>
      </div>
      <CardLinks
        title="Project Management"
        description="Our project management services are designed to ensure that your project runs smoothly from inception to completion. We handle everything from scheduling, budgeting, and resource allocation to risk management and quality control. Our experienced managers ensure that every project is delivered on time, within budget, and to the highest standards."
        formDescription="If you are looking for expert project management services, contact us below to get a tailored quote for your next project."
        formHeading="Get a Project Quote"
      />
    </div>

  );
};

export default Management;
