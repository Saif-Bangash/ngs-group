/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Blogs.css";
import mapcomponent from "../../component/mapcomponent/data"; // Import the object

const { blogData } = mapcomponent;

const Blogs = () => {
  return (
    <>
      <div className="container-fluid bg-blogs">
        <div className="row justify-content-center align-items-center blogs-row">
          <div className="col-12">
            <div className="Home-tag">
              <h1 className="text-white">Blogs</h1>
              <a href="https://ngsgroup.ca/contact-us/">
                <button className="Home-btn mx-4 ">
                  Get a Free Consultation
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-md-5">
        <div className="row">
          {blogData.map((blog, index) => (
            <div
              key={index}
              className="col-12 col-sm-12 col-md-4  col-lg-4 d-flex justify-content-center mb-4"
            >
              <div className="card shadow-lg border-0 blog-card p-4">
                <img
                  src={blog.image}
                  alt="Blog Image"
                  className="card-img-top"
                />
                <div className="card-body">
                  <span className="text-muted blog-date">{blog.date}</span>
                  <h5 className="card-title blog-title mt-md-3">
                    {blog.title}
                  </h5>
                  <p className="card-text">{blog.description}</p>
                  <button className="btn btn-primary">Send</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
