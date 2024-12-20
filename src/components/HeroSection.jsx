// import "./css/HeroSection.css";

// const HeroSection = () => {
//   return (
//     <section className="hero-section d-flex align-items-center">
//       <div className="container text-center">
//         <h1 className="hero-title">TerraSpace</h1>
//         <p
//           className="hero-subtitle"
//           style={{
//             position: "absolute",
//             bottom: "0",
//             left: "0",
//             marginLeft: "40px",
//             textAlign: "start",
//             color: "white",
//           }}
//         >
//           Elevate Your Space, Define Your Vision:
//           <br />
//           <span> Transformative The Architectural Solutions</span>
//         </p>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./css/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section d-flex align-items-center">
      <Container className="text-center text-white">
        <Row>
          <Col xs={12}>
            <h1 className="hero-title">TerraSpace</h1>
            <p className="hero-subtitle">
              Elevate Your Space, Define Your Vision:
              <br />
              <span>Transformative The Architectural Solutions</span>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
