import React from "react";
import mapcomponent from "../../component/mapcomponent/data"; // Import the object

const { sectorsData } = mapcomponent;

const ServiceSectors = ({sectors}) => {
  return (
    <>
      <div className="container-fluid bg-Sector d-flex justify-content-end pe-md-5 mt-md-5">
        <div className="row Sectors-row">
          <div className="col-12">
            <div className="section-title">
              <h1>Sectors We Work In</h1>
            </div>
            <div className="section-description">
              <p>
                At NGS, Geotechnical, Environmental and Compliance Solutions
                span a diverse range of sectors. Our expertise ensures that
                businesses across various industries meet regulatory standards
                and maintain high levels of environmental responsibility. Here
                are the key sectors we serve:
              </p>
            </div>
          </div>

          <div className="row">
            {sectorsData.map((sector, index) => (
              <div key={index} className="col-12 col-sm-6 col-md-6">
                <div className="card shadow-lg rounded  sector-card">
                  <div className="card-body">
                    <h5 className="card-title sector-title">
                      <span className="sector-icon">{sector.icon}</span>
                      {sector.title}
                    </h5>
                    <p className="card-text sector-description">
                      {sector.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSectors;
