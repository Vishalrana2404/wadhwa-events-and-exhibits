import React from 'react';
import './../css/Events.css';
import backgroundImage from './../assets/common-top-background.png'; // Ensure to replace this with the correct path

import tasteofindia from './../assets/blog-1.png';
import bollywood from './../assets/blog-1.png';
import royalmughal from './../assets/blog-1.png';

import mehendi from './../assets/who-are-we-1.jpg';
import holi from './../assets/who-are-we-1.jpg';
import housewarming from './../assets/who-are-we-1.jpg';

const Events = () => {
    return (
        <div className="events">
            <EventsTop />
            <EventsData />
        </div>
    );
  };

  

const EventsTop = () => (
    <section className="events-top" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="overlay">
            <h1>Events</h1>
            <p className="swagat-moto">
                Aapka Swagat Hai
            </p>
            <p>
                We're passionate about crafting unforgettable events, and on this page, you'll discover what sets us apart.
            </p>
        </div>
    </section>
);

const EventsData = () => (
    <div className="events-data-container">
      <div className="events-data-heading">
        <h1 className="events-data-title">Signature Events</h1>
        <p className="events-data-description">Celebrate in grand style with our signature events, featuring themes inspired by Indian royalty, cinema, and culinary heritage.</p>
      </div>
      <div className="events-data-cards-container">
        <div className="events-data-card">
          <img src={tasteofindia} alt="Taste of India" />
          <h2 className="events-data-card-title">Taste of India</h2>
          <p className="events-data-card-description">Embark on a culinary journey through the diverse flavors of India.</p>
        </div>
        <div className="events-data-card">
          <img src={bollywood} alt="Bollywood Extravaganza" />
          <h2 className="events-data-card-title">Bollywood Extravaganza</h2>
          <p className="events-data-card-description">Celebrate the magic of Indian cinema with a dazzling gala inspired by Bollywood.</p>
        </div>
        <div className="events-data-card">
          <img src={royalmughal} alt="Royal Mughal Night" />
          <h2 className="events-data-card-title">Royal Mughal Night</h2>
          <p className="events-data-card-description">Immerse your guests in the opulence of a bygone era with a Maharaja-themed ball featuring traditional Indian decor.</p>
        </div>
      </div>
      <div className="events-data-heading">
        <h1 className="events-data-title">Social Gatherings</h1>
        <p className="events-data-description">Make your social events vibrant and joyous with our expertise in planning traditional ceremonies, lively parties, and stylish soirees.</p>
      </div>
      <div className="events-data-cards-container">
        <div className="events-data-card">
          <img src={mehendi} alt="Mehndi Ceremony" />
          <h2 className="events-data-card-title">Mehndi Ceremony</h2>
          <p className="events-data-card-description">Make your pre-wedding celebration a vibrant and joyous occasion with a meticulously planned Mehndi ceremony.</p>
        </div>
        <div className="events-data-card">
          <img src={holi} alt="Holi Bash" />
          <h2 className="events-data-card-title">Holi Bash</h2>
          <p className="events-data-card-description">Embrace the spirit of colors with a vibrant Holi bash.</p>
        </div>
        <div className="events-data-card">
          <img src={housewarming} alt="Housewarming Ceremony" />
          <h2 className="events-data-card-title">Housewarming Ceremony</h2>
          <p className="events-data-card-description">Celebrate a new beginning with a stylish housewarming soiree.</p>
        </div>
      </div>
      <div className="events-data-heading">
        <h1 className="events-data-title">Meetings & Conferences</h1>
        <p className="events-data-description">Host thought-provoking conferences, summits, and forums that address key issues and foster collaboration in India.</p>
      </div>
      <div className="events-data-cards-container">
        <div className="events-data-card">
          <img src={tasteofindia} alt="Wellness Summit" />
          <h2 className="events-data-card-title">Wellness Summit</h2>
          <p className="events-data-card-description">Explore the ancient Indian science of Ayurveda at a thought-provoking summit.</p>
        </div>
        <div className="events-data-card">
          <img src={bollywood} alt="Development Conference" />
          <h2 className="events-data-card-title">Development Conference</h2>
          <p className="events-data-card-description">A platform for key stakeholders to discuss and implement sustainability.</p>
        </div>
        <div className="events-data-card">
          <img src={royalmughal} alt="Women Leadership Forum" />
          <h2 className="events-data-card-title">Women Leadership Forum</h2>
          <p className="events-data-card-description">Empowering women entrepreneurs and leaders in India.</p>
        </div>
      </div>
      <div className="events-data-heading">
        <h1 className="events-data-title">Themed Experiences</h1>
        <p className="events-data-description">Make your social events vibrant and joyous with our expertise in planning traditional ceremonies, lively parties, and stylish soirees.</p>
      </div>
      <div className="events-data-cards-container">
        <div className="events-data-card">
          <img src={mehendi} alt="Monsoon Masquerade Ball" />
          <h2 className="events-data-card-title">Monsoon Masquerade Ball</h2>
          <p className="events-data-card-description">Take your guests on a unique adventure with themed experiences that showcase India's rich culture, history, and diverse flavors.</p>
        </div>
        <div className="events-data-card">
          <img src={holi} alt="Spice Route Soiree" />
          <h2 className="events-data-card-title">Spice Route Soiree</h2>
          <p className="events-data-card-description">Embark on a culinary adventure along the ancient spice route.</p>
        </div>
        <div className="events-data-card">
          <img src={housewarming} alt="Bollywood Studio Tour" />
          <h2 className="events-data-card-title">Bollywood Studio Tour</h2>
          <p className="events-data-card-description">Go behind the scenes of the vibrant Bollywood film industry with a one-of-a-kind studio tour.</p>
        </div>
      </div>
    </div>
);

  
export default Events;