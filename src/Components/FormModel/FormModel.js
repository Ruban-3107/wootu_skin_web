import React, { useEffect,useState } from 'react';
import css from './FormModel.css';
import { Container, Row, Col, Carousel, Button, Modal, } from 'react-bootstrap';
import { FaPlay } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import contactImg from "../../Assets/contact.png"
import { strapi_url } from '../../common/utils';
import VideoPlayer from '../VideoPlayer/Videoplayer';


export default function FormModal(){
   

    return(
        <Container centered  className='from-Modal'>
      <Row className='em-space'>

      </Row>
          <Row className="g-0 fromModal-row">
            {/* Left Side Image */}
            <Col xs={12} md={5} className="d-flex align-items-center form-image w-80">
              <img
                src={contactImg}
                alt="Booking"
                className="form-image"
                style={{ maxHeight: '80%', objectFit: 'cover' }}
              />
            </Col>

            {/* Right Side iFrame */}
            <Col xs={12} md={6} className='formZoho'>
              <iframe className='formframe'
                title="Book An Appointment"
                src="https://forms.zohopublic.com/wootdiet/form/BookAppointmentskinhairinfluencer/formperma/H6JquAYN72xaH27VQpIZTSmImiLYFntXopffWAzzoN4"
                width="100%"
                height="100%"
                frameborder="0"
                style={{ border: 'none',backgroundColor:'#ffffff' }}
                allowFullScreen
              ></iframe>
            </Col>
          </Row>
          <Row className='em-space'>

</Row>
      </Container>
    )
}