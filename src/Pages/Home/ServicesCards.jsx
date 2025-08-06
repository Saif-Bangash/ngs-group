import React from "react";
import { AiTwotoneShop } from "react-icons/ai";
import { FaLongArrowAltRight } from "react-icons/fa";
import mapcomponent from "../../component/mapcomponent/data";
const { services } = mapcomponent;

const ServicesCards = ({ title, description, link }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-sm-12 ">
          <div className="Services-text">Our Services</div>
          <div className="services-paragraph">
            Test Smarter. Comply Faster. Protect Better.
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        {services.map((service, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card service-card w-75">
              <AiTwotoneShop className="card-icon" />
              <div className="card-body service-body">
                <h5 className="card-title service-title">{service.title}</h5>
                <p className="card-text service-text">{service.description}</p>
                {/* Use a simple anchor link */}
                <a
                  href={`${service.id}`}
                  className="btn read-more-btn text-white"
                 
                >
                  Read more
                </a>

                <FaLongArrowAltRight className="mt-1 fs-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesCards;
