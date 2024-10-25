import React, { useEffect,useState } from 'react';
import css from './Treatments.css';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import { FaPlay } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { strapi_url } from '../../common/utils';
const Treatments = () => {
  const location = useLocation();
  const { label } = location?.state || {}
  const [data,setData] = useState();
  console.log({label});

  const condition =(label)=>{
    switch (label){
    case 'Hydra Facial':
      return '/api/hydra-facials'
      default:
      return '/api/hydra-facials';
    }
  }

  const fetchServices = async () => {
    try {
      const response = await axios.get(`${strapi_url}${condition(label)}?populate=*`);
      setData(response.data.data);
      console.log("response::",response.data.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    
    data && (<div className="lymphatic-drainage">
      {/* Hero Section */}
      <section className="hero-section py-5">
        <Container>
          {/* data[0].hero_section_image */}

          <Row className="align-items-center">
            <Col md={6}>
              <img src={"#"} alt="Hero Image" className="img-fluid" />
            </Col>
            <Col md={6}>
              <h1>{data[0].hero_section_header}

              </h1>
              {/* <h4>{data[0].hero_section_text}</h4> */}
              <p>{data[0].hero_section_text}</p>
              <Button variant="primary">book now</Button>
            </Col>
          </Row>
        </Container>
      </section>
      <h1>
{data[0].benefits_header}
</h1>

      {/* Benefits Section */}
      <section className="benefits-section py-5">
        {/* data[0].benefits_image */}

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
                {data[0].benefits_text.split(',').map((value, index) => (
    <li key={index}>{value}</li>
  ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <h1>
{data[0].before_after_section_text
}
</h1>
      {/* Before/After Carousel Section */}
      <section className="before-after-carousel py-5">
        {/* data[0].before_after_section_image */}
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
<h1>{data[0].video_section_text}
</h1>
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
    </div>)
                
  );
};

export default Treatments;
