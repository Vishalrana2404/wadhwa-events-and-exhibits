import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import WhoAreWe from './components/WhoAreWe';
import WhatWeDo from './components/WhatWeDo';
import FeaturedEvents from './components/FeaturedEvents';
import GlimpseOfOurWork from './components/GlimpseOfOurWork';
import CustomerTestimonials from './components/CustomerTestimonials';
import OurClients from './components/OurClients';
import CreativityForEternity from './components/CreativityForEternity';
import Footer from './components/Footer';
import BlogPage from './components/BlogPage';
import NewsPage from './components/NewsPage';
import BlogView from './components/BlogViewPage';
import AboutUs from './components/AboutUsPage';
import Events from './components/EventsPage';
import WhatWeDoPage from './components/WhatWeDoPage';
import Gallery from './components/GalleryPage';
import ContactUs from './components/ContactUsPage';
import Portfolio from './components/PortfolioPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/blog-view" element={<BlogView />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/what-we-do" element={<WhatWeDoPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
};

const HomePage = () => {
  return (
    <div>
      <Header />
      <WhoAreWe />
      <WhatWeDo />
      <FeaturedEvents />
      <GlimpseOfOurWork />
      <CustomerTestimonials />
      <OurClients />
      <CreativityForEternity />
      <Footer />
    </div>
  );
};

export default App;
