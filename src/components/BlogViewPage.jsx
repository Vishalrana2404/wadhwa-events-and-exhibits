import React from 'react';
import CommonHeader from './../components/CommonHeader';
import ViewBlog from './../components/View-Blog';
import BlogList from './BlogList';
import CreativityForEternity from './CreativityForEternity';
import Footer from './../components/Footer';

const BlogViewPage = () => {
  return (
    <div>
        <CommonHeader />
        <ViewBlog />
        <BlogList />
        <CreativityForEternity />
        <Footer />
    </div>
  );
};

export default BlogViewPage;