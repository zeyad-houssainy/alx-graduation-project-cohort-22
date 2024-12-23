// src/components/Header/Navbar/Navbar.js
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li><a href="#" className="navbar-link">Consoles</a></li>
        <li><a href="#" className="navbar-link">Games</a></li>
        <li><a href="#" className="navbar-link">Figures & Toys</a></li>
        <li><a href="#" className="navbar-link">Streams</a></li>
      </ul>
      <SearchBar /> {/* Include the SearchBar component */}
    </nav>
  );
};

export default Navbar;