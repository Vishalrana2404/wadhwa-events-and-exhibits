import React from 'react';
import './../css/BlogPageFeaturedBlog.css';
import backgroundImage from './../assets/menu-background.jpg';

const BlogPageFeaturedBlog = () => {
    return (
       
    <div>            
        <section className="blog-top" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="overlay">
                <h1>Blog</h1>
                <p className="swagat-moto">
                    Aapka Swagat Hai
                </p>
                <p>
                    We're passionate about crafting unforgettable events, and on this page, you'll discover what sets us apart.
                </p>
            </div>
        </section>
        <section className="featured-section">
            <div className="featured-container">
                <h3 className="featured">Featured</h3>
                <h1 className="featured-title">
                    Lorem ipsum dolor sit amet consectetur. <br />
                    Habitassse sed at sodales integer.
                </h1>
                <p className="featured-description">
                    Lorem ipsum dolor sit amet consectetur. Massa metus viverra aenean in varius
                    cursus arcu potenti turpis. Tristique ut a pretium tellus nulla augue
                    libero. Ultrices elementum habitasse sollicitudin nibh diam morbi
                    euismod. Rutrum cras senectus sit tristique arcu faucibus. Blandit a
                    condimentum felis magna lectus. Proin volutpat facilisis risus in non.
                    Id faucibus nisl morbi blandit. Volutpat risus erat consectetur nunc
                    enim massa.
                </p>
            </div>
        </section>
    </div>
    );
};

export default BlogPageFeaturedBlog;