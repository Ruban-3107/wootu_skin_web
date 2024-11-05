import React, { useEffect,useState } from 'react';
import css from './Treatments.css';
import { Container, Row, Col, Carousel, Button, Modal, } from 'react-bootstrap';
import { FaPlay } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Image from "../../Assets/image 01.png";
import { strapi_url } from '../../common/utils';
import VideoPlayer from '../VideoPlayer/Videoplayer';
const Treatments = () => {

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);


  const [hero_section_image, setHero_image] = useState('');
  const location = useLocation();
  const { label } = location?.state || {}
  const [data,setData] = useState();
  console.log({label});


  const [benefits_image, setBenefits_image] = useState('');
  const [before_after_carousel, setBefore_after_carousel] = useState('');

  const videoSources = [
    "https://youtube.com/shorts/DjYasFr-iz4?si=dwIeidq3SdeXuyls",  // Video 1
    "https://youtu.be/9fDKsFrCb4w?si=qnZHw43dH9ofVYtb",    // Video 2
    "https://www.youtube.com/watch?v=9fDKsFrCb4w", // Video 3
    "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4"  // Video 4
  ];

  
  const condition =(label)=>{
    switch (label){
    case 'Hydra Facial':
      return '/api/hydra-facials';

      case 'Carbon Laser':
        return '/api/carbon-lasers';
      default:
      return '/api/hydra-facials';
    }
  }

  const fetchServices = async () => {
    try {
      const response = await axios.get(`${strapi_url}${condition(label)}?populate=*`);
      setData(response.data.data);
      console.log("response::",response.data.data);
      setHero_image(response?.data?.data[0].hero_section_image.url);
      setBenefits_image(response?.data?.data[0].benefits_image.url);
      setBefore_after_carousel(response?.data?.data[0].before_after_carousel.url);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    
    data && (<div className="lymphatic-drainage ">
      {/* Hero Section */}
      <section className="heroSection ">
        <Container className='hero-section py-5'>
          {/* data[0].hero_section_image */}

          <Row className="align-items-center">
            <Col md={6}>
              <img src={`${strapi_url}${hero_section_image}`} alt="Hero Image" className="img-fluid" />
            </Col>
            <Col md={6}>
              <h1 className="hero-title">{data[0].hero_section_header}

              </h1>
              {/* <h4>{data[0].hero_section_text}</h4> */}
              <p className="lead2">{data[0].hero_section_text}</p>
              <Button className='hero-btn'  onClick={handleShow}><a href='#'>Book an Appointment</a></Button>
            </Col>
          </Row>
        </Container>
      </section>




      {/* Benefits Section */}
      <section className="benefits-section py-5">
        {/* data[0].benefits_image */}

        <Container>

        <h1 className='title-treatment'>
{data[0].benefits_header}
</h1>

          <Row className="align-items-center benefits_row">
            <Col md={6}>
              <img src={`${strapi_url}${benefits_image}`} alt="Benefits Image" className="img-fluid" />
            </Col>
            <Col md={6}>
              <ul className="benefits-list">
                {/* {benefitsList?.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))} */}
                {data[0].benefits_text.split(',').map((value, index) => (
    <li key={index} className='list-text'>{value}</li>
  ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    
      {/* Before/After Carousel Section */}
      <section className="before-after-carousel py-5">
        {/* data[0].before_after_section_image */}
        <Container>
        <h1 className='title-treatment'>
{data[0].before_after_section_text
}
</h1>
<Row className="align-items-center benefits_row treatment-carousel">
<Carousel interval={3000} controls={true} indicators={true} pause="hover" className="carousel-fade">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First Slide</h3>
          <p>This is the first slide description.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second Slide</h3>
          <p>This is the second slide description.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third Slide</h3>
          <p>This is the third slide description.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
          </Row>
        </Container>
      </section>

      {/* Videos Section */}
      <section className="videos-section py-5">
        <Container>
        <h1 className='title-treatment'>{data[0].video_section_text}
        </h1>
          <Row className='video-row'>
          {videoSources.map((src, index) => (
          <VideoPlayer key={index} videoSrc={src} />
        ))}
             
            {/* ))} */}
          </Row>
        </Container>
      </section>

      {/* Final CTA Button */}
      <div className="text-center my-5 d-flex align-item-center justify-content-center ">
        <div className='w-50'>
        <Button variant="primary" className='hero-btn' size="lg"  onClick={handleShow}>Book an Appointment</Button>
      </div>
      </div>

      <Modal show={show} onHide={handleClose} centered size="xl" className='from-popup'>
        <Modal.Body>
          <Row className="g-0 frompopup-row">
            {/* Left Side Image */}
            <Col xs={12} md={6} className="d-flex align-items-center popup-image">
              <img
                src="https://bit.ly/3CbPkKg"
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
                style={{ border: 'none',background:'transparent' }}
                allowFullScreen
              ></iframe>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>)
                
  );
};

export default Treatments;
