import React from 'react';
import logo from "../../Assets/Wootlogo.png";
import css from "./Footer.module.css";
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer text-link pt-5 pb-3">
      <Container className='footer-container'>
        {/* Footer Top Section */}
        <Row className="mb-4">
          <Col md={3} className="d-flex align-items-center opening-timing">
            <img src={logo} alt="Logo" className="footer-logo" width={100} />
          </Col>
          <Col md={3} className='opening-timing'>
            <h6 className="fw-bold">Open</h6>
            <p>Monday - Saturday</p>
          </Col>
          <Col md={3} className='opening-timing'>
            <h6 className="fw-bold">Timing</h6>
            <p>10:00 AM to 10:00 PM</p>
          </Col>
          <Col md={3} className='opening-timing'>
            <h6 className="fw-bold">Follow On</h6>
            <div>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-dark me-3">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-dark">
                <FaInstagram />
              </a>
            </div>
          </Col>
        </Row>

        {/* Footer Bottom Section */}
        <Row>
          <Col md={3} className='opening-timing'>
            <h6 className="fw-bold">Explore</h6>
            <ul className="list-unstyled linespace">
              <li><a href="/home" className="text-link">Home</a></li>
              <li><a href="/about" className="text-link">Slimming</a></li>
              <li><a href="/services" className="text-link">Skin</a></li>
              <li><a href="/contact" className="text-link">Hair</a></li>
              <li><a href="/home" className="text-link">Career</a></li>
              <li><a href="/about" className="text-link">About</a></li>
              <li><a href="/services" className="text-link">contact</a></li>
            </ul>
          </Col>

          <Col md={3} className='opening-timing'>
            <h6 className="fw-bold">Slimming</h6>
            <ul className="list-unstyled linespace opening-timing">
              <li><a href="/slimming/treatment1" className="text-link">Lymphatic Drainage</a></li>
              <li><a href="/slimming/treatment2" className="text-link">Abdomen Tucks</a></li>
              <li><a href="/slimming/treatment3" className="text-link">Back Tucks</a></li>
              <li><a href="/slimming/treatment1" className="text-link">Thigh Tucks</a></li>
              <li><a href="/slimming/treatment2" className="text-link">Arm Tucks</a></li>
              <li><a href="/slimming/treatment3" className="text-link">Hip Tucks</a></li>

              <li><a href="/slimming/treatment1" className="text-link">Green Coffee-Abdomen, Arms, Hip</a></li>
              <li><a href="/slimming/treatment2" className="text-link">Neck</a></li>
              <li><a href="/slimming/treatment3" className="text-link">Lipoflush</a></li>
              <li><a href="/slimming/treatment1" className="text-link">ULS</a></li>
              <li><a href="/slimming/treatment2" className="text-link">NMS</a></li>
              <li><a href="/slimming/treatment3" className="text-link">Cello</a></li>

              <li><a href="/slimming/treatment2" className="text-link">Cryo(Cool Sculpting)</a></li>
              <li><a href="/slimming/treatment3" className="text-link">Diet plans per month</a></li>
            </ul>
          </Col>

          <Col md={3} className='opening-timing'>
            <h6 className="fw-bold">Skin</h6>
            <ul className="list-unstyled linespace opening-timing">
              <li><a href="/skin/treatment1" className="text-link">Hydra Facial</a></li>
              <li><a href="/skin/treatment2" className="text-link">Chemical Peel</a></li>
              <li><a href="/skin/treatment3" className="text-link">Carbon Laser</a></li>

              <li><a href="/skin/treatment1" className="text-link">Photo Facial</a></li>
              <li><a href="/skin/treatment2" className="text-link">Glycolic Peel</a></li>
              <li><a href="/skin/treatment3" className="text-link">Nano Peel</a></li>

              <li><a href="/skin/treatment1" className="text-link">Light Peel</a></li>
              <li><a href="/skin/treatment2" className="text-link">Combination Peel</a></li>
              <li><a href="/skin/treatment3" className="text-link">Yellow Peel</a></li>

              
              <li><a href="/skin/treatment1" className="text-link">Salicylic Peel</a></li>
              <li><a href="/skin/treatment2" className="text-link">Glutathione Peel</a></li>
              <li><a href="/skin/treatment3" className="text-link">Upper Lip</a></li>

                            
              <li><a href="/skin/treatment1" className="text-link">Chin</a></li>
              <li><a href="/skin/treatment2" className="text-link">Upper Arms</a></li>
              <li><a href="/skin/treatment3" className="text-link">Full hands</a></li>

              
                            
              <li><a href="/skin/treatment1" className="text-link">Full legs</a></li>
              <li><a href="/skin/treatment2" className="text-link">Bikini</a></li>
              <li><a href="/skin/treatment3" className="text-link">Full Body</a></li>

              <li><a href="/skin/treatment2" className="text-link">Side Locks</a></li>
              <li><a href="/skin/treatment3" className="text-link">3 Body part LHR</a></li>
            </ul>
          </Col>

          <Col md={3} className='opening-timing'>
            <h6 className="fw-bold">Our Locations</h6>
            <ul className="list-unstyled">
              <li className='address-list'>
                <FaMapMarkerAlt /> Wootu ® Nutrition , 61, 2nd Floor, A Block, 2nd Ave, Above GKB Opticals near Roundtana & Metro StationAnnanagar East, Chennai – 600102
                
              </li>
              <li className='address-list'>
                <FaMapMarkerAlt /> Wootu ® Nutrition , 4/210, IT Highway,OMR, Kandanchavadi,Chennai – 600096
                
              </li>

              <li className='address-list'>
                <FaMapMarkerAlt /> 38/1, Mount poonamallee road, Porur,Chennai – 600116
              </li>

              <li className='address-list'>
                <FaMapMarkerAlt /> Wootu ® Nutrition , 431,Velachery Road, Tambaram East,Chennai – 600059
              </li>

              <li className='address-list'>
                <FaMapMarkerAlt /> Wootu Nutrition,114,7th Floor,B-Block ,Mena Kampala Arcade ,Sir Thyagaraya Road,d,Chennai 600017
              </li>

              <li className='opening-timing'>
              
                <FaEnvelope /> &nbsp; enquiry@wootu.in
                <br />
                <br />
                <FaPhone /> &nbsp; +91 9977162789
              </li>
              {/* Repeat for additional branches */}
            </ul>
          </Col>
        </Row>
      </Container>
<hr/>
      <Container>
<div className='row d-flex align-item-center justify-content-center'>
  <div className='col-lg-6 align-item-center opening-timing'>
 <p>Copyright
2024.
All rights reserved.</p> 
  </div>
  <div className='col-lg-6 d-flex align-item-center privacy  opening-timing'>
 <p>Privacy Policy |
 Terms Of Use</p> 
  </div>


</div>


      </Container>

    </footer>
  );
};

export default Footer;
