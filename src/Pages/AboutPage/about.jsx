import React from 'react';
import AboutSection from '../Home/AboutSection';

const About = () => {
  return (
    <>
    <div className='container-fluid bg-img'>
       <div className='row justify-content-center align-items-center about-row'>
        <div className='col-12'>
          <div className='Home-tag'>
            <h1>
            Who We Are</h1>
            <a href="https://ngsgroup.ca/contact-us/">
                <button className="Home-btn mx-4 ">
                  Get a Free Consultation
                </button>
              </a>
          </div>
        </div>
       </div>
    </div>

    <div>
      <AboutSection abouts={AboutSection} />
    </div>
    
    </>
  );
}

export default About;
