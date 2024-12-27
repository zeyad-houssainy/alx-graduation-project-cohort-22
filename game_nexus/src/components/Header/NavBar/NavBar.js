// src/components/Header/Navbar/Navbar.js
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Navbar.css';
import { Outlet, Link } from "react-router-dom";
import ButtonGroupItem from '../../Common/ButtonGroupItem/ButtonGroupItem';



const Navbar = () => {
  const items = ['Games', 'Consoles', 'Action Figures', 'All Products'];
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-menu">
          <ButtonGroupItem items={items} />
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;