import React from 'react';
import './../css/CreativityForEternity.css';
import backGroundImage from './../assets/what-we-do-bg-1.png'


function CreativityForEternity() {
    return (
        <div className="glassmorphism-container" style={{ backgroundImage: `url(${backGroundImage})` }}>
            <div className="glassmorphism-content">
            <h1 className="glassmorphism-heading">Creativity For <span>Eternity</span></h1>
            <p className="glassmorphism-description">
                Ready to turn your visions into unforgettable experiences? 
                <br />
                Let our event management expertise bring your dreams to life.
            </p>
            <div className="glassmorphism-buttons">
                <button className="glassmorphism-button">Book Appointment</button>
                <button className="glassmorphism-button">See Clients Work</button>
            </div>
            </div>
        </div>
    );
}

export default CreativityForEternity;