import React, { useEffect,useState } from 'react';
import css from './Treatments.css';
import Loader from '../../Components/Loader/Loader';
import { Container, Row, Col, Carousel, Button, Modal, } from 'react-bootstrap';
import { FaPlay } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import slider3 from "../../Assets/beforeandafter3.png";
import slider1 from "../../Assets/beforeandafter.png";
import slider2 from "../../Assets/beforeandafter2.png";
import contactImg from "../../Assets/contact.png";
import Hydrafacial from "../../Assets/Treatments/HydraFacial.jpg";
import chemicalPeel from "../../Assets/Treatments/ChemicalPeel.jpg";
import carbon from "../../Assets/Treatments/CarbonLaser.jpg";
import photofacial from "../../Assets/Treatments/photofacial.jpg";
import glycolic from "../../Assets/Treatments/glycoliepeel.jpg";
import nano from "../../Assets/Treatments/nanopeel.jpg";
import light from "../../Assets/Treatments/ChemicalPeel.jpg";
import combination from "../../Assets/Treatments/combinationpeel.jpg";
import yellow from "../../Assets/Treatments/yellowpeel.jpg";
import salicylie from "../../Assets/Treatments/saylicpeel.jpg";
import glutathione from "../../Assets/Treatments/glycoliepeel.jpg";
import upperlip from "../../Assets/Treatments/underlip.png";
import chin from "../../Assets/Treatments/chinhair.jpg";
import underarms from "../../Assets/Treatments/underarm.png";
import fullhand from "../../Assets/Treatments/fullhand.jpg";
import fulleg from "../../Assets/Treatments/full-leg.jpg";
import fullbody from "../../Assets/Treatments/full-body.jpg";
import Image from "../../Assets/image 01.png";
import Bikeni from "../../Assets/Treatments/bikeni.jpg";
import sidelocks from "../../Assets/Treatments/side-locks.jpg";
import bodylhr from "../../Assets/Treatments/3-body.jpg";
import lymphatic from "../../Assets/Treatments/lymphatic.jpg";
import abdomen from "../../Assets/Treatments/abdomen.png";
import backtucks from "../../Assets/Treatments/back-tucks.png";
import { strapi_url } from '../../common/utils';
import VideoPlayer from '../VideoPlayer/Videoplayer';
const Treatments = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [hero_section_image, setHero_image] = useState('');
  const [benefits_image, setBenefits_image] = useState('');
  const [loading, setLoading] = useState(true);
  const [before_after_carousel, setBefore_after_carousel] = useState('');
  const location = useLocation();
  const { label } = location?.state || {};
  const [data, setData] = useState();
  const [processedTreatmentData,setProcessedTreatmentData] = useState();

  const localImages = {
    "Hydra Facial": Hydrafacial,
    "Chemical Peel": chemicalPeel,
    "Carbon Laser": carbon,
    "Photo Facial": photofacial,
    "Glycolic Peel": glycolic,
    "Nano Peel": nano,
    "Light Peel": light,
    "Combination Peel": combination,
    "Yellow Peel": yellow,
    "Salicylic Peel": salicylie,
    "Glutathione Peel": glutathione,
    "Upper Lip": upperlip,
    "Chin": chin,
    "Underarms": underarms,
    "Full Hand": fullhand,
    "Full Leg": fulleg,
    "Full Body": fullbody,
    "Bikini": Bikeni,
    "Side Locks": sidelocks,
    "Body LHR": bodylhr,
    "Lymphatic Drainage": lymphatic,
    "Abdomen": abdomen,
    "Back Tucks": backtucks,
    "Contact Image": contactImg,
    "Before and After 1": slider1,
    "Before and After 2": slider2,
    "Before and After 3": slider3,
    "Sample Image": Image
  };
  

  const condition = (label) => {
    switch (label) {
      case 'Hydra Facial':
        return '/api/hydra-facials';
      case 'Chemical Peel':
        return '/api/chemical-peels';
      case 'Carbon Laser':
        return '/api/carbon-lasers';
      case 'Photo Facial':
        return '/api/photo-facials';
      case 'Glycolic Peel':
        return '/api/glycolic-peels';
      case 'Nano Peel':
        return '/api/nano-peels';
      case 'Light Peel':
        return '/api/light-peels';
      case 'Combination Peel':
        return '/api/combination-peels';
      case 'Yellow Peel':
        return '/api/yellow-peels';
      case 'Salicylic Peel':
        return '/api/salicylic-peels';
      case 'Glutathione Peel':
        return '/api/glutathione-peels';
      case 'Upper Lip':
        return '/api/upper-lip';
      case 'Chin':
        return '/api/chin';
      case 'Upper Arms':
        return '/api/upper-arms';
      case 'Full Hands':
        return '/api/full-hands';
      case 'Full Legs':
        return '/api/full-legs';
      case 'Bikini':
        return '/api/bikini';
      case 'Full Body':
        return '/api/full-body';
      case 'Side Locks':
        return '/api/side-locks';
      case '3 Body Part LHR':
        return '/api/3-body-part-lhr';
      case 'Lymphatic Drainage':
        return '/api/lymphatic-drainage';
      case 'Abdomen Tucks':
        return '/api/abdomen-tucks';
      case 'Back Tucks':
        return '/api/back-tucks';
      case 'Thigh Tucks':
        return '/api/thigh-tucks';
      case 'Arm Tucks':
        return '/api/arm-tucks';
      case 'Hip Tucks':
        return '/api/hip-tucks';
      case 'Green Coffee-Abdomen, Arms, Hip':
        return '/api/green-coffee';
      case 'Neck':
        return '/api/neck';
      case 'Lipoflush':
        return '/api/lipoflush';
      case 'ULS':
        return '/api/uls';
      case 'NMS':
        return '/api/nms';
      case 'Cello':
        return '/api/cello';
      case 'Cryo(Cool Sculpting)':
        return '/api/cryo-cool-sculpting';
      case 'Diet plans per month':
        return '/api/diet-plans-per-month';
      default:
        return '/api/hydra-facials'; // Default to Hydra Facial if no match is found
    }
  };
  

  const checkImageSrc = async (url, fallback) => {
    try {
      if(!url) return fallback;
      const response = await fetch(url);
      if (!response.ok) throw new Error('Image not found');
      return url;
    } catch {
      return fallback; // Return fallback local image if fetch fails
    }
  };

  const fetchServices = async () => {
    try {
      const response = await axios.get(`${strapi_url}${condition(label)}?populate=*`);
      const fetchedData = response.data.data;

      // Set data and images with fallback logic
      setData(fetchedData);
      setHero_image(await checkImageSrc(
        `${strapi_url}${fetchedData[0]?.hero_section_image?.url}`, 
        localImages[label]
      ));
      setBenefits_image(await checkImageSrc(
        `${strapi_url}${fetchedData[0]?.benefits_image?.url}`, 
        localImages[label]
      ));
      setBefore_after_carousel(await checkImageSrc(
        `${strapi_url}${fetchedData[0]?.before_after_carousel?.url}`, 
        localImages[label]
      ));
      setLoading(false);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);



  const videoSources = [
    "https://youtube.com/shorts/DjYasFr-iz4?si=dwIeidq3SdeXuyls",  // Video 1
    "https://youtu.be/9fDKsFrCb4w?si=qnZHw43dH9ofVYtb",    // Video 2
    "https://www.youtube.com/watch?v=9fDKsFrCb4w", // Video 3
    "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4"  // Video 4
  ];

  
//   if (loading) {
//     return (
//       <div className="loading-screen">
//         <Loader /> {/* Ensure this component is correctly rendering a spinner or animation */}
//       </div>
//     );
// }
  

  return (
    
    hero_section_image && (<div className="lymphatic-drainage ">
      {/* Hero Section */}
      <section className="heroSection ">
        <Container className='py-5'>
          {/* data[0].hero_section_image */}

          <Row className="align-items-center">
            <Col md={6} lg={6} sm={12} className='hero-image-section'>
              <img src={hero_section_image} alt="Hero Image" className="img-fluid" />
            </Col>
            <Col md={6} lg={6} sm={12} className='hero-content'>
              <h1 className="hero-title">{data[0].hero_section_header}

              </h1>
              {/* <h4>{data[0].hero_section_text}</h4> */}
              <p className="lead">{data[0].hero_section_text}</p>
              <Button className='hero-btn'  onClick={handleShow}>Book an Appointment</Button>
            </Col>
          </Row>
        </Container>
      </section>




      {/* Benefits Section */}
      <section className="benefits-section py-5">
        {/* data[0].benefits_image */}

        <Container>

        <h1 className='sub-title1 text-center' style={{textAlign:"center"}}>
{data[0].benefits_header}
</h1>

          <Row className="align-items-center benefits_row">
            <Col md={6}>
              <img src={benefits_image} alt="Benefits Image" className="img-fluid" />
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
      <section className="before-after-carousel ">
        {/* data[0].before_after_section_image */}
        <Container>
        <h1 className='sub-title1 text-center'>
{data[0].before_after_section_text
}
</h1>
<Row className="align-items-center benefits_row treatment-carousel">
<Carousel interval={3000} controls={true} indicators={true} pause="hover" className="carousel-fade">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider1}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First Slide</h3>
          <p>This is the first slide description.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider2}
          alt="Second slide"
        />
        {/* <Carousel.Caption>
          <h3>Second Slide</h3>
          <p>This is the second slide description.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider3}
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>Third Slide</h3>
          <p>This is the third slide description.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
          </Row>
        </Container>
      </section>

      {/* Videos Section */}
      <section className="videos-section py-5">
        <Container>
        <h1 className='sub-title1'>{data[0].video_section_text}
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
        <div className=''>
        <Button  className='hero-btn w-100' size="lg"  onClick={handleShow}>Book an Appointment</Button>
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
          
          style={{ border: 'none', background: 'transparent' }}
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
