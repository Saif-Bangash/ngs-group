import React from "react";

const AboutSection = ({abouts}) => {
  return (
    <div className="bg-about">
      <div className="container About-Container">
        <div className="row m-md-5">
          <div className="col-12 col-md-4">
            <div className="About-title">
              <h3>About Us</h3>
            </div>
            <div className="About-text-h3">
              <h3> Test Smarter. Comply Faster. Protect Better.</h3>
            </div>
            <div className="About-paragraph">
              <p>
                At NGS, we are committed to upholding the highest standards in
                Geotechnical, Environmental and Compliance Solutions. With
                extensive experience across various industries, including oil &
                gas, power, commercial, residential, government, and mining
                services, we provide expert solutions to help businesses
                navigate the complex landscape of environmental regulations.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4 border-line d-flex flex-row">
            <div className="About-paragraph">
              <p>
                Our mission is to partner with clients to develop and implement
                effective strategies that ensure environmental responsibilities
                are met with precision and efficiency. We pride ourselves on our
                skilled team, rapid service delivery, and customized approach to
                each project. Our commitment is to exceed client and industry
                expectations through unparalleled expertise and dedication. By
                leveraging advanced technology and industry knowledge, we offer
                comprehensive testing, reporting, and post-environmental
                analysis services tailored to your specific needs. Trust NGS to
                be your reliable partner in achieving and maintaining the
                highest standards of environmental compliance.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="image-container">
              <img
                src="https://ngsgroup.ca/wp-content/uploads/2024/09/image-40.png"
                alt="..."
                className="w-100 about-us-img "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
