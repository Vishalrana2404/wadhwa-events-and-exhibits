import React, { useState, useEffect, useRef } from 'react';
import './../css/CustomerTestimonials.css'; // Import CSS file for styling

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import userImage1 from './../assets/who-are-we-1.jpg';
import userImage2 from './../assets/who-are-we-2.jpg';
import userImage3 from './../assets/who-are-we-3.jpg';
import userImage4 from './../assets/what-we-do-after-hover-1.png';
import userImage5 from './../assets/what-we-do-after-hover-2.png';
import userImage6 from './../assets/what-we-do-after-hover-3.png';

const CustomerTestimonials = () => {

    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    
    const testimonials = [
        { 
            review: "This character description generator will generate a fairly random description of a belonging to a random race. ", 
            img: userImage1, 
            name: "John Doe 1" 
        },
        { 
            review: "However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details.", 
            img: userImage2, 
            name: "Jane Smith 1" 
        },
        { 
            review: "The generator does take into account which race is randomly picked, and changes some of the details accordingly. For example, if the", 
            img: userImage3, 
            name: "Michael Johnson 1" 
        },
        { 
            review: "character is an elf, they will have a higher chance of looking good and clean, they will, of course, have an elvish name, and tend to be related to more elvish related towns and people.", 
            img: userImage4, 
            name: "John Doe 2" 
        },
        { 
            review: "I've made the descriptions as detailed as possible, while also withholding as many details as possible. This may sound odd, but I've done it b", 
            img: userImage5, 
            name: "Jane Smith 2" 
        },
        { 
            review: "mostly describing how a character looks, rather than his or her personality. I've tried to make the character's looks and some vague personality traits dictate what kind of person he or she could be.", 
            img: userImage6, 
            name: "Michael Johnson 2" 
        }
    ];

    return (
        <section className="testimonials">
            <h1 className="testimonials-main-heading yellow">Customer Testimonials</h1>
            <h2 className="testimonials-sub-heading white">See what our clients are saying about their extraordinary event experiences with us!</h2>
            <div className="carousel">
                <div className="carousel-inner">                    
                    <div className='m-auto'>
                        <div className="mt-20">
                            <Slider {...settings} infinite={true}>
                                {testimonials.map((d) => (
                                    <div key={d.name} className="testimonial-div">                
                                        <div className="flex flex-col items-center justify-center gap-4 p-4">
                                            <p className="text-center testimonial-review">{d.review}</p>
                                        </div>
                                        <div className='testimonial-img-div'>
                                            <img src={d.img} alt="" className="h-60 w-60 rounded-full testimonial-img"/>
                                        </div>
                                        <p className="testimonial-name">{d.name}</p>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    
                    </div>
                </div>
            </div>
        </section>
      );
};

export default CustomerTestimonials;
