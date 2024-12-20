import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import backgroundImage from "../assets/gMMHFV1AXTrV1a2iOpMnnm56MZc.avif";

const ArchitectureHero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "10px 0",
      }}
    >
      <div className="mx-2">
        {/* Hero Section */}
        <div className="text-center text-white">
          <h1 style={{ fontSize: "3.5rem", marginBottom: "50px" }}>
            Do You Have An Idea About ,<br /> Architecture?
          </h1>
          <div className="d-flex justify-content-center gap-3">
            <Button variant="light" className="px-4 py-2">
              Let’s Talk
            </Button>
            <Button
              variant="outline-light"
              className="px-4 py-2"
              style={{ border: "2px solid white" }}
            >
              Hire Us
            </Button>
          </div>
        </div>

        {/* Footer Section */}
        <div
          className="bg-white text-dark mt-5 p-4 rounded-4 shadow"
          style={{ marginTop: "150px" }}
        >
          <Row>
            <Col md={3}>
              <h4>Arcspace</h4>
              <p>
                Soedirman street No. 123, Kartasura
                <br />
                New City, Central Java 12345
                <br />
                Indonesia
              </p>
              <div className="d-flex gap-2">
                <i className="bi bi-instagram"></i>
                <i className="bi bi-linkedin"></i>
                <i className="bi bi-facebook"></i>
              </div>
            </Col>
            <Col md={2}>
              <h5>Services</h5>
              <ul className="list-unstyled">
                <li>Architecture</li>
                <li>Interior</li>
                <li>Property</li>
              </ul>
            </Col>
            <Col md={2}>
              <h5>Pages</h5>
              <ul className="list-unstyled">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </Col>
            <Col md={2}>
              <h5>Support</h5>
              <ul className="list-unstyled">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Term of Use</li>
                <li>Privacy</li>
              </ul>
            </Col>
            <Col md={3}>
              <h5>Social Media</h5>
              <ul className="list-unstyled">
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
                <li>LinkedIn</li>
              </ul>
            </Col>
          </Row>
          <hr />
          <p className="text-center mb-0">
            © 2024 Arcspace. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureHero;
