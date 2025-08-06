import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="bg-last-img">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6">
            <h5 className="last-text text-white">Let's start your project</h5>
          </div>
          <div className="col-12 col-md-6">
            <div className="last-button d-flex justify-content-end">
              <a href="https://ngsgroup.ca/contact-us/"><button className="Contact-btn mx-4">Get a Quote</button></a>
              <a href="https://ngsgroup.ca/contact-us/"> <button className="Contact-btn mx-4">Contact us</button></a>
            </div>
          </div>
        </div>
        <section className=" mt-4">
          <div className="row bg-dark text-white py-5">
            <div className="col-12 col-md-4 px-md-5">
              <div className="">
                <img
                  src="https://ngsgroup.ca/wp-content/uploads/2024/08/Frame-8.png"
                  className="w-25"
                  alt="..."
                />
              </div>
              <div className="footer-span mt-md-3">
                <span className="">
                  NGS is a leading provider of environmental testing and
                  compliance solutions, dedicated to helping businesses across
                  various industries meet regulatory standards.
                </span>
              </div>
            </div>
            <div className="col-12 col-md-4 px-5">
              <div className="useful-links-container">
                <h5 className="text-white">Useful Links</h5>
                <ul className="list-unstyled text-white">
                 <a href="/" className="text-white text-decoration-none"> <li>Home</li></a>
                 <a href="sectors" className="text-white text-decoration-none"> <li>Sectors</li></a>
                  <a href="service" className="text-white text-decoration-none"><li>Services</li></a>
                  <a href="project" className="text-white text-decoration-none"><li>Projects</li></a>
                   <a  href="about" className="text-white text-decoration-none"><li>About Us</li></a>
                  <a href="careers" className="text-white text-decoration-none"> <li>Careers</li></a>
                  <a href="blogs" className="text-white text-decoration-none"><li>Blogs</li></a>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-4 px-5">
              <div className="useful-links  ">
                <h5 className="text-white">Useful Links</h5>
                <ul className="list-unstyled text-white">
                  <li>
                    <i className="fas fa-map-marker-alt me-2"></i>
                    702-1st Street Thorhild, AB T0A3J0
                  </li>
                  <li>
                    <i className="fas fa-phone-alt me-2"></i>
                    +1-306-880-8664
                  </li>
                  <li>
                    <i className="fas fa-envelope me-2"></i>
                    saif@ngsgroup.com                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
