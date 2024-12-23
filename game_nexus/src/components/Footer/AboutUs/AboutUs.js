// src/components/Footer/AboutUs/AboutUs.js
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="footer-section about-us">
      <h4>About Us</h4>
      <ul>
        <li><a href="#">Our Story</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Careers</a></li>
      </ul>
    </div>
  );
};

export default AboutUs;