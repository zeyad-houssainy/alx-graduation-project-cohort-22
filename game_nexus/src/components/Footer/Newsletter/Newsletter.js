// src/components/Footer/Newsletter/Newsletter.js
import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <div className="footer-section newsletter">
      <h4>News & Updates</h4>
      <p>Sign up for our newsletter to receive the latest news and updates.</p>
      <form>
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default Newsletter;