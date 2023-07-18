import React from "react";
import "../CSS/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="footer-container">
        <div className="left-container">
          <img
            className="main-logo"
            src='/logo.png'
            alt="Thresher Construction Logo"
          />
          <p className="footer-paragraph">Thresher Construction: HVAC, general contracting, and structural steel experts delivering quality services and exceptional customer satisfaction.</p>
        </div>
        <div className="middle-container">
          <h3>INFORMATION</h3>
          <ul className="services-list">
            <li className="single-services-list"><Link to='/about'>About Us</Link></li>
            <li className="single-services-list"><Link to='/contact'>Contact US</Link></li>
          </ul>
        </div>
        <div className="right-container">
          <h3>OUR SERVICES</h3>
          <ul className="information-list">
            <li className="single-information-list"><Link to='/service/hvac-services'>HVAC Services</Link></li>
            <li className="single-information-list"><Link to='/service/structural-steel-work'>Structural Steel</Link></li>
            <li className="single-information-list"><Link to='/service/general-contracting'>General Contracting</Link></li>
          </ul>
        </div>
      </div>
      <div className="watermark">
        © 2023 Thresher Construction. All rights reserved. | Website by Hough
        Concepts
      </div>
    </div>
  );
};

export default Footer;
