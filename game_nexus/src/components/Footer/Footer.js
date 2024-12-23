// src/components/Footer/Footer.js
import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import ContactInfo from './ContactInfo/ContactInfo';
import Newsletter from './Newsletter/Newsletter';
import Copyright from './Copyright/Copyright';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <AboutUs />
        <ContactInfo />
        <Newsletter />
      </div>
        <Copyright />
    </footer>
  );
};

export default Footer;