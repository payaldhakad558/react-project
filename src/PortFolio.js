import React, { useEffect, useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.error('Error loading portfolio:', err));
  }, []);


  
  return (
    <div className="portfolio-container">
      <h1>My Portfolio</h1>
      <p className="portfolio-intro">
        Here’s a showcase of our work — a curated collection of products we’re proud to offer.
      </p>

      <div className="portfolio-grid">
        {items.map(item => (
          <div className="portfolio-item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="portfolio-details">
              <h3>{item.title}</h3>
              <span className="portfolio-category">{item.category}</span>
              <span className="portfolio-price">${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
