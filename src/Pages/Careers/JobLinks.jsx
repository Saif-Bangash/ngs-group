import React from "react";
import "./Careers.css"; // Make sure to create a separate CSS file for styles

const JobLinks = () => {
  const jobs = [
    {
      title: "Software Engineer",
      company: "Tech Corp",
      location: "New York, NY",
      link: "#",
    },
    {
      title: "Product Manager",
      company: "Innovate Inc.",
      location: "San Francisco, CA",
      link: "#",
    },
    {
      title: "UI/UX Designer",
      company: "Creative Minds",
      location: "Remote",
      link: "#",
    },
    {
      title: "Data Analyst",
      company: "Data Solutions",
      location: "Austin, TX",
      link: "#",
    },
    // Add more job data as needed
  ];

  return (
    <div id="joblinks">
      <div className="container-fluid ">
        <div className="row ">
          <div className="col-12 joblinks-bg">
            <div className="hero-section">
              <h1>Join Our Team</h1>
            </div>
          </div>
          {/* Job Listings Section */}
        </div>
        <div className="job-listings pt-md-5">
          <h2>Explore Job Opportunities</h2>
          <div className="row">
            {jobs.map((job, index) => (
              <div key={index} className="col-md-6 col-lg-3 mb-4">
                <div className="job-card pt-md-5">
                  <h4 className="job-card-heading">{job.title}</h4>
                  <p>{job.company}</p>
                  <p>{job.location}</p>
                  <a href={job.link} className="btn btn-primary">
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobLinks;
