import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../HomeCard/Homecard.module.css';
import "../../index.css";
import { strapi_url } from '../../common/utils';
import axios from 'axios';
import hydrafacialImage from '../../Assets/Hydrafacial.jpg';
import microNeedlingImage from '../../Assets/Micro Needling.jpg';
import botoxImage from '../../Assets/Botox.jpg';
import lightPeelImage from '../../Assets/image 09.png';

const Topservice = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [processedServices, setProcessedServices] = useState([]);

  const fetchServices = async () => {
    try {
      const response = await axios.get(`${strapi_url}/api/top-services?populate=*`);
      setServices(response.data.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const localImages = {
    "Hydra Facial": hydrafacialImage,
    "Micro Needling": microNeedlingImage,
    "Botox": botoxImage,
    "Light Peel": lightPeelImage
  };

  const getImageSrc = async (url, fallback) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Image not found');
      }
      return url;
    } catch {
      return fallback; // Return the fallback local image if the fetch fails
    }
  };

  const processImages = async () => {
    const promises = services.map(async (service) => {
      const imageSrc = await getImageSrc(`${strapi_url}${service.image.url}`, localImages[service.name]);
      return { ...service, imageSrc }; // Return the service with the resolved image source
    });
    const results = await Promise.all(promises);
    setProcessedServices(results);
  };

  useEffect(() => {
    if (services.length > 0) {
      processImages();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [services]);

  // if (loading) {
  //   return <div>Loading...</div>; // Optionally replace with a spinner or loading component
  // }

  return (
    <div className="container homecard-container">
      <h1 className="card-title">Top Services</h1>
      <div className="row homecard-row">
        {processedServices.map((service) => (
          <div key={service.id} className="col-lg-3 col-md-4 col-sm-12 card-col">
            <div className={styles.card}>
              <img
                src={service.imageSrc}
                alt={service.name}
                className={styles.cardImage}
              />
              <div className={styles.overlay}>
                <h3 className={styles.overlayText}>{service.name}</h3>
                <button className={styles.ctaButton}>Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topservice;
