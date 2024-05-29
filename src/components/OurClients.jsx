import React, { useState, useEffect } from 'react';
import './../css/OurClients.css'; // Import CSS file for styling
import ourClients1 from './../assets/our-clients-1.png';
import ourClients2 from './../assets/our-clients-2.png';
import ourClients3 from './../assets/our-clients-3.png';
import ourClients4 from './../assets/our-clients-4.png';
import ourClients5 from './../assets/our-clients-5.png';
import ourClients6 from './../assets/our-clients-6.png';
import ourClients7 from './../assets/our-clients-5.png';
import ourClients8 from './../assets/our-clients-2.png';
import ourClients9 from './../assets/our-clients-1.png';
import ourClients10 from './../assets/our-clients-4.png';


const images = [
    ourClients1,
    ourClients2,
    ourClients3,
    ourClients4,
    ourClients5,
    ourClients6,
    ourClients7,
    ourClients8,
    ourClients9,
    ourClients10
];

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};


const OurClients = () => {

    const [flippedIndex, setFlippedIndex] = useState(null);
    const [imageSources, setImageSources] = useState([]);

    useEffect(() => {
        const shuffledImages = shuffleArray(images);
        setImageSources(shuffledImages.slice(0, 6));
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
          const randomIndex = Math.floor(Math.random() * imageSources.length);
          setFlippedIndex(randomIndex);
          setTimeout(() => {
            setImageSources(prevSources => {
              const newSources = [...prevSources];
              newSources[randomIndex] = images[Math.floor(Math.random() * images.length)];
              return newSources;
            });
          }, 1900); // Delay changing the image source to ensure flipping animation completes first
        }, 2000); // Change the image every 1 second
    
        return () => clearInterval(timer);
    }, [imageSources]);

    const handleImageClick = (index) => {
        setFlippedIndex(index);
        setImageSources(prevSources => {
        const newSources = [...prevSources];
        newSources[index] = images[Math.floor(Math.random() * images.length)];
        return newSources;
        });
    };

    const renderImages = () => {
        return imageSources.map((image, index) => (
        <div
            key={index}
            className={`client-img-card ${index === flippedIndex ? 'flipped' : ''}`}
            onClick={() => handleImageClick(index)}
        >
            <img src={image} alt={`Client ${index}`} />
        </div>
        ));
    };

    return (
        <section className="our-clients">
            <div className="our-clients-left">
                <div className="our-clients-heading">
                    <h2>OUR Clients</h2>
                </div>
                <div className="our-clients-description">
                    <p>Trusted by a diverse range of clients, from local startups to multinational corporations, we are proud to have partnered with these esteemed organizations to bring their events to life!</p>
                </div>
            </div>
            <div className="our-clients-right">
                <div className="client-img-card-div">
                    {renderImages()}
                    {/* <img src={ourClients1} alt="Our Client 1" className="client-img-card" />
                    <img src={ourClients2} alt="Our Client 2" className="client-img-card" />
                    <img src={ourClients3} alt="Our Client 3" className="client-img-card" />
                    <img src={ourClients4} alt="Our Client 4" className="client-img-card" />
                    <img src={ourClients5} alt="Our Client 5" className="client-img-card" />
                    <img src={ourClients6} alt="Our Client 6" className="client-img-card" /> */}
                </div>
            </div>
        </section>
    );
};

export default OurClients;
