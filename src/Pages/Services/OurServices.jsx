import React from "react";
import ServicesCards from "../Home/ServicesCards";
import ServiceSectors from "../Home/ServiceSectors";
import AboutSection from "../Home/AboutSection";

const OurServices = () => {
  return (
    <div>
      <div className="services-section">
        <ServicesCards services={ServicesCards} />
      </div>
        
      <div>
        <ServiceSectors sectors={ServiceSectors} />
      </div>

      <div>
        <AboutSection about={AboutSection} />
      </div>
    </div>
  );
};

export default OurServices;
