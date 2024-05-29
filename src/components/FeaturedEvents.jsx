import React, { useState } from 'react';
import './../css/FeaturedEvents.css'; // Import CSS file for styling
import featuredEvent1 from './../assets/featured-events-1.png';
import featuredEvent2 from './../assets/featured-events-2.png';
import featuredEvent3 from './../assets/featured-events-3.png';
import featuredEvent4 from './../assets/featured-events-4.png';

const FeaturedEvents = () => {

    return (
        <section className="featured-events">
            <div className="featured-events-left">
                <div className="featured-events-heading">
                    <h2>Featured</h2> 
                    <h2>Events !</h2>
                </div>
                <div className="featured-events-description">
                    <p>Each event highlights our dedication to innovative design and flawless execution. Discover how we transform ordinary spaces into extraordinary experiences</p>
                </div>
                <div className="featured-events-button">
                    <button className="explore-events-button">
                        Explore More<span className="arrow">&#10145;</span>
                    </button>
                </div>
            </div>
            <div className="featured-events-right">
                <div className="featured-event-image-card" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${featuredEvent1})` }}>
                    <h3 className="featured-event-image-card-heading">
                        Beach Party
                    </h3>
                    <p className="featured-events-image-card-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, aut. Hic sit nostrum vitae aliquid!
                    </p>
                </div>
                <div className="featured-event-image-card" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${featuredEvent2})` }}>
                    <h3 className="featured-event-image-card-heading">
                        Beach Party
                    </h3>
                    <p className="featured-events-image-card-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, aut. Hic sit nostrum vitae aliquid!
                    </p>
                </div>
                <div className="featured-event-image-card" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${featuredEvent3})` }}>
                    <h3 className="featured-event-image-card-heading">
                        Beach Party
                    </h3>
                    <p className="featured-events-image-card-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, aut. Hic sit nostrum vitae aliquid!
                    </p>
                </div>
                <div className="featured-event-image-card" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${featuredEvent4})` }}>
                    <h3 className="featured-event-image-card-heading">
                        Beach Party
                    </h3>
                    <p className="featured-events-image-card-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, aut. Hic sit nostrum vitae aliquid!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FeaturedEvents;
