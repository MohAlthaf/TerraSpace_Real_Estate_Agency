// import React, { useState, useEffect } from "react";
// import {  Route, Routes } from "react-router-dom"; // Import Router, Route, and Routes
// import "./App.css";
// import AboutUs from "./components/AboutUs";
// import ArchitectureHero from "./components/ArchitectureHero";
// import ContactForm from "./components/ContactForm";
// import CustomForm from "./components/CustomForm";
// import ExpertiseSection from "./components/ExpertiseSection";
// import HeroSection from "./components/HeroSection";
// import Navbar from "./components/Navbar1";
// import RealEstateInfo from "./components/RealEstateInfo";
// import Services from "./components/Services";
// // import PropertiesPage from "./components/PropertiesPage"; // Import PropertiesPage
// import { Spinner } from "react-bootstrap"; // Import Bootstrap Spinner

// function App() {
//   const [loading, setLoading] = useState(true);

//   // Simulate a loading process like data fetching
//   useEffect(() => {
//     const loadData = async () => {
//       // Simulate API call or other setup tasks with setTimeout
//       setTimeout(() => {
//         setLoading(false); // Data is ready, stop loading after 3 seconds
//       }, 3000);
//     };

//     loadData();
//   }, []);

//   return (
//     <div>
//       {/* Show loading spinner while loading */}
//       {loading ? (
//         <div
//           className="d-flex justify-content-center align-items-center"
//           style={{ height: "100vh" }}
//         >
//           <Spinner animation="border" role="status">
//             <span className="visually-hidden">Loading...</span>
//           </Spinner>
//         </div>
//       ) : (
//         // Content is rendered after loading is done
//         <>
//           <Navbar />
//           <Routes> {/* Wrap your routes inside <Routes> */}
//             <Route exact path="/" element={<HeroSection />} />
//             {/* <Route path="/properties" element={<PropertiesPage />} /> */}
//             <Route path="/about-us" element={<AboutUs />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/real-estate-info" element={<RealEstateInfo />} />
//             <Route path="/expertise" element={<ExpertiseSection />} />
//             <Route path="/architecture" element={<ArchitectureHero />} />
//             {/* Add other routes here */}
//           </Routes>
//         </>
//       )}
//     </div>
//   );
// }

// export default App;
import { useState, useEffect } from "react";
import "./App.css";

import { Spinner } from "react-bootstrap";
import Home from "./Pages/Home";
import Properties from "./Pages/Properties";
import { Route,  Routes } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate a loading process like data fetching
  useEffect(() => {
    const loadData = async () => {
      // Simulate API call or other setup tasks with setTimeout
      setTimeout(() => {
        setLoading(false); // Data is ready, stop loading after 3 seconds
      }, 3000);
    };

    loadData();
  }, []);

  return (
    <div>
      {/* Show loading spinner while loading */}
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <>
         
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/properties" element={<Properties />} />
            </Routes>
          
          {/* <Home />
          <Properties /> */}
        </>
      )}
    </div>
  );
}

export default App;
