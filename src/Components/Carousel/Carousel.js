import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FadeUpOnScroll from '../FadeUp/FadeUpOnScroll';
import css from "./Carousel.css"
import { strapi_url, token } from '../../common/utils';

const Carousel = () => {

  const [hero_text_1, setHero_text_1] = useState('');
  const [hero_text_2, setHero_text_2] = useState('');
  const [hero_image, setHero_image] = useState('');
  // Static data for each slide
  const slides = [
    {
      id: 1,
      title: "Professional Skin care for Visible Results",
      body: "Achieve smoother, clearer, and healthier skin with our expert treatments.",
      imageUrl: "https://shorturl.at/48E60",
      ctaText: "Book an Appointment",
      ctaLink: "#",
    },
    {
      id: 2,
      title: "Restore Your Hair, Regain Your Confidence",
      body: "Our personalized hair restoration treatments address hair thinning and loss with proven results. Say goodbye to hair concerns and embrace voluminous, healthy locks",
      imageUrl: "https://shorturl.at/AooTy",
      ctaText: "Explore Hair Solutions",
      ctaLink: "#",
    },
    {
      id: 3,
      title: "Achieve Your Ideal Body",
      body: "Whether you're looking to tone, reduce fat, or sculpt, our non-invasive treatments offer safe and effective solutions. Reach your body goals without surgery.",
      imageUrl: "https://shorturl.at/LDhaq",
      ctaText: "Start Your Journey",
      ctaLink: "#",
    },
  ];

  // Slider settings for React Slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <FadeUpOnScroll>
    <div className="carousel-wrapper">
      <div className="carousel-container">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div className="carousel-slide" key={slide.id}>
              <div className="carousel-content">
                <div className="carousel-image">
                  <img src={slide.imageUrl} alt={slide.title} />
                </div>
                <div className="carousel-text">
                  <h2>{slide.title}</h2>
                  <p>{slide.body}</p>
                  <a href={slide.ctaLink} className="cta-button">
                    {slide.ctaText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </FadeUpOnScroll>
  );
};

export default Carousel;