import React from 'react';
import CommonHeader from './../components/CommonHeader';
import Events from './../components/Events';
import CreativityForEternity from './CreativityForEternity';
import Footer from './../components/Footer';

const EventsPage = () => {
  return (
    <div>
        <CommonHeader />
        <Events />
        <CreativityForEternity />
        <Footer />
    </div>
  );
};

export default EventsPage;