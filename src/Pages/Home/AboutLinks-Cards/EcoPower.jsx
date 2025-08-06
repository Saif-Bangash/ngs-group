import React from "react";
import "./AboutLinks.css";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import mapcomponent from "../../../component/mapcomponent/data"; // Import the object

const { projectGoalsData } = mapcomponent;

const EcoPower = () => {
  return (
    <div id="ecopower" className="ecopower-section">
      <div className="container-fluid ecopower-bg">
        <div className="row align-items-center ecopower-row">
          <div className="col-12 col-md-12 col-lg-10   text-md-start">
            <h1 className="text-white ecopower-heading px-md-5 display-md-3 fw-bold">
              EcoPower Plant Expansion
            </h1>
          </div>
        </div>
      </div>
      <ProjectGoals />
    </div>
  );
};

export default EcoPower;

// ////////////////////////////////////////

const ProjectGoals = ({ ProjectGoalData }) => {
  return (
    <div className="project-goals-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-8 bg-Overview text-white p-md-5 p-4">
            <div className="">
              <h2 className="text-white fw-bold Overview-heading ">Overview</h2>
              <p className="Overview-text">
                The EcoPower Plant Expansion project represents a significant
                leap forward in sustainable energy production. As part of our
                commitment to advancing green technology, this expansion aims to
                enhance the plant’s capacity while integrating cutting-edge
                environmental solutions.
              </p>
            </div>

            <div className="">
              <h2 className="text-white mb-4 fw-bold Project-text">
                Project Goals
              </h2>

              <div className="goal-item ">
                <h3 className="fw-semibold  goal-item-heading">
                  Increase Capacity
                </h3>
                <p className="Overview-text ">
                  Expand the existing plant’s capacity to accommodate rising
                  energy demands and improve overall power generation
                  efficiency.
                </p>
              </div>

              <div className="goal-item mb-4">
                <h3 className="fw-semibold  goal-item-heading">
                  Enhance Sustainability
                </h3>
                <p className="Overview-text ">
                  Implement state-of-the-art technologies to minimize
                  environmental impact, reduce emissions, and promote the use of
                  renewable energy sources.
                </p>
              </div>

              <div className="goal-item mb-4">
                <h3 className="fw-semibold goal-item-heading ">
                  Optimize Efficiency
                </h3>
                <p className="Overview-text ">
                  Upgrade plant operations to increase operational efficiency
                  and reliability, ensuring consistent energy production with
                  reduced operational costs.
                </p>
              </div>

              <div className="goal-item mb-4">
                <h3 className="fw-semibold  goal-item-heading">
                  Promote Community Engagement
                </h3>
                <p className="Overview-text ">
                  Involve local communities in the project through public
                  consultations and informational sessions to ensure
                  transparency and address concerns.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-4 pt-3">
            <div
              className="p-md-2"
              style={{
                borderTop: "1px solid #000",
                borderBottom: "1px solid #000",
                width: "100%",
              }}
            >
              <h1 className="Project-goals-heading">Project goals</h1>
            </div>

            <a href="mining" className="text-dark text-decoration-none">
              <div className="d-flex justify-content-around align-items-center  gap-3 pt-4">
                <img
                  src="https://ngsgroup.ca/wp-content/uploads/2024/09/Rectangle-23-4-1.png"
                  alt="Mining Site Rehabilitation"
                  className="project-goal-img"
                  width="30%"
                />
                <h5 className="project-goal-text">
                  Mining Site Rehabilitation
                </h5>
              </div>
            </a>
            <hr style={{ border: "1px solid black" }} />

            <a href="oilrig" className="text-dark text-decoration-none">
              <div className="d-flex justify-content-around align-items-center gap-3 ">
                <img
                  src="https://ngsgroup.ca/wp-content/uploads/2024/08/Rectangle-22-5-e1725864080527.png"
                  alt="Oil Rig Environmental Compliance"
                  className="project-goal-img"
                  width="30%"
                />
                <h6 className="project-goal-text">
                  Oil Rig Environmental Compliance
                </h6>
              </div>
            </a>
            <hr style={{ border: "1px solid black" }} />

            <a href="government" className="text-dark text-decoration-none">
              <div className="d-flex justify-content-around align-items-center  gap-3 ">
                <img
                  src="https://ngsgroup.ca/wp-content/uploads/2024/08/Rectangle-21-e1725864150501.png"
                  alt="Government Facility Upgrade"
                  className="project-goal-img"
                  width="30%"
                />
                <h5 className="project-goal-text">
                  Government Facility Upgrade
                </h5>
              </div>
            </a>
            <hr style={{ border: "1px solid black" }} />

            <a href="urban" className="text-dark text-decoration-none">
              <div className="d-flex justify-content-around align-items-center  gap-3  ">
                <img
                  src="https://ngsgroup.ca/wp-content/uploads/2024/08/Rectangle-20-3-e1725864183645.png"
                  alt="Urban Renewal Initiative"
                  className="project-goal-img"
                  width="30%"
                />
                <h5 className="project-goal-text">Urban Renewal Initiative</h5>
              </div>
            </a>
            <hr style={{ border: "1px solid black" }} />

            <a href="greenfield" className="text-dark text-decoration-none">
              <div className="d-flex justify-content-around align-items-center gap-3 ">
                <img
                  src="https://ngsgroup.ca/wp-content/uploads/2024/08/Rectangle-19-1-e1725864217931.png"
                  alt="Greenfield Residential Development"
                  className="project-goal-img"
                  width="30%"
                />
                <h5 className="project-goal-text    ">
                  Greenfield Residential Development
                </h5>
              </div>
            </a>
            <hr style={{ border: "1px solid black" }} />
          </div>
        </div>

        <section className="py-md-5">
          <div className="row py-md-5">
            <div className="col-12 col-sm-12 col-md-12 col-lg-4">
              <div>
                <img
                  src="https://ngsgroup.ca/wp-content/uploads/2024/09/aerial-shot-landscape-surrounded-by-mountains-lakes-with-industrial-disaster.png"
                  alt="..."
                  className="w-100"
                />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-8 p-md-4">
              <div className="fs-2 mb-3 ">
                <h3 className="fw-bold  Overview-heading">Project Goals</h3>
              </div>
              <div className="mb-4">
                <p>
                  Our primary goal is to significantly increase the plant’s
                  capacity to meet the rising demand for energy, while
                  optimizing operational efficiency through advanced
                  technologies.
                </p>
              </div>
              <div className="row">
                {projectGoalsData.map((project, index) => (
                  <div
                    key={index}
                    className="col-12 col-sm-12 col-md-12 col-lg-6 mb-4 "
                  >
                    <div className="card border-0">
                      <div className=" d-flex align-items-center mb-3">
                        <MdKeyboardDoubleArrowRight className="icon-style fs-2 me-3" />
                        <h2 className="card-heading fs-md-3">
                          {project.title}
                        </h2>
                      </div>
                      <div className="card-paragraph">
                        <p className="">{project.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export { ProjectGoals };
