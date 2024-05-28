import React from 'react';
import CommonHeader from './../components/CommonHeader';
import BlogPageFeaturedBlog from './BlogPageFeaturedBlog';
import BlogList from './BlogList';
import CreativityForEternity from './CreativityForEternity';
import Footer from './../components/Footer';

const BlogPage = () => {
  return (
    <div>
        <CommonHeader />
        <BlogPageFeaturedBlog/>
        <BlogList />
        <CreativityForEternity />
        <Footer />
    </div>
  );
};

export default BlogPage;