"use client"; // This makes the Navbar component a Client Component
import {  useState } from "react"; // Only keep this correct import
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Career from  "../../pages/Career"
import Home from "../../pages/Home";
import TreatmentPage from "../../pages/TreatmentPage";
import css from "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import logo from "../../Assets/Wootlogo.png";

const skin = [
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
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const navigate = useNavigate();

  const handleMenuHover = (menuType) => {
    setShowMegaMenu(true);
    setActiveMenu(menuType);
  };

  const handleNavigate = (label) => {
    console.log(label + "treatmentPage");
    navigate("/TreatmentPage", { state: { label } });
  };
  return (
    <Navbar expand="xxl" className="py-0">
      <Container > 
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
        <Navbar.Collapse
          id="navbarResponsive"
          className="justify-content-center"
          style={{height:'110px'}}
        >
          <Nav className="nav-items h-100">
            {/* Home */}
            <Nav.Link href="/Home">Home</Nav.Link>
            {/* Sliming with dropdown */}
            <Nav.Link
              onMouseEnter={() => handleMenuHover("slimming")}
              onMouseLeave={() => setShowMegaMenu(false)}
            >
              Slimming
            </Nav.Link>

            <Nav.Link
              onMouseEnter={() => handleMenuHover("skin")}
              onMouseLeave={() => setShowMegaMenu(false)}
            >
              Skin & Hare
            </Nav.Link>
            {/* Career */}
            <Nav.Link  href="/Career">Career</Nav.Link>

            {/* About */}
            <Nav.Link href="/About">About</Nav.Link>

            {/* Contact */}
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Right side - Book Now CTA */}
        <div className="d-flex flex-lg-row flex-column gap-3">
          <Button variant="primary" className="nav-cta">
            Book Now
          </Button>
          <Button variant="primary" className="nav-cta2">
            <a
              href="tel:9500412121"
              className="text-white text-decoration-none call-icon"
            >
             <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20"><path fill="white" d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12Zm0-22C6.486,2,2,6.486,2,12s4.486,10,10,10,10-4.486,10-10S17.514,2,12,2Zm3.288,11.115l-1.775,1.775c-2.027-.773-3.521-2.208-4.403-4.403l1.775-1.775-2.712-2.712-1.378,1.378c-.54,.539-.795,1.249-.795,1.957,0,3.914,5.032,8.666,8.666,8.666,.708,0,1.418-.256,1.957-.795l1.378-1.378-2.712-2.712Z"/></svg>

              +91 9500412121
            </a>
          </Button>
        </div>
      </Container>
      {showMegaMenu && (
        <div
          className="mega-menu"
          onMouseEnter={() => setShowMegaMenu(true)}
          onMouseLeave={() => setShowMegaMenu(false)}
        >
          <div className="container">
            <div className="row justify-content-center">
              {activeMenu === "slimming" && (
                <div className="col-md-10">
                  <h3 className="text-center">Slimming Treatments</h3>
                  <div className="row">
                    {slimming.map((treatment) => (
                      <div className="col-md-6" key={treatment}>
                        <div
                          className="mega-menu-item"
                          onClick={() => handleNavigate(treatment)}
                        >
                          {treatment}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {activeMenu === "skin" && (
                <div className="col-md-10">
                  <h3 className="text-center">Skin & Hair Treatments</h3>
                  <div className="row">
                    {skin.map((treatment) => (
                      <div className="col-md-6" key={treatment}>
                        <div
                          className="mega-menu-item"
                          onClick={() => handleNavigate(treatment)}
                        >
                          {treatment}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </Navbar>
  );
};

export default CustomNavbar;