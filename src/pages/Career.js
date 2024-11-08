import React from 'react';
import { Container, Row, Col, Form, Button,Card } from 'react-bootstrap';
import './Career.css';
import css from "../App.css";
import CareerHero from "../Assets/career-hero.jpg";

const Career = () => {
  const stages = [
    { title: "Stage 1", description: "Description of Stage 1" },
    { title: "Stage 2", description: "Description of Stage 2" },
    { title: "Stage 3", description: "Description of Stage 3" },
    { title: "Stage 4", description: "Description of Stage 4" },
    { title: "Stage 5", description: "Description of Stage 5" },
    { title: "Stage 6", description: "Description of Stage 6" },
    { title: "Final Stage", description: "Welcome to Wootu!" }
  ];
  return (
    <Container fluid>
    {/* HeroSection */}
    <section className="hero-section my-5">
      <Row className="align-items-center">
        <Col md={6}>
          <h1 className="hero-title">Join Us at Wootu</h1>
          <h4 className="hero-subtitle">Your career starts here</h4>
          <p className="hero-body-text">Explore a place where innovation meets passion.</p>
        </Col>
        <Col md={6}>
          <img src="/path/to/hero-image.jpg" alt="Career at Wootu" className="img-fluid" />
        </Col>
      </Row>
    </section>

    {/* Section: What makes Wootu a great place to work? */}
    <section className="great-place-section my-5">
      <h2>What makes Wootu a great place to work?</h2>
      <Row>
        {['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'].map((img, idx) => (
          <Col md={3} key={idx}>
            <Card className="zoom-on-hover">
              <Card.Img variant="top" src={`/path/to/${img}`} />
              <Card.Body>
                <Card.Title>Card Title {idx + 1}</Card.Title>
                <Card.Text>Exciting opportunities await!</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>

    {/* Section: What benefits are waiting for you? */}
    <section className="benefits-section my-5">
      <h2>What benefits are waiting for you?</h2>
      <Row>
        {[...Array(5)].map((_, idx) => (
          <Col md={4} key={idx}>
            <Card className="benefits-card">
              <Row className="align-items-center">
                <Col xs={3}><i className="benefit-icon">Icon {idx + 1}</i></Col>
                <Col xs={9}>
                  <Card.Body>
                    <Card.Text>Benefit Description {idx + 1}</Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </section>

    {/* Section: Take a peep at what goes on at Wootu */}
    <section className="peep-section my-5">
      <h2>Take a peep at what goes on at Wootu</h2>
      <div className="image-collage">
        {/* Add custom collage layout here */}
      </div>
    </section>



    {/* Section: Currently Now Openings */}
    <section className="openings-section my-5">
      <h2>Currently Now Openings</h2>
      <p>Explore our current job openings and submit your application.</p>
      <Form>
        <Form.Group>
          <Form.Label>Your Resume</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </section>
  </Container>
  );
};

export default Career;
