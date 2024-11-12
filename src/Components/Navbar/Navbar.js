"use client"; // This makes the Navbar component a Client Component
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";
import TreatmentPage from "../../pages/TreatmentPage";
import css from "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import logo from "../../Assets/Wootlogo.png";

const skinTreatments = [
  "Hydra Facial",
  "Chemical Peel",
  "Carbon Laser",
  "Photo Facial",
  "Glycolic Peel",
  "Nano Peel",
  "Light Peel",
  "Combination Peel",
  "Yellow Peel",
  "Salicylic Peel",
  "Glutathione Peel",
];

const hairTreatments = [
  "Upper Lip",
  "Chin",
  "Upper Arms",
  "Full hands",
  "Full legs",
  "Bikini",
  "Full Body",
  "Side Locks",
  "3 Body part LHR",
];

const slimming = [
  "Lymphatic Drainage",
  "Abdomen Tucks",
  "Back Tucks",
  "Thigh Tucks",
  "Arm Tucks",
  "Hip Tucks",
  "Green Coffee-Abdomen, Arms, Hip",
  "Neck",
  "Lipoflush",
  "ULS",
  "NMS",
  "Cello",
  "Cryo(Cool Sculpting)",
  "Diet plans per month",
];

const CustomNavbar = () => {
  const navigate = useNavigate();

  const handleNavigate = (label) => {
    navigate("/TreatmentPage", { state: { label } });
  };

  return (
    <Navbar expand="lg" className="py-0">
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="Logo" width="100" height="100" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive" className="justify-content-center">
          <Nav className="nav-items h-100 w-100 justify-content-around">
            <Nav.Link href="/Home" className="nav-link">Home</Nav.Link>
            <NavDropdown title="Slimming" id="slimming-dropdown"  className="nav-link">
              {slimming.map((treatment) => (
                <NavDropdown.Item key={treatment} onClick={() => handleNavigate(treatment)}>
                  {treatment}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <NavDropdown title="Skin" id="skin-dropdown"  className="nav-link">
              {skinTreatments.map((treatment) => (
                <NavDropdown.Item key={treatment} onClick={() => handleNavigate(treatment)}>
                  {treatment}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <NavDropdown title="Hair" id="hair-dropdown"  className="nav-link">
              {hairTreatments.map((treatment) => (
                <NavDropdown.Item key={treatment} onClick={() => handleNavigate(treatment)}>
                  {treatment}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link href="/Career"  className="nav-link">Career</Nav.Link>
            <Nav.Link href="/About"  className="nav-link">About</Nav.Link>
            <Nav.Link href="/Contact"  className="nav-link">Contact</Nav.Link>
          </Nav>

          <div className="d-flex flex-lg-row flex-column gap-3 mt-2 mt-lg-0">
            <Button variant="primary" className="nav-cta">
              Book Now
            </Button>
            <Button variant="primary" className="nav-cta2">
              <a href="tel:9500412121" className="text-white text-decoration-none">
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                +91 9500412121
              </a>
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
