/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react"; 

const TextCards = () => {
  return (
    <div className="container mt-5 border border-dark border-5 ">
      <div className="row p-4">
        <div className="col-12 col-md-4">
          <div className="card border-0">
            <img
              src="https://ngsgroup.ca/wp-content/uploads/2024/08/5.png"
              alt="..."
              className="w-25"
            />
            <div className="card-title NGS-card-text">
              <p>
                NGS has been an invaluable partner in our recent power plant
                expansion. Their expertise in environmental testing and
                compliance ensured that we met all regulatory requirements
                efficiently and effectively. Their team’s dedication and swift
                service were instrumental in the success of our project.
              </p>
              <h3 className="NGS-card-title">John Smith,</h3>
              <span className="NGS-card-text">Project Manager at EcoPower Corporation</span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <img
            src="https://ngsgroup.ca/wp-content/uploads/2024/08/group-of-multiethnic-construction-workers-in-row-l-2022-11-02-01-58-08-utc-1-1-1.png"
            alt="..."
            className="w-75"
          />
        </div>
        <div className="col-12 col-md-4">
          <div className="card border-0">
            <img
              src="https://ngsgroup.ca/wp-content/uploads/2024/08/5.png"
              alt="..."
              className="w-25"
            />
            <div className="card-title NGS-card-text">
              <p>
                Working with NGS has been a game-changer for our residential
                development projects. Their comprehensive testing and tailored
                solutions helped us navigate complex environmental regulations
                with ease. Their professionalism and attention to detail are
                truly commendable.
              </p>
              <h3 className="NGS-card-title">Sarah Lee,</h3>
              <span className="NGS-card-text">Development Director at Greenfield Residential</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextCards;
