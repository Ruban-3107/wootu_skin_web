import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FadeUpOnScroll from '../FadeUp/FadeUpOnScroll';
import { strapi_url } from '../../common/utils';
import axios from 'axios';
import hydrafacialImage from '../../Assets/Hydrafacial.jpg';
import microNeedlingImage from '../../Assets/Micro Needling.jpg';
import botoxImage from '../../Assets/Botox.jpg';


const localImages = [
   hydrafacialImage,
   microNeedlingImage,
   botoxImage

];

const Carousel = () => {
  const [carousels, setCarousels] = useState([]);
  const [processedCarousels, setProcessedCarousels] = useState([]);

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

  const getImageSrc = async (url, fallback) => {
    try {
      if(!url) return fallback;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Image not found');
      }
      return url;
    } catch {
      return fallback; // Return the fallback local image if the fetch fails
    }
  };
console.log({carousels});
  const processImages = async () => {
    const promises = carousels.map(async (slide,index) => {
      const imageUrl = slide.image && slide.image.length > 0 ? `${strapi_url}${slide.image[0].url}` : null;
      const imageSrc = await getImageSrc(imageUrl, localImages[index]); // Use heading_text to match localImages
      console.log({imageSrc});
      return { ...slide, imageSrc }; // Return the slide with the resolved image source
    });
    
    const results = await Promise.all(promises);
    setProcessedCarousels(results);
  };

  useEffect(() => {
    if (carousels.length > 0) {
      processImages();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carousels]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    (processedCarousels.length > 0 && 
    <FadeUpOnScroll>
      <div className="carousel-wrapper">
        <div className="carousel-container">
          <Slider {...settings}>
            {processedCarousels.map((slide) => (
              <div className="carousel-slide" key={slide.id}>
                <div className="carousel-content">
                  <div className="carousel-image">
                    <img src={slide.imageSrc} alt={slide.heading_text} />
                  </div>
                  <div className="carousel-text">
                    <h2>{slide.heading_text}</h2>
                    <p>{slide.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </FadeUpOnScroll>)
  );
};

export default Carousel;
