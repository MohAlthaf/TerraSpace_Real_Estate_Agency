import { Container, Row, Col, Button } from "react-bootstrap";
import "./css/aboutUs.css";
const AboutUs = () => {
  return (
    <Container className="text-center" style={{ paddingTop: "60px" }}>
      <Row className="justify-content-start text-start">
        <h4 className="mb-4">(02) About Us</h4>
        <Col md={6}>
          <h1 className="aboutUs-header">
            Craft Your Spaces: <br /> Work With Terraspace <br /> Architechte
            Mastery
          </h1>
        </Col>
        <Col md={6}>
          {" "}
          <div className="aboutUs-text">
            <h5
              className="mt-4 "
              style={{ lineHeight: " 1.6", fontSize: "normal" }}
            >
              Welcome to the realm where design meets innovation. We transcend
              the ordinary, reshaping environments to the harmonize with your
              vision and redefine the way you experience architecture.
            </h5>
            <Button
              variant="dark"
              className="mt-3 rounded-pill px-4 py-2 "
              style={{ fontSize: "18px" }}
            >
              See More
            </Button>
          </div>
        </Col>
      </Row>

      <Row
        className="row text-start  justify-content-between "
        style={{ marginTop: "120px", marginBottom: "120px" }}
      >
        <div
          md={1}
          className="col mx-1 p-3 mb-2"
          style={{ backgroundColor: "#fafafa", borderRadius: "20px" }}
        >
          <h1 style={{ fontSize: "60px" }}>$920M+</h1>
          <p className="mt-4 mb-2" style={{ fontSize: "18px" }}>
            <span style={{ fontWeight: "bold" }}>Total revenue</span> we get
            from various projects or clients that we complete
          </p>
        </div>
        <div
          md={1}
          className="col mx-1 p-3 mb-2"
          style={{ backgroundColor: "#fafafa", borderRadius: "20px" }}
        >
          <h1 style={{ fontSize: "60px" }}>350+</h1>
          <p className="mt-4 mb-2" style={{ fontSize: "18px" }}>
            <span style={{ fontWeight: "bold" }}> Total clients</span> or
            companies who entrust their architectural ideas to us
          </p>
        </div>
        <div
          md={1}
          className="col mx-1 p-3 "
          style={{ backgroundColor: "#fafafa", borderRadius: "20px" }}
        >
          <h1 style={{ fontSize: "60px" }}>300+</h1>
          <p className="mt-4 mb-2" style={{ fontSize: "18px" }}>
            <span style={{ fontWeight: "bold" }}> Total testimonials </span>they
            provide after experiencing our services
          </p>
        </div>
      </Row>
    </Container>
  );
};

export default AboutUs;
