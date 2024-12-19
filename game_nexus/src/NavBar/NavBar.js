import React from 'react';
import "./NavBar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <span className="navbar-logo">GameVerse</span> {/* Logo/Name */}
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#" className="navbar-link"> {/* Static links for now */}
              Consoles
            </a>
          </li>
          <li className="navbar-item">
            <div className="dropdown"> {/* Dropdown for Games */}
              <a href="#" className="navbar-link dropdown-toggle">
                Games
              </a>
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item">
                  PlayStation
                </a>
                <a href="#" className="dropdown-item">
                  Xbox
                </a>
                <a href="#" className="dropdown-item">
                  PC
                </a>
                <a href="#" className="dropdown-item">
                  Nintendo
                </a>
              </div>
            </div>
          </li>
          <li className="navbar-item">
            <div className="dropdown"> {/* Dropdown for Figures & Toys */}
              <a href="#" className="navbar-link dropdown-toggle">
                Figures & Toys
              </a>
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item">
                  Action Figures
                </a>
                <a href="#" className="dropdown-item">
                  Statues
                </a>
                <a href="#" className="dropdown-item">
                  Collectibles
                </a>
              </div>
            </div>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              Streams
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              Cart
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              News and Articles
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              Login/Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;