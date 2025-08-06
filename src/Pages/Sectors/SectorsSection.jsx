import React from "react";

import mapcomponent from "../../component/mapcomponent/data"; // Import the object

const { CommercialData } = mapcomponent;

const SectorsSection = () => {
  return (
    <div className="background-card-img">
      <div className="container mt-md-5  ">
      {/* Background image in row */}
      <div className="row">
        <div className="col-12 mt-md-4 pt-2">
          <div className="  d-flex justify-content-center mb-2">
            <h1 className="text-white font-family-custom Sectors-title">Sectors We Work In</h1>
          </div>
          <div className="text-center  mb-md-4">
            <p className="lead text-white Sectors-text">
              At NGS, our Geotechnical, Environmental, and Compliance Solutions
              services span a diverse range of sectors. Our expertise ensures
              that businesses across various industries meet regulatory
              standards and maintain high levels of environmental responsibility.
              Here are the key sectors we serve:
            </p>
          </div>
        </div>
      </div>

      {/* Render Sector Titles dynamically */}
      <div className="row mt-md-3 ">
        {CommercialData.map((sector, index) => (
          <div key={index} className="col-12 col-sm-12 col-md-4 col-lg-4 mb-md-3 ">
            <div className="card Commercial-card  bg-dark text-light shadow-sm rounded p-md-3   ">
              {/* Image */}
              <div className="d-flex justify-content-start mb-md-3">
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="img-fluid Commercial-img "
                />
              </div>

              {/* Title and Description */}
              <div className="">
                <h3 className="font-weight-bold text-uppercase text-white Commercial-title">
                  {sector.title}
                </h3>
                <p className="mt-md-2 text-white Commercial-text">
                  {sector.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default SectorsSection;
