import React, { useEffect, useState } from 'react';
import './../css/AboutUs.css';
import backgroundImage from './../assets/common-top-background.png'; // Ensure to replace this with the correct path
import sectionBImage from './../assets/about-us-main-image.png'; // Ensure to replace this with the correct path
import numbersImage from './../assets/about-us-numbers-image.png';
import logo1 from './../assets/blog-1.png';
import logo2 from './../assets/blog-2.png';
import logo3 from './../assets/blog-3.png';
import logo4 from './../assets/featured-blog-bg.png';
import logo5 from './../assets/what-we-do-after-hover-3.png';
import teamMember1BWImage from './../assets/what-we-do-without-hover-1.png';
import teamMember2BWImage from './../assets/what-we-do-without-hover-2.png';
import teamMember3BWImage from './../assets/what-we-do-without-hover-3.png';
import teamMember4BWImage from './../assets/what-we-do-without-hover-4.png';
import teamMember1ColorImage from './../assets/what-we-do-after-hover-1.png';
import teamMember2ColorImage from './../assets/what-we-do-after-hover-2.png';
import teamMember3ColorImage from './../assets/what-we-do-after-hover-3.png';
import teamMember4ColorImage from './../assets/what-we-do-after-hover-4.png';

const logos = [logo1, logo2, logo3, logo4, logo5,logo1, logo2, logo3, logo4, logo5];

const AboutUs = () => {
    return (
        <div className="about-us">
            <AboutUsTop />
            <AboutUsDesc />
            <NumbersSection />
            <RenownedNamesSection />   
            <UnforgettableExperience />
            <TeamMemberSection />  
        </div>
    );
  };

const AboutUsTop = () => (
    <section className="about-us-top" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="overlay">
            <h1>About Us</h1>
            <p className="swagat-moto">
                Aapka Swagat Hai
            </p>
            <p>
                We're passionate about crafting unforgettable events, and on this page, you'll discover what sets us apart.
            </p>
        </div>
    </section>
);


const AboutUsDesc = () => (
    <section className="about-us-desc">
        <div className="left">
          <h2>WADHWA EVENTS AND EXHIBITS</h2>
          <p>
            We are Wadhwa Events and Exhibits, a full-service event management company passionate about crafting unforgettable experiences.
            For over 10 years, we've transformed ideas into reality, exceeding client expectations with meticulous planning and flawless execution.
            From grand exhibitions to intimate gatherings, we handle every detail with creativity, dedication, and expertise.
            <br /><br />
            Our team of seasoned event professionals is committed to your vision. We take the time to understand your goals and objectives, 
            then curate a personalized plan that brings your dreams to life. Let us handle the stress of event orchestration, so you can focus 
            on what truly matters: making memories that last a lifetime.
          </p>
        </div>
        <div className="right">
          <img src={sectionBImage} alt="Event" />
        </div>
      </section>
);

