import React from "react";
import { ProjectGoals } from "./EcoPower";

const Urban = () => {
  return (
    <div id="urban">
      <div className="container-fluid  urban-bg">
        <div className="row align-items-center ecopower-row">
          <div className="col-12 col-md-10 col-lg-10 col-xl-8">
            <div className="text-md-start">
              <h1 className="text-white greenfield-heading px-md-5 display-md-3 fw-bold">
                Urban Renewal Initiative
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Pass relevant data to ProjectGoals */}
      <ProjectGoals ProjectGoalData={ProjectGoals} />
    </div>
  );
};

export default Urban;
