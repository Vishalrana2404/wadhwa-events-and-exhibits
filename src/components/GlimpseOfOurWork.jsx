import React from 'react';
import './../css/GlimpseOfOurWork.css'; // Import CSS file for styling
import image1 from './../assets/who-are-we-1.jpg';
import image2 from './../assets/who-are-we-2.jpg';
import image3 from './../assets/who-are-we-3.jpg';
import image4 from './../assets/who-are-we-1.jpg';
import image5 from './../assets/who-are-we-2.jpg';
import image6 from './../assets/who-are-we-1.jpg';
import image7 from './../assets/who-are-we-2.jpg';
import image8 from './../assets/who-are-we-3.jpg';

const GlimpseOfOurWork = () => {
    return (
        <section className="work-gallery">
            <h2 className="sub-heading white">Have a glimpse of</h2>
            <h1 className="main-heading yellow">Our Work !</h1>
            <div className="glimpse-of-our-work-image-row">
                <div className="glimpse-of-our-work-image-container">
                    <img src={image1} alt="Image 1" />
                </div>
                <div className="glimpse-of-our-work-image-container">
                    <img src={image2} alt="Image 2" />
                </div>
                <div className="glimpse-of-our-work-image-container">
                    <img src={image3} alt="Image 3" />
                </div>
            </div>
            <div className="glimpse-of-our-work-image-row">
                <div className="glimpse-of-our-work-image-container">
                    <img src={image4} alt="Image 4" />
                </div>
                <div className="glimpse-of-our-work-image-container">
                    <img src={image5} alt="Image 5" />
                </div>
            </div>
            <div className="glimpse-of-our-work-image-row">
                <div className="glimpse-of-our-work-image-container">
                    <img src={image6} alt="Image 6" />
                </div>
                <div className="glimpse-of-our-work-image-container">
                    <img src={image7} alt="Image 7" />
                </div>
                <div className="glimpse-of-our-work-image-container">
                    <img src={image8} alt="Image 8" />
                </div>
            </div>
            <button className="explore-button">Explore Gallery <span className="arrow">&#10145;</span></button>
        </section>
    );
};

export default GlimpseOfOurWork;
