import React from "react";

const CareesrNGS = () => {
  return (
    <div className="career-img">
      <div className="container   Career-Container">
        <div className="row">
          <div className="col-12 col-md-8 p-md-5 p-md-0">
            <div className="career-title">
              <h1>Become a Part of Our Innovative Team at NGS</h1>
            </div>
            <div className="career-paragraph">
              <p>
                At NGS, we’re committed to excellence in everything we do, from
                providing top-tier Geotechnical, Environmental and Compliance
                Solutions to fostering a workplace that values innovation,
                collaboration, and professional growth. We believe that our
                people are our greatest asset, & we’re always looking for
                talented individuals who are passionate about making a
                difference. Together, we strive to create impactful solutions
                that set new standards for quality and sustainability.
              </p>
            </div>
            <div>
              <a href="joblinks">
                <button className="careers-btn">Job Listings</button>
              </a>
            </div>
          </div>
          <div className="col-12 col-md-4 ">
            <div>
              <img
                src="https://ngsgroup.ca/wp-content/uploads/2024/09/image-30-1.png"
                alt="..."
                className="w-100 careers-ngs-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareesrNGS;
