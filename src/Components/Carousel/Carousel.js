import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FadeUpOnScroll from '../FadeUp/FadeUpOnScroll';
import { strapi_url } from '../../common/utils';
import axios from 'axios';

const Carousel = () => {
  const [carousels, setCarousels] = useState([]);

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    (carousels.length > 0 && 
    <FadeUpOnScroll>
      <div className="carousel-wrapper">
        <div className="carousel-container">
          <Slider {...settings}>
            {carousels.map((slide) => {
              const imageUrl = slide.image && slide.image.length > 0 ? `${strapi_url}${slide.image[0].url}` : null;
              return (
                <div className="carousel-slide" key={slide.id}>
                  <div className="carousel-content">
                    <div className="carousel-image">
                      {imageUrl ? (
                        <img src={imageUrl} alt={slide.heading_text} />
                      ) : (
                        <div>No image available</div>
                      )}
                    </div>
                    <div className="carousel-text">
                      <h2>{slide.heading_text}</h2>
                      <p>{slide.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </FadeUpOnScroll>)
  );
};

export default Carousel;
