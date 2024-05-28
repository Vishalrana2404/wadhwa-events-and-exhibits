import React from 'react';
import CommonHeader from './../components/CommonHeader';
import FeaturedNews from './../components/FeaturedNews';
import NewsList from './NewsList';
import CreativityForEternity from './CreativityForEternity';
import Footer from './../components/Footer';

const NewsPage = () => {
  return (
    <div>
        <CommonHeader />
        <FeaturedNews />
        <NewsList />
        <CreativityForEternity />
        <Footer />
    </div>
  );
};

export default NewsPage;