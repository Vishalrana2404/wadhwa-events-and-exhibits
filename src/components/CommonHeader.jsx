// Header.js

import React, { useState, useEffect } from 'react';
import './../css/CommonHeader.css'; // Import CSS file for styling
import logo from './../assets/logo/WadhwaLogo.svg'; // Import logo image

const CommonHeader = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  
    const toggleNavbar = () => {
      setIsNavbarOpen(!isNavbarOpen);
    };

    useEffect(() => {
      // Conditionally add class to body element based on navbar state
      if (isNavbarOpen) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
    }, [isNavbarOpen]);
  
    return (
      <header className="common-header" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>        
  
        <div className="logo-hamburger">
          {/* Logo */}
          <img className="common-header-logo" src={logo} alt="Logo" />
    
          {/* Navbar Toggle */}
          <div className="common-header-navbar-toggle" onClick={toggleNavbar}>
            <div className={`common-header-hamburger ${isNavbarOpen ? 'open' : ''}`}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
  
        {/* Navbar Menu */}
        <nav className={`common-header-navbar-menu ${isNavbarOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/what-we-do">What We Do</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/blogs">Blog</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default CommonHeader;