import React from 'react';
import css from './Treatments.css';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import { FaPlay } from 'react-icons/fa';

const Treatments = () => {
  return (
    <div className="lymphatic-drainage">
      {/* Hero Section */}
      <section className="hero-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img src={"#"} alt="Hero Image" className="img-fluid" />
            </Col>
            <Col md={6}>
              <h1>Heading

              </h1>
              <h4>sub-heading</h4>
              <p>sub-body</p>
              <Button variant="primary">book now</Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img src={"#"} alt="Benefits Image" className="img-fluid" />
            </Col>
            <Col md={6}>
              <ul className="benefits-list">
                {/* {benefitsList?.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))} */}
                <li>HI</li>
                <li>hi2</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Before/After Carousel Section */}
      <section className="before-after-carousel py-5">
        <Container>
          <Carousel interval={3000} controls indicators>
            {/* {carouselImages.map((image, index) => ( */}
              <Carousel.Item key={""}>
                <img src={"#"} alt={`#`} className="d-block w-100" />
              </Carousel.Item>
            {/* ))} */}
          </Carousel>
        </Container>
      </section>

      {/* Videos Section */}
      <section className="videos-section py-5">
        <Container>
          <Row>
            {/* {videoUrls.map((videoUrl, index) => ( */}
              <Col key={'#'} md={3} sm={6} className="mb-4">
                <div className="video-card position-relative">
                  <video src={'#'} controls className="img-fluid w-100" />
                  <div className="play-button-overlay">
                    <FaPlay />
                  </div>
                </div>
              </Col>
            {/* ))} */}
          </Row>
        </Container>
      </section>

      {/* Final CTA Button */}
      <div className="text-center my-5">
        <Button variant="primary" size="lg">cta</Button>
      </div>
    </div>
  );
};

export default Treatments;
