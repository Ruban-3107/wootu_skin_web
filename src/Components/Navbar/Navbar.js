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


const CustomNavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSubDropdown, setShowSubDropdown] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (e,path) => {
    console.log(e.target.value + "treatmentPage")
    navigate(path);
    
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
              <NavDropdown.Item onClick={(e) => handleNavigate(e,'/TreatmentPage')}>Sliming 1</NavDropdown.Item>
              <NavDropdown.Item href="#action2">Sliming 2</NavDropdown.Item>
            </NavDropdown>
            </Nav.Link>
            {/* Skin with dropdown */}
            <Nav.Link>
            <NavDropdown title="Skin" id="skin-dropdown">
              <NavDropdown.Item href="/">Skin Care 1</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Skin Care 2</NavDropdown.Item>
            </NavDropdown>
</Nav.Link>
            {/* Hair with dropdown */}
            <Nav.Link>
            <NavDropdown title="Hair" id="hair-dropdown">
              <NavDropdown.Item href="#action5">Hair Treatment 1</NavDropdown.Item>
              <NavDropdown.Item href="#action6">Hair Treatment 2</NavDropdown.Item>
            </NavDropdown>
</Nav.Link>
            {/* Career */}
            <Nav.Link to="/">Career</Nav.Link>

            {/* About */}
            <Nav.Link href="/About">About</Nav.Link>

            {/* Contact */}
            <Nav.Link href="#">Contact</Nav.Link>
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