import React, { useState } from 'react';
import Slider from 'react-slick';
import CommonHeader from './../components/CommonHeader';
import backgroundImage from './../assets/common-top-background.png';
import CreativityForEternity from './CreativityForEternity';
import Footer from './../components/Footer';
import './../css/WhatWeDoPage.css';
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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WhatWeDoPage = () => {
  const [activeTab, setActiveTab] = useState('Music Event');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const images = {
    'Music Event': [img1, img2, img3, img4, img9, img10, img11, img12],
    'Corporate Event': [img5, img6, img7, img8],
    'Special Event': [img9, img10, img11, img12],
    'Sport Event': [img10, img11, img12, img11],
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <CommonHeader />
      <div className="what-we-do-page">
        <section className="what-we-do-page-top" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="overlay">
            <h1>What We Do</h1>
            <p className="swagat-moto">Aapka Swagat Hai</p>
            <p>We're passionate about crafting unforgettable events, and on this page, you'll discover what sets us apart.</p>
          </div>
        </section>
        <section className="what-we-do-page-tabs">
          <div className="what-we-do-page-tabs-container">
            <div className="tabs">
              {['Music Event', 'Corporate Event', 'Special Event', 'Sport Event'].map((tab) => (
                <div
                  key={tab}
                  className={`what-we-do-page-tab ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </div>
              ))}
            </div>
            <div className="what-we-do-page-tabs-description">
              {activeTab === 'Music Event' && (
                <p>
                  Experience the ultimate in musical entertainment with our top-tier event music services. From live bands and DJs to custom playlists tailored to your event's vibe, we ensure every beat resonates with your audience. Elevate your celebration with our expert soundscaping, creating unforgettable moments through the power of music.
                </p>
              )}
              {activeTab === 'Corporate Event' && (
                <p>
                  We specialize in corporate events that leave a lasting impression. From conferences and seminars to company parties and product launches, our professional team ensures your corporate gathering is a success. We provide full-service event planning, including logistics, audiovisual support, and on-site coordination.
                </p>
              )}
              {activeTab === 'Special Event' && (
                <p>
                  Make your special event truly memorable with our comprehensive event planning services. Whether it's a wedding, anniversary, or any other significant milestone, we handle all the details to create an unforgettable experience. From venue selection and decoration to entertainment and catering, we've got you covered.
                </p>
              )}
              {activeTab === 'Sport Event' && (
                <p>
                  Our expertise in sports events management ensures a thrilling experience for both participants and spectators. From organizing tournaments and matches to managing logistics and providing top-notch facilities, we ensure your sports event runs smoothly and successfully.
                </p>
              )}
            </div>
            <div className="what-we-do-page-tabs-carousel">
              {images[activeTab].length > 4 ? (
                <Slider {...settings}>
                  {images[activeTab].map((image, index) => (
                    <div className="what-we-do-page-tabs-carousel-item" key={index}>
                      <img src={image} alt={`What We Do ${index + 1}`} />
                    </div>
                  ))}
                </Slider>
              ) : (
                <div className="static-image-container">
                  {images[activeTab].map((image, index) => (
                    <div className="what-we-do-page-tabs-carousel-item" key={index}>
                      <img src={image} alt={`What We Do ${index + 1}`} />
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="what-we-do-tab-details">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste  neque laudantium. Ex dolores nesciunt mollitia doloribus fuga aliquam iste obcaecati dolore maiores, officiis, ea nobis laboriosam perferendis, possimus fugiat voluptatibus sapiente at commodi eveniet beatae? Ab vero maiores quod nisi quidem, nihil aspernatur. Dolores culpa quidem minima eum ab maxime sed adipisci illum quam laudantium fugiat totam explicabo, atque facilis quibusdam odit illo aut, cum repudiandae. Reiciendis qui quidem ex porro hic non quia, iste, recusandae tempora odit est consequuntur pariatur odio quod vel, fugit labore quam corporis. Dolores unde voluptate ullam qui id similique eveniet veritatis in explicabo rem! Doloremque reiciendis quam a iste eos architecto esse, quos quod repellat neque perspiciatis exercitationem, laborum vitae voluptate illo obcaecati, voluptates ipsa.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste  neque laudantium. Ex dolores nesciunt mollitia doloribus fuga aliquam iste obcaecati dolore maiores, officiis, ea nobis laboriosam perferendis, possimus fugiat voluptatibus sapiente at commodi eveniet beatae? Ab vero maiores quod nisi quidem, nihil aspernatur. Dolores culpa quidem minima eum ab maxime sed adipisci illum quam laudantium fugiat totam explicabo, atque facilis quibusdam odit illo aut, cum repudiandae. Reiciendis qui quidem ex porro hic non quia, iste, recusandae tempora odit est consequuntur pariatur odio quod vel, fugit labore quam corporis. Dolores unde voluptate ullam qui id similique eveniet veritatis in explicabo rem! Doloremque reiciendis quam a iste eos architecto esse, quos quod repellat neque perspiciatis exercitationem, laborum vitae voluptate illo obcaecati, voluptates ipsa.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste  neque laudantium. Ex dolores nesciunt mollitia doloribus fuga aliquam iste obcaecati dolore maiores, officiis, ea nobis laboriosam perferendis, possimus fugiat voluptatibus sapiente at commodi eveniet beatae? Ab vero maiores quod nisi quidem, nihil aspernatur. Dolores culpa quidem minima eum ab maxime sed adipisci illum quam laudantium fugiat totam explicabo, atque facilis quibusdam odit illo aut, cum repudiandae. Reiciendis qui quidem ex porro hic non quia, iste, recusandae tempora odit est consequuntur pariatur odio quod vel, fugit labore quam corporis. Dolores unde voluptate ullam qui id similique eveniet veritatis in explicabo rem! Doloremque reiciendis quam a iste eos architecto esse, quos quod repellat neque perspiciatis exercitationem, laborum vitae voluptate illo obcaecati, voluptates ipsa.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste  neque laudantium. Ex dolores nesciunt mollitia doloribus fuga aliquam iste obcaecati dolore maiores, officiis, ea nobis laboriosam perferendis, possimus fugiat voluptatibus sapiente at commodi eveniet beatae? Ab vero maiores quod nisi quidem, nihil aspernatur. Dolores culpa quidem minima eum ab maxime sed adipisci illum quam laudantium fugiat totam explicabo, atque facilis quibusdam odit illo aut, cum repudiandae. Reiciendis qui quidem ex porro hic non quia, iste, recusandae tempora odit est consequuntur pariatur odio quod vel, fugit labore quam corporis. Dolores unde voluptate ullam qui id similique eveniet veritatis in explicabo rem! Doloremque reiciendis quam a iste eos architecto esse, quos quod repellat neque perspiciatis exercitationem, laborum vitae voluptate illo obcaecati, voluptates ipsa.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste  neque laudantium. Ex dolores nesciunt mollitia doloribus fuga aliquam iste obcaecati dolore maiores, officiis, ea nobis laboriosam perferendis, possimus fugiat voluptatibus sapiente at commodi eveniet beatae? Ab vero maiores quod nisi quidem, nihil aspernatur. Dolores culpa quidem minima eum ab maxime sed adipisci illum quam laudantium fugiat totam explicabo, atque facilis quibusdam odit illo aut, cum repudiandae. Reiciendis qui quidem ex porro hic non quia, iste, recusandae tempora odit est consequuntur pariatur odio quod vel, fugit labore quam corporis. Dolores unde voluptate ullam qui id similique eveniet veritatis in explicabo rem! Doloremque reiciendis quam a iste eos architecto esse, quos quod repellat neque perspiciatis exercitationem, laborum vitae voluptate illo obcaecati, voluptates ipsa.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste  neque laudantium. Ex dolores nesciunt mollitia doloribus fuga aliquam iste obcaecati dolore maiores, officiis, ea nobis laboriosam perferendis, possimus fugiat voluptatibus sapiente at commodi eveniet beatae? Ab vero maiores quod nisi quidem, nihil aspernatur. Dolores culpa quidem minima eum ab maxime sed adipisci illum quam laudantium fugiat totam explicabo, atque facilis quibusdam odit illo aut, cum repudiandae. Reiciendis qui quidem ex porro hic non quia, iste, recusandae tempora odit est consequuntur pariatur odio quod vel, fugit labore quam corporis. Dolores unde voluptate ullam qui id similique eveniet veritatis in explicabo rem! Doloremque reiciendis quam a iste eos architecto esse, quos quod repellat neque perspiciatis exercitationem, laborum vitae voluptate illo obcaecati, voluptates ipsa.</p>
            </div>
          </div>
        </section>
      </div>
      <CreativityForEternity />
      <Footer />
    </div>
  );
};

export default WhatWeDoPage;
