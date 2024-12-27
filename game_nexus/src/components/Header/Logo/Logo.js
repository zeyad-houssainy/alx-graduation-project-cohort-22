import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/" className="logo-link">GameVerse</Link>
    </div>
  );
};

export default Logo;
