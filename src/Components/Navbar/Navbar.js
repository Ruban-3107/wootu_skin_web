"use client"; // This makes the Navbar component a Client Component
import { useEffect, useState } from "react"; // Only keep this correct import
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
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

  const handleMenuEnter = (menuType) => {
    setActiveMenu(menuType);
    setShowMegaMenu(true);
  };

  const handleMenuLeave = () => {
    setShowMegaMenu(false);
  };

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
        <Navbar.Collapse
          id="navbarResponsive"
          className="justify-content-center"
        >
          <Nav className="nav-items h-100 w-100 justify-content-around">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link
              onMouseEnter={() => handleMenuEnter("slimming")}
              onMouseLeave={handleMenuLeave}
            >
              Slimming
            </Nav.Link>
            <Nav.Link
              onMouseEnter={() => handleMenuEnter("skin")}
              onMouseLeave={handleMenuLeave}
            >
              Skin & Hair
            </Nav.Link>
            <Nav.Link to="/">Career</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
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

      {/* Mega Menu */}
      {showMegaMenu && (
        <div
          className="mega-menu"
          onMouseEnter={() => setShowMegaMenu(true)}
          onMouseLeave={handleMenuLeave}
        >
          <div className="container">
            <div className="row justify-content-center">
              {activeMenu === "slimming" && (
                <div className="col-md-10">
                  <h3 className="text-center">Slimming Treatments</h3>
                  <div className="row">
                    {slimming.map((treatment) => (
                      <div className="col-md-6" key={treatment}>
                        <div className="mega-menu-item" onClick={() => handleNavigate(treatment)}>
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
                        <div className="mega-menu-item" onClick={() => handleNavigate(treatment)}>
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
