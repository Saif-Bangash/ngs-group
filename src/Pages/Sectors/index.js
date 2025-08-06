// src/components/Sectors/index.js
 
import React from 'react';
import SectorsHeader from './SectorsHeader';
import ExpertSolutions from './ExpertSolutions';
 import SectorsSection from './SectorsSection';
import "./Sectors.css"; 

const Sectors = () => {
  return (
    <>
         <SectorsHeader />
         <ExpertSolutions />
          <SectorsSection />
    </>
  );
}

export default Sectors;

  












// import React from "react";
// import "./Sectors.css";

// const Sectors = () => {
//   return (
//     <>
//       <div className="container-fluid sectors-background-image">
//         <div className="row">
//           <div className="col-12">
//             <div className="Sectors-element">
//               <h1 className="Sectors-tag">Sectors We Serve</h1>
//               <button className="Sectors-btn mx-5">Get a Free Consultation</button>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Expert Solutions Across section */}
//       <div className="background-Expert">
//         <div className="container  Expert-Container">
//           <div className="row">
//             <div className="col-12 col-sm-12 col-md-8">
//               <div className="Expert-title">
//                 <h6 className="px-md-5">Expert Solutions Across Diverse Industries</h6>
//               </div>
//               <div className="Expert-text">
//                 <p className="Paragraph  px-md-5">
//                   NGS is proud to offer our expertise across a wide range of
//                   industries. Our tailored Geotechnical, Environmental and
//                   Compliance Solutions are designed to meet the unique
//                   challenges of each sector, ensuring that every project adheres
//                   to the highest standards. From oil and gas to residential
//                   developments, we bring precision, reliability, and
//                   industry-specific knowledge to every endeavor. Explore the
//                   diverse sectors we serve and discover how our services can
//                   benefit your project.
//                 </p>
//               </div>
//               <button className="contact-btn mx-md-5 mt-md-2">Contact us</button>
//             </div>
//             <div className="col-12 col-sm-12 col-md-4">
//               <div className="card border-0 mt-2">
//                 <img
//                   src="https://ngsgroup.ca/wp-content/uploads/2024/08/pollution-industry-exterior-daylight.png"
//                   alt="..."
//                   className="Expert-img pt-0  w-sm-50 w-md-100 w-lg-100"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Expert Solutions  cards section */}
//       <div className="background-card-img ">
//         <div className="container mt-5">
//           <div className="row">
//             <div className="col-12 mt-5 mt-md-4">
//               <div className="Sectors-title d-flex justify-content-center">
//                 <h1>Sectors We Work In</h1>
//               </div>
//               <div className="text-white text-center Sectors-text">
//                 <span>
//                   At NGS, our Geotechnical, Environmental and Compliance
//                   Solutions services span a diverse range of sectors. Our
//                   expertise ensures that businesses across various industries
//                   meet regulatory standards and maintain high levels of
//                   environmental responsibility. Here are the key sectors we
//                   serve:
//                 </span>
//               </div>
//             </div>
//           </div>
//           <section>
//   <div className="row mt-5">
//     <div className="col-12 col-md-4 mb-4">
//       <div className="card Commercial-card p-4">
//         <div>
//           <img
//             src="https://ngsgroup.ca/wp-content/uploads/2024/08/Untitled-2024-08-21T173625.260.png"
//             alt="..."
//             className="img-fluid"
//           />
//         </div>
//         <div className="card-body Commercial-body">
//           <div className="card-title Commercial-title">
//             <h3 className="font-weight-bold">Oil & Gas</h3>
//           </div>
//           <div className="card-text Commercial-text">
//             <p className="text-muted">
//               Providing comprehensive testing and compliance solutions tailored to the complexities of the oil and gas industry.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="col-12 col-md-4 mb-4">
//       <div className="card Commercial-card p-4">
//         <div>
//           <img
//             src="https://ngsgroup.ca/wp-content/uploads/2024/08/Untitled-2024-08-21T173746.418.png"
//             alt="..."
//             className="img-fluid"
//           />
//         </div>
//         <div className="card-body Commercial-body">
//           <div className="card-title Commercial-title">
//             <h3 className="font-weight-bold">Commercial</h3>
//           </div>
//           <div className="card-text Commercial-text">
//             <p className="text-muted">
//               Offering reliable environmental testing services for commercial properties and developments.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="col-12 col-md-4 mb-4">
//       <div className="card Commercial-card p-4">
//         <div>
//           <img
//             src="https://ngsgroup.ca/wp-content/uploads/2024/08/Untitled-2024-08-21T173952.995.png"
//             alt="..."
//             className="img-fluid"
//           />
//         </div>
//         <div className="card-body Commercial-body">
//           <div className="card-title Commercial-title">
//             <h3 className="font-weight-bold">Government</h3>
//           </div>
//           <div className="card-text Commercial-text">
//             <p className="text-muted">
//               Supporting government agencies with stringent environmental compliance and testing requirements.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="col-12 col-md-4 mb-4">
//       <div className="card Commercial-card p-4">
//         <div>
//           <img
//             src="https://ngsgroup.ca/wp-content/uploads/2024/08/Untitled-2024-08-21T173849.558.png"
//             alt="..."
//             className="img-fluid"
//           />
//         </div>
//         <div className="card-body Commercial-body">
//           <div className="card-title Commercial-title">
//             <h3 className="font-weight-bold">Power</h3>
//           </div>
//           <div className="card-text Commercial-text">
//             <p className="text-muted">
//               Ensuring environmental standards are met in the power generation and distribution sector.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="col-12 col-md-4 mb-4">
//       <div className="card Commercial-card p-4">
//         <div>
//           <img
//             src="https://ngsgroup.ca/wp-content/uploads/2024/08/Untitled-2024-08-21T173907.595.png"
//             alt="..."
//             className="img-fluid"
//           />
//         </div>
//         <div className="card-body Commercial-body">
//           <div className="card-title Commercial-title">
//             <h3 className="font-weight-bold">Residential</h3>
//           </div>
//           <div className="card-text Commercial-text">
//             <p className="text-muted">
//               Delivering tailored solutions for residential projects, from single-family homes to large-scale developments.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="col-12 col-md-4 mb-4">
//       <div className="card Commercial-card p-4">
//         <div>
//           <img
//             src="https://ngsgroup.ca/wp-content/uploads/2024/08/Untitled-2024-08-21T173920.540.png"
//             alt="..."
//             className="img-fluid"
//           />
//         </div>
//         <div className="card-body Commercial-body">
//           <div className="card-title Commercial-title">
//             <h3 className="font-weight-bold">Mining</h3>
//           </div>
//           <div className="card-text Commercial-text">
//             <p className="text-muted">
//               Addressing the unique environmental challenges in the mining industry with specialized testing and analysis.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

//         </div>
//       </div>
//     </>
//   );
// };

// export default Sectors;
