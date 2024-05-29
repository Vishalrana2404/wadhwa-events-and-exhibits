import React, {useState} from 'react';
import './../css/Portfolio.css';
import backgroundImage from './../assets/common-top-background.png'; // Ensure to replace this with the correct path
import img1 from './../assets/blog-1.png';
import img2 from './../assets/blog-2.png';
import img3 from './../assets/blog-3.png';
import img4 from './../assets/blog-1.png';
import img5 from './../assets/blog-2.png';
import img6 from './../assets/blog-3.png';
import img7 from './../assets/blog-1.png';
import img8 from './../assets/blog-2.png';
import img9 from './../assets/blog-3.png';
import img10 from './../assets/blog-1.png';
import img11 from './../assets/blog-2.png';
import img12 from './../assets/blog-3.png';
import logo1 from './../assets/blog-1.png';
import logo2 from './../assets/blog-2.png';
import logo3 from './../assets/blog-3.png';
import logo4 from './../assets/featured-blog-bg.png';
import logo5 from './../assets/what-we-do-after-hover-3.png';
import ModalCarousel from './../components/PortfolioModalCarousel';

const logos = [logo1, logo2, logo3, logo4, logo5,logo1, logo2, logo3, logo4, logo5];

const Portfolio = () => {

    const [imageHovered, setImageHovered] = useState(null); // Store index of hovered image
    const [activeTab, setActiveTab] = useState('Music Event');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleImageHover = (index) => {
        setImageHovered(index);
      };
    
      const handleImageLeave = () => {
        setImageHovered(null);
      };
    
      const handleTabClick = (tab) => {
        setActiveTab(tab);
      };
    
      const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };
    

    const tabImages = {
        'Music Event': [img1, img2, img3, img4, img9, img10, img11],
        'Corporate Event': [img5, img6, img7, img8, img6, img7, img8],
        'Special Event': [img9, img10, img11, img12, img10, img11, img12],
        'Sport Event': [img10, img11, img12, img11, img11, img12, img11],
    };

    const images = [
        {
            src: img1,
            alt: 'Image 1',
            colorSrc: img2
        },
        {
            src: img2,
            alt: 'Image 2',
            colorSrc: img3
        },
        {
            src: img3,
            alt: 'Image 3',
            colorSrc: img4
        },
        {
            src: img4,
            alt: 'Image 4',
            colorSrc: img1
        },
    ];

  return (
    <div className="portfolio">
        <section className="portfolio-top" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="overlay">
            <h1>Portfolio</h1>
            <p className="swagat-moto">Aapka Swagat Hai</p>
            <p>
                We're passionate about crafting unforgettable events, and on this page, you'll discover what sets us apart.
            </p>
            </div>
        </section>
        <section className="portfolio-data">
            <div className="portfolio-image-grid">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`portfolio-image-container ${imageHovered === index ? 'portfolio-image-hovered' : ''} ${index % 2 === 0 ? 'left-tilt' : 'right-tilt'}`}
                        onMouseEnter={() => handleImageHover(index)}
                        onMouseLeave={handleImageLeave}
                        style={
                        index === 0
                            ? { left: '6%' }
                            : index === 1
                            ? { left: '3%' }
                            : index === 2
                            ? { left: '0%' }
                            : { left : '-3%' }
                        }
                        >
                        <div className="artist-name">ABC</div>
                        <img
                        src={imageHovered === index ? image.colorSrc : image.src}
                        alt={image.alt}
                        className={`portfolio-image ${imageHovered === index ? 'portfolio-color-image' : ''}`}
                        />
                    </div>
                ))}
            </div>
            <p className="portfolio-description">
                Lorem ipsum dolor sit amet consectetur. Rhoncus sit amet porttitor ornare ut vel consequat quam mauris. Urna mattis diam at eget non. Neque
                nulla dignissim facilisi phasellus ornare feugiat nulla aliquet quam. Risus vestibulum viverra et sagittis lacus. Lectus malesuada a gravida
                etiam volutpat. Cursus sed eu interdum integer elementum.
            </p>
        </section>
        <section className="portfolio-tabs">
          <div className="portfolio-tabs-container">
            <div className="tabs">
              {['Music Event', 'Corporate Event', 'Special Event', 'Sport Event'].map((tab) => (
                <div
                  key={tab}
                  className={`portfolio-tab ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </div>
              ))}
            </div>
            <div className="portfolio-tabs-carousel">
                <div className="vertical-row-1">
                    <div className="portfolio-tabs-carousel-item" onClick={() => handleImageClick(tabImages[activeTab[0]])}>
                        <img src={tabImages[activeTab][0]} alt="Red brick" />
                        <div className="dark-overlay"></div>
                    </div>
                        <div className="caption">Red brick</div>
                    <div className="portfolio-tabs-carousel-item" onClick={() => handleImageClick(tabImages[activeTab[1]])}>
                        <img src={tabImages[activeTab][1]} alt="Bosto bar" />
                        <div className="dark-overlay"></div>
                    </div>
                        <div className="caption">Bosto bar</div>
                </div>
                <div className="vertical-row-2">
                    <div className="portfolio-tabs-carousel-item" onClick={() => handleImageClick(tabImages[activeTab[2]])}>
                        <img src={tabImages[activeTab][2]} alt="Caballer bar" />
                        <div className="dark-overlay"></div>
                    </div>
                        <div className="caption">Caballer bar</div>
                    <div className="portfolio-tabs-carousel-item" onClick={() => handleImageClick(tabImages[activeTab[3]])}>
                        <img src={tabImages[activeTab][3]} alt="Marvel Garden" />
                        <div className="dark-overlay"></div>
                    </div>
                        <div className="caption">Marvel Garden</div>
                    <div className="portfolio-tabs-carousel-item" onClick={() => handleImageClick(tabImages[activeTab[4]])}>
                        <img src={tabImages[activeTab][4]} alt="BSC bar" />
                        <div className="dark-overlay"></div>
                    </div>
                        <div className="caption">BSC bar</div>
                </div>
                <div className="vertical-row-3">
                    <div className="portfolio-tabs-carousel-item" onClick={() => handleImageClick(tabImages[activeTab[5]])}>
                        <img src={tabImages[activeTab][5]} alt="Phoenix mall" />
                        <div className="dark-overlay"></div>
                    </div>
                        <div className="caption">Phoenix mall</div>
                    <div className="portfolio-tabs-carousel-item" onClick={() => handleImageClick(tabImages[activeTab[6]])}>
                        <img src={tabImages[activeTab][6]} alt="South poll" />
                        <div className="dark-overlay"></div>
                    </div>
                        <div className="caption">South poll</div>
                </div>
            </div>
          </div>
        </section>
        <section className="portfolio-clients">
            <h2>Our Clients</h2>
            <div className="carousel">
                <div className="carousel-track">
                    {logos.concat(logos).map((logo, index) => (
                    <img key={index} src={logo} alt={`Logo ${index % logos.length + 1}`} />
                    ))}
                    {/* Duplicate images to create seamless looping */}
                </div>
            </div>
        </section>
        <ModalCarousel
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            images={tabImages[activeTab]}
            startIndex={currentImageIndex}
        />
    </div>
  );
};

export default Portfolio;
