import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import logo from "../../Assets/Wootlogo.png";
import './Navbar.css'; // Ensure this path is correct

const skinTreatments = [
  'Hydra Facial', 'Chemical Peel', 'Carbon Laser', 'Photo Facial', 'Glycolic Peel', 'Nano Peel', 'Light Peel',
  'Combination Peel', 'Yellow Peel', 'Salicylic Peel', 'Glutathione Peel'
];

const hairTreatments = [
  'Upper Lip', 'Chin', 'Upper Arms', 'Full Hands', 'Full Legs', 'Bikini', 'Full Body', 'Side Locks', 
  '3 Body Part LHR'
];

const slimming = [
  'Lymphatic Drainage', 'Abdomen Tucks', 'Back Tucks', 'Thigh Tucks', 'Arm Tucks', 'Hip Tucks', 
  'Green Coffee-Abdomen, Arms, Hip', 'Neck', 'Lipoflush', 'ULS', 'NMS', 'Cello', 'Cryo (Cool Sculpting)', 
  'Diet Plans per Month'
];

const CustomNavbar = () => {
  const navigate = useNavigate();

  const handleNavigate = (label) => {
    navigate('/TreatmentPage', { state: { label } });
  };

  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#">
          <img src={logo} alt="Logo" width="100" height="100" />
        </Navbar.Brand>

        {/* Toggle Button */}
        <Navbar.Toggle aria-controls="navbarResponsive" />

        {/* Collapsible Navbar */}
        <Navbar.Collapse id="navbarResponsive">
          <Nav className="mx-auto nav-items">
            <Nav.Link href="/Home" className="nav-item-custom">Home</Nav.Link>

            {/* Slimming Dropdown */}
            <NavDropdown title="Slimming" id="slimming-dropdown" className="nav-item-custom">
              {slimming.map((treatment) => (
                <NavDropdown.Item 
                  key={treatment} 
                  onClick={() => handleNavigate(treatment)}
                  className="dropdown-item-custom"
                >
                  {treatment}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            {/* Skin Dropdown */}
            <NavDropdown title="Skin" id="skin-dropdown" className="nav-item-custom">
              {skinTreatments.map((treatment) => (
                <NavDropdown.Item 
                  key={treatment} 
                  onClick={() => handleNavigate(treatment)}
                  className="dropdown-item-custom"
                >
                  {treatment}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            {/* Hair Dropdown */}
            <NavDropdown title="Hair" id="hair-dropdown" className="nav-item-custom">
              {hairTreatments.map((treatment) => (
                <NavDropdown.Item 
                  key={treatment} 
                  onClick={() => handleNavigate(treatment)}
                  className="dropdown-item-custom"
                >
                  {treatment}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            <Nav.Link href="/" className="nav-item-custom">Career</Nav.Link>
            <Nav.Link href="/About" className="nav-item-custom">About</Nav.Link>
            <Nav.Link href="/Contact" className="nav-item-custom">Contact</Nav.Link>
          </Nav>

          {/* Buttons for Mobile */}
          <div className="d-lg-none d-flex flex-column mt-3 buttons-mobile">
            <Button variant="primary" className="nav-cta mb-2">Book Now</Button>
            <Button variant="primary" className="nav-cta2">
              <a href="tel:9500412121" className="phone-link">
                <FontAwesomeIcon icon={faPhone} /> +91 9500412121
              </a>
            </Button>
          </div>
        </Navbar.Collapse>

        {/* Buttons for Larger Screens */}
        <div className="d-none d-lg-flex align-items-center buttons-desktop">
          <Button variant="primary" className="ms-2 nav-cta">Book Now</Button>
          <Button variant="primary" className="ms-2 nav-cta2">
            <a href="tel:9500412121" className="phone-link">
              <FontAwesomeIcon icon={faPhone} /> +91 9500412121
            </a>
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
