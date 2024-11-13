"use client"; // This makes the Navbar component a Client Component
import React, { useState } from "react"; // Import React and useState
import { useNavigate } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, Button, Col, Modal, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import logo from "../../Assets/Wootlogo.png";
import { useLocation } from 'react-router-dom';
import contactImg from "../../Assets/contact.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";

const skinTreatments = [
  "Hydra Facial", "Chemical Peel", "Carbon Laser", "Photo Facial", "Glycolic Peel",
  "Nano Peel", "Light Peel", "Combination Peel", "Yellow Peel", "Salicylic Peel", "Glutathione Peel"
];

const hairTreatments = [
  "Upper Lip", "Chin", "Upper Arms", "Full hands", "Full legs", "Bikini", "Full Body", "Side Locks", "3 Body part LHR"
];

const slimming = [
  "Lymphatic Drainage", "Abdomen Tucks", "Back Tucks", "Thigh Tucks", "Arm Tucks", "Hip Tucks", "Green Coffee-Abdomen, Arms, Hip",
  "Neck", "Lipoflush", "ULS", "NMS", "Cello", "Cryo(Cool Sculpting)", "Diet plans per month"
];

const CustomNavbar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false); // Define useState inside the component

  const handleNavigate = (label) => {
    navigate("/TreatmentPage", { state: { label } });
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Navbar expand="lg" className="py-0 navbar-custom">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="Logo" width="100" height="100" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarResponsive" />
          <Navbar.Collapse id="navbarResponsive">
            <Nav className="me-auto nav-options">
              <Nav.Link href="/Home">Home</Nav.Link>
              <NavDropdown title="Slimming" id="slimming-dropdown">
                {slimming.map((treatment) => (
                  <NavDropdown.Item key={treatment} onClick={() => handleNavigate(treatment)}>
                    {treatment}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <NavDropdown title="Skin" id="skin-dropdown">
                {skinTreatments.map((treatment) => (
                  <NavDropdown.Item key={treatment} onClick={() => handleNavigate(treatment)}>
                    {treatment}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <NavDropdown title="Hair" id="hair-dropdown">
                {hairTreatments.map((treatment) => (
                  <NavDropdown.Item key={treatment} onClick={() => handleNavigate(treatment)}>
                    {treatment}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <Nav.Link href="/Career">Career</Nav.Link>
              <Nav.Link href="/About">About</Nav.Link>
              <Nav.Link href="/Contact">Contact</Nav.Link>
            </Nav>

            <div className="d-flex flex-column flex-lg-row gap-3 mt-3 mt-lg-0">
              <Button className="nav-cta w-100" onClick={handleShow}>
                Book Now
              </Button>
              <Button className="nav-cta2">
                <a href="tel:9500412121">
                  <FontAwesomeIcon icon={faPhone} />
                  +91 9500412121
                </a>
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose} centered size="xl" className="from-popup">
        <Modal.Header closeButton />
        <Modal.Body>
          <Row className="g-0 frompopup-row">
            {/* Left Side Image */}
            <Col xs={12} md={6} className="d-flex align-items-center popup-image">
              <img
                src={contactImg}
                alt="Booking"
                className="img-fluid w-100"
                style={{ maxHeight: '100%', objectFit: 'cover' }}
              />
            </Col>

            {/* Right Side iFrame */}
            <Col xs={12} md={6}>
              <iframe
                title="Book An Appointment"
                src="https://forms.zohopublic.com/wootdiet/form/BookAppointmentskinhairinfluencer/formperma/H6JquAYN72xaH27VQpIZTSmImiLYFntXopffWAzzoN4"
                width="100%"
                height="100%"
                style={{ border: 'none', background: 'transparent' }}
                allowFullScreen
              ></iframe>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CustomNavbar;
