import React from "react";

import mapcomponent from "../../component/mapcomponent/data"; // Import the object

const { HomeCards } = mapcomponent;

const AboutsCards = ({ props }) => {
  return (
    <div className="container-fluid bg-about-img p-md-5 pt-2 ">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="About-card-title">
            <h3>About us</h3>
          </div>
          <div className="Showcasing">
            <h1>Showcasing Our Latest Achievements</h1>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="about-description">
            <p>
              At NGS, we take pride in our recent accomplishments, showcasing
              our commitment to excellence in Geotechnical, Environmental and
              Compliance Solutions. Here’s a glimpse of some of our latest
              projects, each reflecting our dedication to meeting and exceeding
              industry standards:
            </p>
          </div>
          <a href="https://ngsgroup.ca/contact-us/">
            <button className="learn-more-btn">Learn more</button>
          </a>
        </div>
      </div>

      <section className="pt-5">
        <div className="row ">
          {HomeCards.map((card, index) => (
            <div key={index} className="col-12 col-md-4 mb-md-4">
              <div className="card position-relative about-card">
                <img src={card.image} alt={card.title} className="w-100" />
                <div className="card-img-overlay d-flex justify-content-center align-items-center">
                  <div className="overlay-text text-center text-white">
                    <h5 className="about-title">{card.title}</h5>
                    <p className="About-text">{card.description}</p>
                    <a href={`${card.id}`}>
                      <button className="Learn-btn">learn more</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutsCards;
