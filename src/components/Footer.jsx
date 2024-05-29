import React from 'react';
import './../css/Footer.css'; // Import the CSS file
import logo from './../assets/logo/WadhwaLogo.svg'; // Import logo image
import facebookIcon from './../assets/footer-facebook-icon.png';
import linkedinIcon from './../assets/footer-linkedin-icon.png';
import twitterIcon from './../assets/footer-twitter-icon.png';
import instagramIcon from './../assets/footer-instagram-icon.png';

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
            <a href="/what-we-do" className="footer-link">What We Do</a>
            <a href="/gallery" className="footer-link">Gallery</a>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-heading">Work</h4>
            <a href="/portfolio" className="footer-link">Portfolio</a>
            <a href="/events" className="footer-link">Events</a>
          </div>

          <div className="footer-column">
            <h4 className="footer-column-heading">Contact</h4>
            <a href="/contact-us" className="footer-link">Book Appointment</a>
            <a href="/contact-us" className="footer-link">Contact Us</a>
          </div>
        </div>

        <div className="footer-section footer-right">
          <a href="www.facebook.com" className="footer-social-button facebook">
            <img className="footer-icons" src={facebookIcon} alt="" /> <span className="footer-icon-name">Facebook</span>
          </a>
          <a href="www.linkedin.com" className="footer-social-button linkedin">
            <img className="footer-icons" src={linkedinIcon} alt="" /> <span className="footer-icon-name">Linkedin</span>
          </a>
          <a href="www.twitter.com" className="footer-social-button twitter">
            <img className="footer-icons" src={twitterIcon} alt="" /> <span className="footer-icon-name">Twitter</span>
          </a>
          <a href="www.instagram.com" className="footer-social-button instagram">
            <img className="footer-icons" src={instagramIcon} alt="" /> <span className="footer-icon-name">Instagram</span>
          </a>
        </div>
      </div>
      <hr className="footer-horizontal-line" />
      <p className="copyright">© 2024 - All Rights Reserved - Wadhwa Events and Exhibits</p>
    </footer>
  );
};

export default Footer;