import React from 'react';
import { Container, Row, Col, Form, Button,Card } from 'react-bootstrap';
import './Career.css';
import valueImg from "../Assets/Career/value.png";
import atomspareImg from "../Assets/Career/atomspare.png";
import BalanceImg from "../Assets/Career/balance.png";
import growImg from "../Assets/Career/grow.png";
import css from "../App.css";
import icon1 from "../Assets/Icon/Barbell (1).png";
import icon2 from "../Assets/Icon/Clock (1).png";
import icon3 from "../Assets/Icon/Confetti.png";
import icon4 from "../Assets/Icon/HandsClapping.png";
import icon5 from "../Assets/Icon/ShieldCheck.png";
import CareerHero from "../Assets/career-hero.jpg";

const Career = () => {
return (
    <>
    {/* HeroSection */}
    <section className="heroSection ">
      <Container>
      <Row className="align-items-center container">
        <Col md={6}>
          <h1 className="hero-title career-hero-title">Join Us at Wootu</h1>
          <h4 className="hero-subtitle career-hero-subtitle">Your career starts here</h4>
          <p className="hero-body-text career-hero-text">Explore a place where innovation meets passion.</p>
        </Col>
        <Col md={6}>
          <img src={CareerHero} alt="Career at Wootu" className="img-fluid" />
        </Col>
      </Row>
      </Container>
    </section>

    {/* Section: What makes Wootu a great place to work? */}
    <Container>
    <section className="great-place-section">
      <h2>What makes Wootu a great place to work?</h2>
      <Row className='value-row'>

          <Col md={3} sm={12} className='col-cards'>
            <Card className="zoom-on-hover">
              <Card.Img src={valueImg} />
              <Card.Body>
                <Card.Title>Company Values</Card.Title>
                <Card.Text>Trust, learning, honesty, and co-operation are the pillars that sit at the core of what we do.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}  sm={12} className='col-cards'>
            <Card className="zoom-on-hover">
              <Card.Img src={growImg} />
              <Card.Body>
                <Card.Title>Everyday grow</Card.Title>
                <Card.Text>We provide the necessary support to ensure your skills never stop growing. </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}  sm={12} className='col-cards'>
            <Card className="zoom-on-hover">
              <Card.Img src={atomspareImg} />
              <Card.Body>
                <Card.Title>Friendly atmosphere</Card.Title>
                <Card.Text>We hold a positive attitude in order to foster respect and decency for our entire team.</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}  sm={12} className='col-cards' >
            <Card className="zoom-on-hover">
              <Card.Img src={BalanceImg} />
              <Card.Body>
                <Card.Title>Work-life balance</Card.Title>
                <Card.Text>For us, a healthy personal life is just as important as the time you spend in the office.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
    
      </Row>
    </section>



    <Container  fluid="sm" className="openings-section conatiner-sm my-5">
    <h2 className="text-center">Currently Now Openings</h2>
    <p className="text-center">Explore our current job openings and submit your application.</p>
    <Row className="justify-content-center form-card">
      <Col xs={12} sm={10} md={8} lg={6}>
        <Form>
          <Form.Group controlId="formResume" className="mb-3">
            <Form.Label>Your Resume</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your full name" />
          </Form.Group>
          <Form.Group controlId="formPhone" className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="tel" placeholder="Enter your phone number" />
          </Form.Group>
          <Form.Group controlId="formPosition" className="mb-3">
            <Form.Label>Position Applying For</Form.Label>
            <Form.Control type="text" placeholder="Enter the position" />
          </Form.Group>
          <Button  type="submit" className="w-100 hero-btn">Submit</Button>
        </Form>
      </Col>
    </Row>
  </Container>
    </Container>
  </>
  );
};

export default Career;
