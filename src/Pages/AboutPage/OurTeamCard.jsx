import React from "react";

const OurTeamCard = () => {
  return (
    <div className="container ">
      <div className="custom-heading">
        <h1>Our Team</h1>
      </div>
      <div className="row pt-3">
        <div className="col-12 col-md-4  col-lg-3">
          <div className="card">
            <img
              src="https://ngsgroup.ca/wp-content/uploads/2024/09/image-39.png"
              alt="..."
              className="w-100 about-image"
            />
          </div>
        </div>
        <div className="col-12  col-md-4  col-lg-3 p-md-3">
          <div className="team-title">
            <h3>Ali Hissan</h3>
            <p className="fs-5">ceo</p>
          </div>

          <div className="team-paragraph">
            <p>
              Ali Hassan, founder of NGS Group, holds a degree in Geology from
              the University of Saskatchewan and has 13 years of experience in
              geotechnical engineering. He has successfully managed complex
              projects and supported numerous construction sites from inception
              to completion. His family background is rooted in civil
              engineering, with a focus mainly in civil materials testing
            </p>
          </div>
        </div>
        <div className="col-12  col-md-4  col-lg-3">
          <div className="card">
            <img
              src="https://ngsgroup.ca/wp-content/uploads/2024/09/image-34.png"
              alt="..."
              className="w-100"
            />
          </div>
        </div>
        <div className="col-12 col-md-4  col-lg-3 p-md-3">
          <div className="team-title">
            <h3>Agiapal singh</h3>
            <p className="fs-5">Project Manager</p>
          </div>
          <div className="team-paragraph">
            <p>
              is the project manager at NGS, overseeing the successful execution
              of various projects across Canada. He has been with NGS since 2014
              and manages large-scale projects from Ontario to British Columbia,
              ensuring they meet client expectations and project goals.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-4  col-lg-3 mt-4">
          <div className="card">
            <img
              src="https://ngsgroup.ca/wp-content/uploads/2024/09/image-56.png"
              alt="..."
              className="w-100"
            />
          </div>
        </div>
        <div className="col-12 col-md-4  col-lg-3 mt-4 p-md-3">
          <div className="team-title">
            <h3>Pranav Senthilmuthu</h3>
            <p className="fs-5">Site Supervisor</p>
          </div>

          <div className="team-paragraph">
            <p>
              the site supervisor at NGS, specializes in material field testing.
              Since 2016, he has managed large-scale projects for NGS across the
              Alberta and British Columbia regions, ensuring quality and
              precision in testing for major developments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamCard;
