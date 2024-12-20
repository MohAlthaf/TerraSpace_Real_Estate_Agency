// import React, { useState } from "react";
// import { Icon } from "@iconify/react";
// import Img1 from "../assets/3d-rendering-wooden-house.jpg";
// import Img2 from "../assets/3d-rendering-wooden-house1.jpg";
// import Img3 from "../assets/3d-rendering-wooden-house2.jpg";
// const Services = () => {
//   const [hovered, setHovered] = useState(null);

//   const handleMouseEnter = (index) => {
//     setHovered(index);
//   };

//   const handleMouseLeave = () => {
//     setHovered(null);
//   };

//   const services = [
//     {
//       title: "Design Interior specializes in creating captivating",
//       description:
//         "Elevating Spaces with Distinctive Elegance: Interior Design Specializes in Creating Interior Masterpieces with Your Style.",
//       image: Img1,
//     },
//     {
//       title: "Property Interior",
//       description: "",
//       image: Img2,
//     },
//     {
//       title: "Building Architect",
//       description: "",
//       image: Img1,
//     },
//   ];

//   return (
//     <div className="container my-5 py-4">
//       <h4 className="mb-4">(03) Services</h4>

//       <h1 style={{ fontSize: "3.5rem", marginBottom: "50px" }}>
//         Our various agency services are <br /> provided for you
//       </h1>
//       <div className="row g-4">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className={`${
//               hovered === null
//                 ? index === 0
//                   ? "col-6"
//                   : "col-3"
//                 : hovered === index
//                 ? "col-6"
//                 : "col-3"
//             }`}
//             onMouseEnter={() => handleMouseEnter(index)}
//             onMouseLeave={handleMouseLeave}
//             style={{
//               transition: "all 0.3s ease",
//             }}
//           >
//             <div
//               className="card text-white border-0"
//               style={{
//                 backgroundImage: `url(${service.image})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 height: "500px",
//                 borderRadius: "15px",
//                 overflow: "hidden",
//                 position: "relative",
//                 backgroundColor: "rgb(84, 84, 84)",
//                 backgroundBlendMode: "overlay",
//               }}
//             >
//               <div className="card-body d-flex flex-column justify-content-end px-4">
//                 <h2>{service.title}</h2>
//                 {service.description && (
//                   <p className="small text-white">{service.description}</p>
//                 )}
//                 {/* <button
//                   className="btn btn-light btn-sm mt-2"
//                   onClick={() => alert(`Clicked on ${service.title}`)}
//                 >
//                   Detail Project <Icon icon="bi:arrow-right" className="ms-1" />
//                 </button> */}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;

import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import Img1 from "../assets/3d-rendering-wooden-house.jpg";
import Img2 from "../assets/3d-rendering-wooden-house1.jpg";
import Img3 from "../assets/3d-rendering-wooden-house2.jpg";
import "./css/Services.css";
const Services = () => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const services = [
    {
      title: "Design Interior specializes in creating captivating",
      description:
        "Elevating Spaces with Distinctive Elegance: Interior Design Specializes in Creating Interior Masterpieces with Your Style.",
      image: Img1,
    },
    {
      title: "Property Interior",
      description: "",
      image: Img2,
    },
    {
      title: "Building Architect",
      description: "",
      image: Img3,
    },
  ];

  return (
    <div className="container my-5 py-4" id="about-us">
      <h4 className="mb-4">(03) Services</h4>
      <h1 className="services-header">
        Our various agency services are <br /> provided for you
      </h1>
      <Row xs={1} sm={2} md={3} className="g-4">
        {services.map((service, index) => (
          <Col
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={{
              transition: "transform 0.3s ease, opacity 0.3s ease",
              transform: hovered === index ? "scale(1.01)" : "scale(1)",
              opacity: hovered === null || hovered === index ? 1 : 0.7,
            }}
          >
            <Card
              className="text-white border-0"
              style={{
                backgroundImage: `url(${service.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "500px",
                borderRadius: "15px",
                overflow: "hidden",
                position: "relative",
                backgroundColor: "rgb(84, 84, 84)",
                backgroundBlendMode: "overlay",
              }}
            >
              <Card.Body className="d-flex flex-column justify-content-end px-4">
                <h2>{service.title}</h2>
                {service.description && (
                  <p className="small text-white">{service.description}</p>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Services;
