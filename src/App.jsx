import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Sectors from "./Pages/Sectors";
import Service from "./Pages/Services";
import Project from "./Pages/Project/project";
import AboutPage from "./Pages/AboutPage";
import Careers from "./Pages/Careers";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";

import Management from "./Pages/Home/ServiceLinks/Management ";
import GeoLink from "./Pages/Home/ServiceLinks/GeoLink";
import LabTesting from "./Pages/Home/ServiceLinks/LabTesting";
import MaterialTesting from "./Pages/Home/ServiceLinks/MaterialTesting";
import QualityAssurance from "./Pages/Home/ServiceLinks/QualityAssurance";
import EcoPower from "./Pages/Home/AboutLinks-Cards/EcoPower";
import Greenfield from "./Pages/Home/AboutLinks-Cards/Greenfield ";
import Urban from "./Pages/Home/AboutLinks-Cards/Urban";
import Government from "./Pages/Home/AboutLinks-Cards/Government";
import OilRig from "./Pages/Home/AboutLinks-Cards/OilRig";
import Mining from "./Pages/Home/AboutLinks-Cards/Mining";
import JobLinks from "./Pages/Careers/JobLinks";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />
        {/* Home cards links */}
        <Route path="geolinks" element={<GeoLink />} />
        <Route path="management" element={<Management />} />
        <Route path="lab" element={<LabTesting />} />
        <Route path="servmaterialice4" element={<MaterialTesting />} />
        <Route path="qualityassurance" element={<QualityAssurance />} />

        {/* Abouts links cards routing */}
        <Route path="ecopower"   element={<EcoPower />} />
        <Route path="greenfield" element={<Greenfield />} />
        <Route path="urban"      element={<Urban />} />
        <Route path="government" element={<Government />} />
        <Route path="oilrig"     element={<OilRig />} />
        <Route path="mining"     element={<Mining />} />

         {/* job links routing */}
         <Route path="joblinks"  element={<JobLinks />}/>

        <Route path="sectors" element={<Sectors />} />
        <Route path="service" element={<Service />} />
        <Route path="project" element={<Project />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="careers" element={<Careers />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
