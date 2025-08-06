import React from 'react';
import "./Home.css";
import Herosection from './Herosection';   //    // Correct
import ServicesCards from './ServicesCards';
import ServiceSectors from './ServiceSectors';
import AboutSection from './AboutSection';
import AboutsCards from './AboutsCards';
import TextCards from './TextCards';
 
 
  

const Home = () => {
  return (
    <>
      <Herosection />  
      <ServicesCards /> 
      <ServiceSectors />
      <AboutSection />
      <AboutsCards />
      <TextCards />

        
    </>
  );
};

export default Home;
