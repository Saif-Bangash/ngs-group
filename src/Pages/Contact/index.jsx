import React, { useCallback, useState } from "react";
import "./contact.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const containerStyle = {
  width: "100%",
  height: "400px",
};

// Set the initial center of the map
const center = {
  lat: 37.7749, // Example: San Francisco latitude
  lng: -122.4194, // Example: San Francisco longitude
};

const Contact = () => {
  const [map, setMap] = useState(null);

  // OnLoad callback when the map is loaded
  const onLoad = useCallback((mapInstance) => {
    setMap(mapInstance);
  }, []);

  // OnUnmount callback when the map is unmounted
  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);
  return (
    <>
      <div className="container-fluid bg-contact">
        <div className="row justify-content-center align-items-center contact-row">
          <div className="col-12">
            <div className="Home-tag">
              <h1 className="text-white ">Contact Info</h1>
              <button className="Blogs-btn mx-md-5">
                Get a Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-6   p-md-5 contact-bg ">
            <div>
              <h1 className="display-4 font-weight-bold contact-tag">
                Keep in Touch With Us.
              </h1>
              <p className="lead text-muted contact-paragraph">
                We’re here to answer your questions and provide the support you
                need. Reach out to us anytime, and let’s work together to
                achieve your goals.
              </p>
              <hr className="custom-line" />
            </div>

            {/* Contact Form */}
            <form>
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 mb-3 ">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    aria-label="Name"
                  />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                    aria-label="Phone"
                  />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    aria-label="Subject"
                  />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    aria-label="Email"
                    id="inputEmail4"
                  />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 mb-3">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 text-center">
                  <button
                    type="submit"
                    className="btn btn-primary submit-button px-5 py-2"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-12 col-md-6">
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              {" "}
              {/* Add your Google Maps API key here */}
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
              >
                {/* Example: Add a Marker to the map */}
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>

        <section className=" my-5">
          <div className="row py-5 justify-content-center">
            {/* Address Section */}
            <div className="col-12 col-md-4 col-lg-4 mb-4 mb-md-0">
              <div
                className="card shadow-lg border-0 rounded   justify-content-center text-center"
                style={{ height: "40vh" }}
              >
                <div className="icon-container mb-3">
                  <FaLocationDot size={40} color="#f16704" />
                </div>
                <h2 className="h5 font-weight-bold   mb-3">Our Address</h2>
                <p className="text-muted  ">
                  02-1st Street Thorhild, AB T0A3J0
                </p>
              </div>
            </div>

            {/* Phone Section */}
            <div className="col-12 col-md-4 col-lg-4 mb-4 mb-md-0">
              <div
                className="card shadow-lg border-0 rounded   justify-content-center text-center"
                style={{ height: "40vh" }}
              >
                <div className="icon-container mb-3">
                  <FaPhoneAlt size={40} color="#f16704" />
                </div>
                <h2 className="h5 font-weight-bold   mb-3">Phone Number</h2>
                <p className="text-muted">+1-306-880-8664</p>
              </div>
            </div>

            {/* Email Section */}
            <div className="col-12 col-md-4 col-lg-4">
              <div
                className="card shadow-lg border-0 rounded   justify-content-center text-center"
                style={{ height: "40vh" }}
              >
                <div className="icon-container mb-3">
                  <MdEmail size={40} color="#f16704" />
                </div>
                <h2 className="h5 font-weight-bold   mb-3">Email Address</h2>
                <p className="text-muted">Ali.h@ngsgroup.ca</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
