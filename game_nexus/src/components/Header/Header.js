// src/components/Header/Header.js
import React from 'react';
import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';
import UserMenu from './UserMenu/UserMenu';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* <Logo /> */}
        <Navbar />
        {/* <UserMenu /> */}
      </div>
    </header>
  );
};

export default Header;