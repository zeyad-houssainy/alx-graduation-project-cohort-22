// src/components/Header/Navbar/Navbar.js
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Navbar.css';
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  
}

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-menu">
          <li><Link to="/">Consoles</Link></li>
          <li><Link to="/">Games</Link></li>
          <li><Link to="/">Figures & Toys</Link></li>
          <li><Link to="/">Streams</Link></li>
        </ul>
        <SearchBar /> {/* Include the SearchBar component */}
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;