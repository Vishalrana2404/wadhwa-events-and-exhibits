import React from 'react';
import CommonHeader from './../components/CommonHeader';
import Gallery from './../components/Gallery';
import CreativityForEternity from './CreativityForEternity';
import Footer from './../components/Footer';

const GalleryPage = () => {
  return (
    <div>
        <CommonHeader />
        <Gallery />
        <CreativityForEternity />
        <Footer />
    </div>
  );
};

export default GalleryPage;