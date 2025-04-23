import React, { useEffect, useState } from 'react';
import './About.css';

const About = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=3')
      .then(res => res.json())
      .then(data => setFeaturedProducts(data))
      .catch(err => console.error('Error fetching featured products:', err));
  }, []);


  
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Our Store</h1>
        <p>
          Welcome to FakeStore — your go-to destination for high-quality and stylish products at unbeatable prices. 
          From fashionable apparel to top-notch electronics, our curated collection brings you the best in convenience, variety, and value.
        </p>
      </div>

      <div className="about-featured">
        <h2>Featured Products</h2>
        <div className="featured-grid">
          {featuredProducts.map(product => (
            <div key={product.id} className="featured-card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p className="featured-price">${product.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="about-footer">
        <p>We are constantly updating our collection to match your style and needs. Thank you for choosing FakeStore!</p>
      </div>
    </div>
  );
};

export default About;
