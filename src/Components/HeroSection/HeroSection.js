import React, { useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FadeUpOnScroll from '../FadeUp/FadeUpOnScroll';
import 'animate.css/animate.min.css';
import { Col, Modal,Row } from 'react-bootstrap';
import contactImg from "../../Assets/contact.png";
import HeroImg from "../../Assets/hero-img2.png";

const HeroSection = (data) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
(data && <FadeUpOnScroll>
    <section   className="heroSection d-flex align-items-center">

      <div className="container ">
        <div className="row align-items-center hero-row">
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 hero-content">
            <div className="empty-space"></div>
             <h1 className="hero-title">{data.data.data.hero_text_1}</h1>
            <p className="lead3">{data.data.data.hero_text_2}</p>
           {<button className='hero-btn' onClick={handleShow}>Book an Appointment</button> }
          </div>

          {/* Right Side - Image */}
          <div className="col-lg-6 col-md-12 hero-image-section">
  {data?.data?.data?.hero_image?.url ? (
    <img
      src={`${data.data.data.hero_image.url}`} // URL for the image
      alt="Hero"
      className="img-fluid hero-image" // Bootstrap class for responsive images
      width={400}
      height={300}
    />
  ) : (
    <img
      src={HeroImg} // Local path for fallback image
      alt="Hero"
      className="img-fluid hero-image" // Bootstrap class for responsive images
      width={400}
      height={300}
    />
  )}
</div>

        </div>
      </div>

      <Modal show={show} onHide={handleClose} centered size="xl" className='from-popup'>
  <Modal.Header closeButton>
    {/* The close button will be in the top right corner */}
  </Modal.Header>
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
      <Col xs={12} md={6} className='popup-zoho-form'>
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
    </section>
    </FadeUpOnScroll>)
 

 
    
  );
};

export default HeroSection;
