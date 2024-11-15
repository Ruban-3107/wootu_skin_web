import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FadeUpOnScroll from '../FadeUp/FadeUpOnScroll';
import { strapi_url } from '../../common/utils';
import axios from 'axios';
import hydrafacialImage from '../../Assets/Hydrafacial.jpg';
import microNeedlingImage from '../../Assets/Micro Needling.jpg';
import botoxImage from '../../Assets/Botox.jpg';
import contactImg from "../../Assets/contact.png";

const localImages = [
  hydrafacialImage,
  microNeedlingImage,
  botoxImage
];

const CustomCarousel = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [carousels, setCarousels] = useState([]);
  const [processedCarousels, setProcessedCarousels] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${strapi_url}/api/carousels?populate=*`);
      setCarousels(response.data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getImageSrc = async (url, fallback) => {
    try {
      if (!url) return fallback;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Image not found');
      }
      return url;
    } catch {
      return fallback;
    }
  };
  const processImages = async () => {
    const promises = carousels.map(async (slide, index) => {
      const imageUrl = slide.image && slide.image.length > 0 ? `${strapi_url}${slide.image[0].url}` : null;
      const imageSrc = await getImageSrc(imageUrl, localImages[index]);
      return { ...slide, imageSrc };
    });

    const results = await Promise.all(promises);
    setProcessedCarousels(results);
  };

  useEffect(() => {
    if (carousels.length > 0) {
      processImages();
    }
  }, [carousels]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 6000, // Change this to control the transition speed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-play
    autoplaySpeed: 10, // Set the speed of auto-play in milliseconds (3 seconds)
  };

  return (
    (processedCarousels.length > 0 &&
      <FadeUpOnScroll>
        <div className="carousel-wrapper w-100 gx-5 mt-5 py-5">
          <div className="container w-100">
            <Slider className='car-slider' {...settings}>
              {processedCarousels.map((slide) => (
                <div className="carousel-slide w-100" key={slide.id}>
                  <div className="carousel-content row">
                    <div className="carousel-image col-lg-6">
                      <img src={slide.imageSrc} alt={slide.heading_text} />
                    </div>
                    <div className="carousel-text col-lg-6">
                      <h2 className="carousel-title">{slide.heading_text}</h2>
                      <p className="carousel-body-text">{slide.text}</p>
                      <Button className='hero-btn' onClick={handleShow}>Book an Appointment</Button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <Modal show={show} onHide={handleClose} centered size="xl" className='from-popup'>
          <Modal.Body>
            <Row className="g-0 frompopup-row">
              <Col xs={12} md={6} className="d-flex align-items-center popup-image">
                <img
                  src={contactImg}
                  alt="Booking"
                  className="img-fluid w-100"
                  style={{ maxHeight: '100%', objectFit: 'cover' }}
                />
              </Col>
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
      </FadeUpOnScroll>)
  );
};

export default CustomCarousel;
