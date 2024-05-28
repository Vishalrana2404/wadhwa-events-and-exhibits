import React, { useState, useEffect } from 'react';
import './../css/Gallery.css';
import backgroundImage from './../assets/menu-background.jpg'; // Ensure to replace this with the correct path
import img1 from './../assets/blog-1.png';
import img2 from './../assets/blog-2.png';
import img3 from './../assets/blog-3.png';
import vid1 from './../assets/sample-video.mp4';

const photos = [
  { url: img1, alt: 'Image 1' },
  { url: img2, alt: 'Image 2' },
  { url: img3, alt: 'Image 3' },
  { url: img1, alt: 'Image 1' },
  { url: img2, alt: 'Image 2' },
  { url: img3, alt: 'Image 3' },
  { url: img1, alt: 'Image 1' },
  { url: img2, alt: 'Image 2' },
  { url: img3, alt: 'Image 3' },
  { url: img1, alt: 'Image 1' },
  { url: img2, alt: 'Image 2' },
  { url: img3, alt: 'Image 3' },
  { url: img1, alt: 'Image 1' },
  { url: img2, alt: 'Image 2' },
  { url: img3, alt: 'Image 3' },
  { url: img1, alt: 'Image 1' },
  { url: img2, alt: 'Image 2' },
  { url: img3, alt: 'Image 3' },
  { url: img1, alt: 'Image 1' },
  { url: img2, alt: 'Image 2' },
  { url: img3, alt: 'Image 3' },
  { url: img1, alt: 'Image 1' },
  { url: img2, alt: 'Image 2' },
  { url: img3, alt: 'Image 3' },
  // ... (rest of your images)
];

const videos = [
  { url: vid1, alt: 'Video 1' },
  { url: vid1, alt: 'Video 1' },
  { url: vid1, alt: 'Video 1' },
  { url: vid1, alt: 'Video 1' },
  { url: vid1, alt: 'Video 1' },
  { url: vid1, alt: 'Video 1' },
  { url: vid1, alt: 'Video 1' },
  { url: vid1, alt: 'Video 1' },
  { url: vid1, alt: 'Video 1' },
  { url: vid1, alt: 'Video 1' },
  { url: vid1, alt: 'Video 1' },
  { url: vid1, alt: 'Video 1' },
  { url: vid1, alt: 'Video 1' },
  { url: vid1, alt: 'Video 1' },
  { url: vid1, alt: 'Video 1' },
  { url: vid1, alt: 'Video 1' },
  { url: vid1, alt: 'Video 1' },
  { url: vid1, alt: 'Video 1' },
  { url: vid1, alt: 'Video 1' },
  { url: vid1, alt: 'Video 1' },
  { url: vid1, alt: 'Video 1' },
  { url: vid1, alt: 'Video 1' },
  { url: vid1, alt: 'Video 1' },
  { url: vid1, alt: 'Video 1' },
  { url: vid1, alt: 'Video 1' },
  { url: vid1, alt: 'Video 1' },
  { url: vid1, alt: 'Video 1' },
  { url: vid1, alt: 'Video 1' },
  { url: vid1, alt: 'Video 1' },
  { url: vid1, alt: 'Video 1' },
  { url: vid1, alt: 'Video 1' },
  { url: vid1, alt: 'Video 1' },
  { url: vid1, alt: 'Video 1' },
  { url: vid1, alt: 'Video 1' },
  // ... (rest of your videos)
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('photos');
  const [photosToDisplay, setPhotosToDisplay] = useState(photos.slice(0, 10));
  const [videosToDisplay, setVideosToDisplay] = useState(videos.slice(0, 10));
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  useEffect(() => {
    if (photosToDisplay.length === photos.length) {
      setShowLoadMore(false);
    }
    if (videosToDisplay.length === videos.length) {
      setShowLoadMore(false);
    }
  }, [photosToDisplay, videosToDisplay]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'photos') {
      setPhotosToDisplay(photos.slice(0, 10)); // Reset photos
    } else {
      setVideosToDisplay(videos.slice(0, 10)); // Reset videos
    }
  };

  const loadMore = () => {
    if (activeTab === 'photos') {
      setPhotosToDisplay(photosToDisplay.concat(photos.slice(photosToDisplay.length, photosToDisplay.length + 10)));
    } else {
      setVideosToDisplay(videosToDisplay.concat(videos.slice(videosToDisplay.length, videosToDisplay.length + 10)));
    }
  };

  const openModal = (media) => {
    setSelectedMedia(media);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="gallery">
      <section className="gallery-top" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="overlay">
          <h1>Gallery</h1>
          <p className="swagat-moto">Aapka Swagat Hai</p>
          <p>
            We're passionate about crafting unforgettable events, and on this page, you'll discover what sets us apart.
          </p>
        </div>
      </section>
      <div className="gallery-data-container">
        <div className="gallery-data-tabs">
          <button className={`gallery-data-tab ${activeTab === 'photos' ? 'active' : ''}`} onClick={() => handleTabChange('photos')}>Photos</button>
          <button className={`gallery-data-tab ${activeTab === 'videos' ? 'active' : ''}`} onClick={() => handleTabChange('videos')}>Videos</button>
        </div>
        <div className="gallery-data-content">
          {activeTab === 'photos' ? (
            <div className="gallery-data-flex">
              {photosToDisplay.map((photo, index) => (
                <div key={index} className="gallery-data-item" onClick={() => openModal(photo)}>
                  <img src={photo.url} alt={photo.alt} className="gallery-data-image" />
                </div>
              ))}
            </div>
          ) : (
            <div className="gallery-data-flex">
              {videosToDisplay.map((video, index) => (
                <div key={index} className="gallery-data-item" onClick={() => openModal(video)}>
                  <div className="video-container">
                    <video src={video.url} alt={video.alt} className="gallery-data-video"></video>
                    <div className="video-overlay"></div>
                    <div className="play-button"></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {showLoadMore && (
          <button className="gallery-data-load-more" onClick={loadMore}>Load More</button>
        )}
        {showModal && (
          <div className="gallery-data-modal" onClick={closeModal}>
            <div className="gallery-data-modal-content" onClick={(e) => e.stopPropagation()}>
              {selectedMedia.url.endsWith('.mp4') ? (
                <video src={selectedMedia.url} className="gallery-data-modal-video" controls></video>
              ) : (
                <img src={selectedMedia.url} alt={selectedMedia.alt} className="gallery-data-modal-image" />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
