import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../HomeCard/Homecard.module.css';
import "../../index.css";
import { strapi_url } from '../../common/utils';
import axios from 'axios';


const Topservice = () => {
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    try {
      const response = await axios.get(`${strapi_url}/api/top-services?populate=*`);
      setServices(response.data.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div className="container homecard-container">
      <h1 className="card-title">Top Services</h1>
      <div className="row homecard-row">
        {services?.map(service => (
          <div key={service.id} className="col-lg-3 col-md-4 col-sm-12 card-col">
            <div className={styles.card}>
              <img
                src={`${strapi_url}${service.image[0].url}`} // Use the first image URL
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
