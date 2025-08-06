import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand ps-5" href="/">
            <img
              src=" https://ngsgroup.ca/wp-content/uploads/2024/08/Frame-7.png"
              className=" navbar-logo-img h-auto"
              alt="Logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse me-4"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto  mb-2 mb-lg-0 gap-4 me-5">
              <li className="nav-item">
                <Link to={'/'} className="nav-link " aria-current="page" >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'sectors'} className="nav-link">
                  Sectors
                </Link>
              </li>
              <li className="nav-item">
              <Link to={'service'} className="nav-link">
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'project'} className="nav-link" >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'about'} className="nav-link" href="/">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'careers'} className="nav-link" href="/">
                  Careers
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'blogs'} className="nav-link" href="/">
                  Blogs
                </Link>
              </li>
            </ul>
            <div className="nav-item">
              <Link to={'contact'} className="nav-link">
                <button className="Header-button"> Contact</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
