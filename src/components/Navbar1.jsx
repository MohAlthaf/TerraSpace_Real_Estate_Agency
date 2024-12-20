import  { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-scroll";
import Logo from "../assets/terraspace.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import "./css/Navbar.css"
const Navbar1 = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="fixed-top px-4 py-4"
      style={{
        zIndex: 20,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        margin: "auto",
      }}
    >
      <Navbar
        expand="lg"
        className={`px-2 py-3 shadow-sm shadow ${
          expanded ? "rounded" : "rounded-pill"
        }`}
        style={{
          backdropFilter: "blur(20px)",
          width: "100%",
          border: "0.1px solid #fafafa",
        }}
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
      >
        <Container
          className="d-flex justify-content-between"
          style={{
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Navbar.Brand
            href="#"
            className="d-flex align-items-center gap-2"
            style={{ marginLeft: "20px" }}
          >
            <img
              src={Logo}
              alt="Logo"
              className="logo"
              style={{ width: "112px" }}
            />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="navbar-nav"
            onClick={() => setExpanded(!expanded)}
            style={{ border: "none" }}
          >
            <Icon
              icon={expanded ? "ci:close-md" : "ci:menu-alt-01"}
              width="28"
              height="28"
              style={{ color: "black" }}
            />
          </Navbar.Toggle>

          <Navbar.Collapse id="navbar-nav" className="navbar-collapse-hover">
            <Nav className="mx-auto d-flex gap-4">
              <Link
                to="about-us"
                smooth={true}
                offset={-70}
                duration={500}
                className="px-3 py-2 text-black"
                style={{ textDecoration: "none" }}
              >
                About
              </Link>
              <Link
                to="services"
                smooth={true}
                offset={-70}
                duration={500}
                className="px-3 py-2 text-black"
                style={{ textDecoration: "none" }}
              >
                Services
              </Link>
              <Link
                to="results"
                smooth={true}
                offset={-70}
                duration={500}
                className="px-3 py-2 text-black"
                style={{ textDecoration: "none" }}
              >
                Results
              </Link>
              <Link
                to="faq"
                smooth={true}
                offset={-70}
                duration={500}
                className="px-3 py-2 text-black"
                style={{ textDecoration: "none" }}
              >
                FAQ
              </Link>
            </Nav>

            <Button
              variant="primary"
              className="d-flex align-items-center rounded-pill px-2 py-2 mobile-center-btn"
              style={{
                backgroundColor: "black",
                borderColor: "black",
              }}
            >
              <p
                className="mb-0 mx-3"
                style={{ fontSize: "14px", color: "white" }}
              >
                <a
                  href="/properties"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Properties
                </a>
              </p>
              <div className="bg-white rounded-circle p-1">
                <Icon
                  icon="solar:arrow-right-linear"
                  width="24"
                  height="24"
                  style={{ color: "black" }}
                />
              </div>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar1;
