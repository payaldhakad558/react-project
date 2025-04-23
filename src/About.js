import { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
 
  

function App() {
  //state
const [data,setData]=useState([]);
  //function
  fetch('https://fakestoreapi.com/products')
  .then((res)=>{
    return res.json();
  }).then((d)=>{
    console.log(d);
    setData(d)
  }).catch((e)=>{
    console.log(e);
  })
  //return statement

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">Cubedots</a>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">  
              <li className="nav-item">
                <Link  className="nav-link active" >Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/about'>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/services'>Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/portfolio'>Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/register'>Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/login'>Login</Link>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className=" container mt-5">
      <button type="button" class="btn btn-outline-dark btn-sm mx-1">Small button</button>
      <button type="button" class="btn btn-outline-dark btn-sm mx-4">Small button</button>
      <button type="button" class="btn btn-outline-dark btn-sm mx-4">Small button</button>
      <button type="button" class="btn btn-outline-dark btn-sm mx-4">Small button</button>
      <button type="button" class="btn btn-outline-dark btn-sm mx-4">Small button</button>
      <button type="button" class="btn btn-outline-dark btn-sm mx-4">Small button</button>
      <button type="button" class="btn btn-outline-dark btn-sm mx-4">Small button</button>
      
      </div>
      
      <div class="container text-center">
      <div class="row row-cols-4 mt-5">
        
        {
          data.map((item)=>{
            return(
              <>
              <div class="col  ">
              <div class="card" style={{width: "18rem"}}>
              <img src={item.image} className="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Price:${item.price}</h5>
                <p class="card-text">{item.category}</p>
                <button type="button" class="btn btn-outline-dark btn-sm ">Go Buy Now</button>
              </div>
            </div>
              </div>
                
                </>
            )
          })
        }
      
      </div>
</div>

<div>

</div>


<footer class="footer">
  <div class="footer-container">
    <div class="footer-section about">
      <h2>About Us</h2>
      <p>We provide innovative solutions to help your business thrive. Follow us on our journey.</p>
    </div>

    <div class="footer-section links">
      <h2>Quick Links</h2>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>

    <div class="footer-section social">
      <h2>Follow Us</h2>
      <div class="social-icons">
        <button href="#"><img src="https://img.icons8.com/ios-filled/24/facebook.png" alt="Facebook" /></button>
        <button href="#"><img src="https://img.icons8.com/ios-filled/24/twitter.png" alt="Twitter" /></button>
        <button href="#"><img src="https://img.icons8.com/ios-filled/24/instagram-new.png" alt="Instagram" /></button>
        <button href="#"><img src="https://img.icons8.com/ios-filled/24/linkedin.png" alt="LinkedIn" /></button>
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <p>&copy; 2025 Your Company. All rights reserved.</p>
  </div>
</footer>


    </div>
  );
}

export default App;
