import React from 'react';
import './../css/Footer.css'; // Import the CSS file
import logo from './../assets/logo/WadhwaLogo.svg'; // Import logo image

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-left">
          <img src={logo} alt="Company Logo" className="footer-logo" />
          <p className="footer-description">Empowering memorable moments, one event at a time.</p>
        </div>

        <div className="footer-section footer-center">
          <div className="footer-column">
            <h4 className="footer-column-heading">Company</h4>
            <a href="/about" className="footer-link">About Us</a>
            <a href="/services" className="footer-link">Services</a>
            <a href="/portfolio" className="footer-link">Portfolio</a>
            <a href="/blogs" className="footer-link">Blogs</a>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-heading">Contact</h4>
            <a href="#" className="footer-link">Link 2</a>
            <a href="#" className="footer-link">Link 3</a>
            <a href="#" className="footer-link">Link 4</a>
            <a href="#" className="footer-link">Link 5</a>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-heading">Section 3</h4>
            <a href="#" className="footer-link">Link 1</a>
            <a href="#" className="footer-link">Link 2</a>
            <a href="#" className="footer-link">Link 3</a>
            <a href="#" className="footer-link">Link 4</a>
          </div>
        </div>

        <div className="footer-section footer-right">
          <a href="#" className="footer-social-button facebook">
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a href="#" className="footer-social-button linkedin">
            <i className="fab fa-linkedin"></i> Linkedin
          </a>
          <a href="#" className="footer-social-button twitter">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="#" className="footer-social-button instagram">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>
      </div>
      <hr className="footer-horizontal-line" />
      <p className="copyright">© 2024 - All Rights Reserved - Wadhwa Events and Exhibits</p>
    </footer>
  );
};

export default Footer;