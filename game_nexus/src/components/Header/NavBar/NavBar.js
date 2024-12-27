// src/components/Header/Navbar/Navbar.js
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Navbar.css';
import { Outlet, Link } from "react-router-dom";
import ButtonGroupItem from '../../Common/ButtonGroupItem/ButtonGroupItem';



const Navbar = () => {
  const items = [
    { id: 1, label: 'Games', link: "/Games" },
    { id: 2, label: 'Consoles', link: "/Consoles" },
    { id: 3, label: 'Action Figures', link: "/Action Figures" },
    { id: 4, label: 'All Products', link: '/productlist' }
  ];
  // const items = ["Home",'Games','Consoles','Action Figures','All Products']
  
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-menu">
          <li>
          {/* <Link to="/productlist">All Products</Link> */}
          <ButtonGroupItem items={items} />
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;