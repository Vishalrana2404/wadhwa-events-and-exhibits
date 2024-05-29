// ModalCarousel.js
import React from 'react';
import Modal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import closeIcon from './../assets/close-icon.png';

Modal.setAppElement('#root'); // Ensure this is set to your app's root element

const ModalCarousel = ({ isOpen, onRequestClose, images, startIndex }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Carousel"
      className="portfolio-modal"
      overlayClassName="portfolio-overlay"
    >
      <Carousel selectedItem={startIndex} showArrows={true} infiniteLoop={true}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Carousel>
      <button onClick={onRequestClose} className="portfolio-close-button"><img src={closeIcon} alt="" /></button>
    </Modal>
  );
};

export default ModalCarousel;
