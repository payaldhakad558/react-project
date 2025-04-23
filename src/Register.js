import React, { useState } from 'react';
    import './Register.css';
    
    function Register(){
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
      });
    
    const handleChange = (e) => {
        setFormData({ 
          ...formData, 
        [e.target.name]: e.target.value 
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form Submitted:', formData);
        
      };
    
      return (
        <div className="register-container">
          <form className="register-form" onSubmit={handleSubmit}>
            <h2>Create Account</h2>
    
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
    
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
    
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              name="password" 
              id="password" 
              value={formData.password}
              onChange={handleChange}
              required 
            />
    
            <button type="submit">Register</button>
          </form>
        </div>
      );
    };
    
    export default Register;
    
