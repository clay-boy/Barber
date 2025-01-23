import React, { useState } from 'react';
import './Navbar.css';
import 'font-awesome/css/font-awesome.min.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <i className="fa fa-scissors"></i> Barber Shop
        </a>
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="menu-icon">{isOpen ? '✖' : '☰'}</span>
        </button>
        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/booking">Booking</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
