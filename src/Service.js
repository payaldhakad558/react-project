import React, { useEffect, useState } from 'react';
import './Service.css';

const Service = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setServices(data);
        setLoading(false);
      })
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  if (loading) return <div className="services-loading">Loading services...</div>;

  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.title} />
            <h2>{service.title}</h2>
            <p>{service.description.substring(0, 100)}...</p>
            <span className="price">${service.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
