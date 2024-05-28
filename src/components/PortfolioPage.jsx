import React from 'react';
import CommonHeader from './../components/CommonHeader';
import Portfolio from './../components/Portfolio';
import CreativityForEternity from './CreativityForEternity';
import Footer from './../components/Footer';

const PortfolioPage = () => {
  return (
    <div>
        <CommonHeader />
        <Portfolio />
        <CreativityForEternity />
        <Footer />
    </div>
  );
};

export default PortfolioPage;