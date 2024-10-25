import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Homecard.module.css';
import axios from 'axios';
import 'animate.css/animate.min.css';
import { Fade } from 'react-awesome-reveal';
import { strapi_url,token } from '../../common/utils';

const HomeCard = () => {
  const [concerns, setConcerns] = useState([]);

  const fetchData = async () => { 
    try {
      const response = await axios.get(`${strapi_url}/api/top-concerns?populate=*`);
      setConcerns(response.data.data); // Store the fetched data in state
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container homecard-container">
      <Fade duration={1500} delay={300} >
      <h1 className='topCon-title'>Top Concerns</h1>
      </Fade>
      <div className="row homecard-row" >
        {concerns.map((concern) => (
          <div key={concern.id} className="col-lg-3 col-md-4 col-sm-12  card-col">

            <div className={styles.card}>
              <img
                src={`${strapi_url}${concern.image.url}`} // Use the image URL from API
                alt={concern.name} // Use the name from API
                className={styles.cardImage}
                // layout="responsive" // Adjust layout for better responsiveness
                 width={500} // Adjust width as needed
                height={500} // Adjust height as needed
              />
              <div className={styles.overlay}>
                <h3 className={styles.overlayText}>{concern.name}</h3> {/* Use name from API */}
                <button className={styles.ctaButton}>Book Now</button>
              </div>
            </div>
      
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCard;
