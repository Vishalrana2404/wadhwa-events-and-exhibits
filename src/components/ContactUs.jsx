import React, {useState} from 'react';
import './../css/ContactUs.css';
import backgroundImage from './../assets/menu-background.jpg'; // Ensure to replace this with the correct path

const ContactUs = () => {

    const [highlightedInput, setHighlightedInput] = useState(null);

    const handleInputFocus = (event) => {
        setHighlightedInput(event.target);
    };

    const handleInputBlur = () => {
        setHighlightedInput(null);
    };

  return (
    <div className="contact-us">
        <section className="contact-us-top" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="overlay">
            <h1>Contact Us</h1>
            <p className="swagat-moto">Aapka Swagat Hai</p>
            <p>
                We're passionate about crafting unforgettable events, and on this page, you'll discover what sets us apart.
            </p>
            </div>
        </section>
        <div className="contact-us-data">
            <div className="contact-us-left-section">
                <h1>Let's talk with us</h1>
                <p>Questions, comments, or suggestions? Simply fill in the form and we'll be in touch shortly.</p>
                <ul>
                <li><i className="fa fa-map-marker" aria-hidden="true"></i> 1055 Arthur ave Elk Groot, 67. New Palmas South Carolina.</li>
                <li><i className="fa fa-phone" aria-hidden="true"></i> +1 234 678 9108 99</li>
                <li><i className="fa fa-envelope" aria-hidden="true"></i> contact@deepailibenpatel.com</li>
                </ul>
                <div className="contact-us-social-icons">
                <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                </div>
                <h2>For more <span>Information</span></h2>
                <div className="brochure-btn-div">
                    <button className="contact-us-btn">Brochure 1</button>
                    <button className="contact-us-btn">Brochure 2</button>
                </div>
            </div>
            <div className="contact-us-right-section">
                <div className="contact-us-radio-buttons">
                    <label>
                        <input type="radio" name="radio" defaultChecked />
                        Contact us
                    </label>
                    <label>
                        <input type="radio" name="radio" />
                        Appointment booking
                    </label>
                </div>
                <form>
                    <div className="contact-us-input-field">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Rohan" onFocus={handleInputFocus} onBlur={handleInputBlur}
                        />
                    </div>
                    <div className="contact-us-input-field">
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" placeholder="Last Name" onFocus={handleInputFocus} onBlur={handleInputBlur}
                        />
                    </div>
                    <div className="contact-us-input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Email" onFocus={handleInputFocus} onBlur={handleInputBlur}
                        />
                    </div>
                    <div className="contact-us-input-field">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" placeholder="Phone Number" onFocus={handleInputFocus} onBlur={handleInputBlur} />
                    </div>
                    <div className="contact-us-input-field">
                        <label htmlFor="message">Your Message...</label>
                        <textarea id="message" placeholder="Your Message..." rows="6" onFocus={handleInputFocus} onBlur={handleInputBlur}
                        ></textarea>
                    </div>
                    <div className="send-message-btn-div">
                        <button type="submit" className="send-message-btn">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
};

export default ContactUs;
