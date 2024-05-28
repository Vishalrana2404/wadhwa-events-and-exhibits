// Header.js

import React, { useState, useEffect } from 'react';
import './../css/Header.css'; // Import CSS file for styling
import logo from './../assets/logo/WadhwaLogo.svg'; // Import logo image
import bgVideo from './../assets/videos/bg-video.mp4'; // Import background video

const Header = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [logoSize, setLogoSize] = useState('big'); // State to track logo size
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0 && !isScrolled) {
            setIsScrolled(true);
            setLogoSize('small');
        } else if (window.scrollY === 0 && isScrolled) {
            setIsScrolled(false);
            setLogoSize('big');
        }
      };

      const handleLogoSize = () => {
          const logoElement = document.querySelector('.logo');
          if (logoElement) {
              if (window.scrollY > 0 && !isScrolled) {
                  setLogoSize('small');
              } else {
                  setLogoSize('big');
              }
          }
      };
  
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('scroll', handleLogoSize); // Listen for resize events
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('scroll', handleLogoSize); // Remove event listener on cleanup
      };
    }, []);
  
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
      <header className={`header ${isScrolled ? 'scrolled' : ''}`} style={{ backgroundColor: logoSize === 'big' ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.4)' }}>
        {/* Video Background */}
        <video className="background-video" autoPlay loop muted>
          <source src={bgVideo} type="video/mp4" />
          {/* Add additional video formats if necessary */}
        </video>
        <div className="video-overlay"></div>
  
        {/* Logo */}
        <img className={`logo ${isScrolled ? 'scrolled' : ''}`} src={logo} alt="Logo" />
  
        {/* Title */}
        <h1 className="title">Creativity For <span> Eternity </span></h1>
  
        {/* Navbar Toggle */}
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <div className={`hamburger ${isNavbarOpen ? 'open' : ''}`}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
  
        {/* Navbar Menu */}
        <nav className={`navbar-menu ${isNavbarOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/blogs">Blog</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/our-services">Our Services</a></li>
            <li><a href="News">News</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Header;