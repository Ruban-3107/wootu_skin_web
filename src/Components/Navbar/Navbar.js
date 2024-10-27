"use client";  // This makes the Navbar component a Client Component
import { useEffect, useState } from 'react';  // Only keep this correct import
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import About from "../../pages/About";
import Contact from '../../pages/Contact';
import Home from '../../pages/Home';
import TreatmentPage from '../../pages/TreatmentPage';
import css from "./Navbar.css";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import logo from "../../Assets/Wootlogo.png";


const skin = [
  'Hydra Facial',
  'Chemical Peel',
  'Carbon Laser',
  'Photo Facial',
  'Glycolic Peel',
  'Nano Peel',
  'Light Peel',
  'Combination Peel',
  'Yellow Peel',
  'Salicylic Peel',
  'Glutathione Peel',
  'Upper Lip',
  'Chin',
  'Upper Arms',
  'Full hands',
  'Full legs',
  'Bikini',
  'Full Body',
  'Side Locks',
  '3 Body part LHR',
];

const slimming=[
  'Lymphatic Drainage',
'Abdomen Tucks',
'Back Tucks',
'Thigh Tucks',
'Arm Tucks',
'Hip Tucks',
'Green Coffee-Abdomen, Arms, Hip',
'Neck',
'Lipoflush',
'ULS',
'NMS',
'Cello',
'Cryo(Cool Sculpting)',
'Diet plans per month'
]


const CustomNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSubDropdown, setShowSubDropdown] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (label) => {
    console.log(label + "treatmentPage")
    navigate('/TreatmentPage',{state:{label}});
    
  };
  return (

<Navbar  expand="lg" className="">
      <Container>
        {/* Left side - Logo */}
        <Navbar.Brand href="#">
          <img
            src={logo} // Replace with your logo path
            alt="Logo"
            width="100"
            height="100"
          />
        </Navbar.Brand>

        {/* Centered Navbar items */}
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive" className="justify-content-center">
          <Nav className='nav-link'>
            {/* Home */}
            <Nav.Link href="/Home">Home</Nav.Link>

            {/* Sliming with dropdown */}
          <Nav.Link>
            <NavDropdown title="Sliming" id="sliming-dropdown">
            {slimming?.map((treatment) => (
          <NavDropdown.Item className='navbar-link' key={treatment} onClick={() => handleNavigate(treatment)}>
            {treatment}
          </NavDropdown.Item>
        ))}
            </NavDropdown>
            </Nav.Link>
            {/* Skin with dropdown */}
            <Nav.Link>
            <NavDropdown title="Skin & Hair" id="skin-dropdown">
            {skin?.map((treatment) => (
          <NavDropdown.Item key={treatment} onClick={() => handleNavigate(treatment)}>
            {treatment}
          </NavDropdown.Item>
        ))}
            </NavDropdown>
</Nav.Link>
           
            {/* Career */}
            <Nav.Link to="/">Career</Nav.Link>

            {/* About */}
            <Nav.Link href="/About">About</Nav.Link>

            {/* Contact */}
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Right side - Book Now CTA */}
        <Button variant="primary" className="ms-2 nav-cta">Book Now</Button>
        <Button variant="primary" className="ms-2 nav-cta2"><a href="tel:9500412121"><FontAwesomeIcon icon="fa-solid fa-phone" />+91 9500412121</a></Button>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;