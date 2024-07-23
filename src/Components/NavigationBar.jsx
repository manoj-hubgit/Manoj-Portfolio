import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../Pages/Home';

const NavigationBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">PortFolio</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" style={{'--bs-scroll-height': '100px'}}>
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
          
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/project">Projects</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact</Link>
        </li>
    
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default NavigationBar;