import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';
import './ContactForm.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function ContactForm() {
    return(
        <Container className="mt-5 contact-container">
        <Row className='contact-row'>
          {/* Map Section */}
          <Col lg={6} md={12} className="mb-4 mb-lg-0 contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.99960627958!2d77.35073647695312!3d12.953847713540736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c761f61f%3A0x1a8c2c72549dbb41!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1634394692391!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </Col>
  
          {/* Contact Form Section */}
          <Col lg={6} md={12} >
            <Form className="contact-map">
              {/* Name Field */}
              <Form.Group className="mb-3 w-100" controlId="formName">
                <Form.Control
                  type="text"
                  placeholder="&#xf007; Enter your name"
                  className="icon-input"
                />
              </Form.Group>
  
              {/* Email Field */}
              <Form.Group className="mb-3 w-100" controlId="formEmail">
                <Form.Control
                  type="email"
                  placeholder="&#xf0e0; Enter your email"
                  className="icon-input"
                />
              </Form.Group>
  
              {/* Phone Field */}
              <Form.Group className="mb-3 w-100" controlId="formPhone">
                <Form.Control
                  type="text"
                  placeholder="&#xf095; Enter your mobile number"
                  className="icon-input"
                />
              </Form.Group>
  
              {/* Message Field */}
              <Form.Group className="mb-3 w-100" controlId="formMessage">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="How we can help?"
                />
              </Form.Group>
  
              {/* Submit Button */}
              <Button variant="primary" type="submit" className="w-100 form-btn">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
}