const NumbersSection = () => {
    const [experience, setExperience] = useState(0);
    const [clients, setClients] = useState(0);
    const [events, setEvents] = useState(0);
    const [awards, setAwards] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const numbersSection = document.getElementById('numbers-section');
        const rect = numbersSection.getBoundingClientRect();
        console.log(rect.top);
        console.log(rect.bottom);
        console.log(window.innerHeight);
        if (rect.top >= -120 && rect.bottom <= window.innerHeight) {
          console.log('asdfasd');
          animateNumbers();
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const animateNumbers = () => {
        const duration = 2000; // Animation duration in milliseconds
        const start = performance.now();
    
        const step = (timestamp) => {
          const progress = Math.min((timestamp - start) / duration, 1);
    
          setExperience(Math.floor(progress * 10));
          setClients(Math.floor(progress * 50));
          setEvents(Math.floor(progress * 300));
          setAwards(Math.floor(progress * 20));
    
          if (progress < 1) {
            requestAnimationFrame(step);
          }
        };
    
        requestAnimationFrame(step);
      };
  
    return (
      <section id="numbers-section" className="numbers-section">
        <div className="left">
          <img src={numbersImage} alt="Numbers" />
        </div>
        <div className="right">
          <h2>Numbers That Matter</h2>
          <p>
            Our commitment to excellence translates into real results for our clients. Here are a few highlights that showcase the impact we deliver:
          </p>
          <div className="numbers">
            <div className="number">
              <h3>{experience.toFixed(0)}+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="number">
              <h3>{clients.toFixed(0)}+</h3>
              <p>Clients Satisfied</p>
            </div>
            <div className="number">
              <h3>{events.toFixed(0)}+</h3>
              <p>Events Per Year</p>
            </div>
            <div className="number">
              <h3>{awards.toFixed(0)}+</h3>
              <p>Awards Won</p>
            </div>
          </div>
        </div>
      </section>
    );
};

const RenownedNamesSection = () => (
<section className="renowned-names-section">
    <h2>Working With Renowned Names</h2>
    <div className="carousel">
    <div className="carousel-track">
        {logos.concat(logos).map((logo, index) => (
        <img key={index} src={logo} alt={`Logo ${index % logos.length + 1}`} />
        ))}
        {/* Duplicate images to create seamless looping */}
    </div>
    </div>
</section>
);

const UnforgettableExperience = () => (
    <section className="unforgettable-experiences">
      <div className="unforgettable-experiences-container">
        <h2 className="unforgettable-experiences-title">CRAFTING UNFORGETTABLE EXPERIENCES</h2>
        <p className="unforgettable-experiences-description">
          At Wadhwa Events and Exhibits, we believe success goes beyond flawless
          execution. It's about fostering a culture that prioritizes excellence
          in everything we do.
        </p>

        <div className="unforgettable-experiences-features">
          <div className="unforgettable-experiences-feature">
            <img src="/images/cube.png" alt="Creativity Unleashed" />
            <h3 className="unforgettable-experiences-feature-title">CREATIVITY UNLEASHED</h3>
            <p className="unforgettable-experiences-feature-description">
              We believe in the power of imagination. Our team brings fresh
              ideas and innovative solutions to every project, transforming your
              vision into a truly remarkable event.
            </p>
          </div>

          <div className="unforgettable-experiences-feature">
            <img src="/images/cube.png" alt="Unwavering Commitment" />
            <h3 className="unforgettable-experiences-feature-title">UNWAVERING COMMITMENT</h3>
            <p className="unforgettable-experiences-feature-description">
              Your event is our priority. We are dedicated to exceeding your
              expectations with meticulous planning, proactive communication,
              and unwavering attention to detail.
            </p>
          </div>

          <div className="unforgettable-experiences-feature">
            <img src="/images/cube.png" alt="Collaboration is Key" />
            <h3 className="unforgettable-experiences-feature-title">COLLABORATION IS KEY</h3>
            <p className="unforgettable-experiences-feature-description">
              We believe in the power of collaboration. We work closely with you,
              understanding your goals, preferences, and budget to create an
              event that reflects your unique style and vision.
            </p>
          </div>
        </div>
      </div>
    </section>
);

const teamMembers = [
    {
      name: 'PRIYA SHARMA',
      designation: 'Event Director',
      bwImage: teamMember1BWImage,
      colorImage: teamMember1ColorImage,
    },
    {
      name: 'RAHUL KAPOOR',
      designation: 'Creative Strategist',
      bwImage: teamMember2BWImage,
      colorImage: teamMember2ColorImage,
    },
    {
      name: 'AISHA SINGH',
      designation: 'Logistics Coordinator',
      bwImage: teamMember3BWImage,
      colorImage: teamMember3ColorImage,
    },
    {
      name: 'AMIT PATEL',
      designation: 'Client Relationship Manager',
      bwImage: teamMember4BWImage,
      colorImage: teamMember4ColorImage,
    },
];

const TeamMember = ({ name, designation, bwImage, colorImage }) => {
    return (
      <div className="team-member">
        <img
          src={bwImage}
          alt={name}
          className="team-member-bw-image"
        />
        <img
          src={colorImage}
          alt={name}
          className="team-member-color-image"
        />
        <div className="member-info">
          <p className="team-member-name">{name}</p>
          <p className="team-member-designation">{designation}</p>
        </div>
      </div>
    );
};

const TeamMemberSection = () => (
    <section className="meet-the-team">
      <div className="meet-the-team-container">
        <h2 className="meet-the-team-title">MEET THE DREAM TEAM</h2>
        <p className="meet-the-team-description">
          The Masterminds Behind Memorable Events. Our passionate team brings a
          wealth of experience and creativity to every project, ensuring your
          event is flawlessly executed and becomes a cherished memory.
        </p>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
);


export default AboutUs;