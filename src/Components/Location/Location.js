import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import css from "./Location.css";

const locations = [
  {
    id: 1,
    title: 'Anna Nagar',
    address: 'Wootu ® Nutrition , 61, 2nd Floor, A Block, 2th Ave, Above GKB Opticals near Roundtana & Metro StationAnnanagar East, Chennai – 600102',
    phone: '+91 7358375199',
    position: { lat: 42.542640, lng: -92.440380 }, // Example coordinates
  },
  {
    id: 2,
    title: 'OMR',
    address: 'Wootu ® Nutrition , 4/210, IT Highway,OMR, Kandanchavadi,Chennai – 600096',
    phone: '+91 7358375199',
    position: { lat: 34.052235, lng: -118.243683 },
  },
  {
    id: 3,
    title: 'PORUR',
    address: '38/1, Mount poonamallee road, Porur,Chennai – 600116',
    phone: '+91 7358375199',
    position: { lat: 51.507351, lng: -0.127758 },
  },
  {
    id: 4,
    title: 'Tambaram East',
    address: 'Wootu ® Nutrition , 431,Velachery Road, Tambaram East,Chennai – 600059',
    phone: '+91 7358375199',
    position: { lat: 48.856613, lng: 2.352222 },
  },
  {
    id: 5,
    title: 'T-Nager',
    address: 'Wootu Nutrition,114,7th Floor,B-Block ,Mena Kampala Arcade ,Sir Thyagaraya Road,d,Chennai 600017',
    phone: '+91 7358375199',
    position: { lat: 48.856613, lng: 2.352222 },
  },
];

const OurLocations = () => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  const handleCardClick = (location) => {
    setSelectedLocation(location);
  };

  return (
    <Container>
      <h2 className="my-4 loc-title">Our Locations</h2>
      <hr className='line-con' />
      <Row className="mb-4">
        {locations.slice(0, 3).map((location) => (
          <Col key={location.id} md={4} className="mb-3">
            <Card className="location-card" onClick={() => handleCardClick(location)} style={{ cursor: 'pointer', transition: 'transform 0.2s' }}>
              <Card.Body>
                <Card.Title className='location-title'>{location.title}</Card.Title>
                <Card.Text className='locations-add'>{location.address}</Card.Text>
                <Card.Text className='locations-contact'>{location.phone}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className='d-flex align-item-center justify-content-center'>
        {locations.slice(3).map((location) => (
          <Col key={location.id} md={4} className="mb-3">
            <Card className="location-card" onClick={() => handleCardClick(location)} style={{ cursor: 'pointer', transition: 'transform 0.2s' }}>
              <Card.Body>
                <Card.Title className='location-title'>{location.title}</Card.Title>
                <Card.Text className='locations-add'>{location.address}</Card.Text>
                <Card.Text className='locations-contact'>{location.phone}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={{ height: '400px', width: '100%' }}
          center={selectedLocation.position}
          zoom={10}
        >
          <Marker position={selectedLocation.position} />
        </GoogleMap>
      </LoadScript>
      <Row className='em-space'>

</Row>
    </Container>
  );
};

export default OurLocations;
