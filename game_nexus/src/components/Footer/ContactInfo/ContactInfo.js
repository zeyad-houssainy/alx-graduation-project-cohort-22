// src/components/Footer/ContactInfo/ContactInfo.js
import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
  return (
    <div className="footer-section contact-info">
      <h4>Customer Service</h4>
      <ul>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Shipping & Returns</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms & Conditions</a></li>
      </ul>
    </div>
  );
};

export default ContactInfo;