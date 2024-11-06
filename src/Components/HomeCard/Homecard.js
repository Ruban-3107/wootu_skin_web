import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Homecard.module.css';
import axios from 'axios';
import 'animate.css/animate.min.css';
import FadeUpOnScroll from '../FadeUp/FadeUpOnScroll';
import { strapi_url } from '../../common/utils';
import wrinkle from '../../Assets/Wrinkles.jpg';
import hydrafacial from '../../Assets/Hydrafacial.jpg';
import darkcircle from '../../Assets/Darkcircle.png';
import acne from '../../Assets/Acnescar.jpg';
const HomeCard = () => {
  const [concerns, setConcerns] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => { 
    try {
      const response = await axios.get(`${strapi_url}/api/top-concerns?populate=*`);
      setConcerns(response.data.data); // Store the fetched data in state
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const localImages = {
    "Acne & Scars": acne, 
    "Dark Circle": darkcircle,
    "Wrinkles": wrinkle,
    "Hydra Facial": hydrafacial   
  };

  // Function to check if an image URL is valid
  const checkImageSrc = async (url, fallback) => {
    try {
      if(!url) return fallback;
      const response = await fetch(url);
      if (!response.ok) throw new Error('Image not found');
      return url;
    } catch {
      return fallback; // Return the fallback local image if the fetch fails
    }
  };

  // Function to prepare the images asynchronously
  const prepareImages = async () => {
    const updatedConcerns = await Promise.all(concerns.map(async (concern) => {
      const imageSrc = await checkImageSrc(`${strapi_url}${concern.image.url}`, localImages[concern.name]);
      return { ...concern, imageSrc }; // Add the resolved imageSrc to the concern object
    }));
    setConcerns(updatedConcerns);
  };

  useEffect(() => {
    if (concerns.length > 0) {
      prepareImages();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [concerns]);

  // if (loading) {
  //   return <div>Loading...</div>; // Optionally replace with a spinner or loading component
  // }

  return (
    <FadeUpOnScroll>
      <div className="container homecard-container">
        <h1 className='topCon-title'>Top Concerns</h1>
        <div className="row homecard-row">
          {concerns.map((concern) => (
            <div key={concern.id} className="col-lg-3 col-md-4 col-sm-12 card-col">
              <div className={styles.card}>
                <img
                  src={concern.imageSrc} // Use the resolved image source
                  alt={concern.name} // Use the name from API
                  className={styles.cardImage}
                  width={500} // Adjust width as needed
                  height={500} // Adjust height as needed
                />
                <div className={styles.overlay}>
                  <h3 className={styles.overlayText}>{concern.name}</h3>
                  <button className={styles.ctaButton}>Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeUpOnScroll>
  );
};

export default HomeCard;
