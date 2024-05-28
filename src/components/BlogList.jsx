// BlogList.jsx

import React from 'react';
import './../css/BlogList.css';
import blog1 from './../assets/blog-1.png';
import blog2 from './../assets/blog-2.png';
import blog3 from './../assets/blog-3.png';
import blog4 from './../assets/blog-1.png';
import blog5 from './../assets/blog-2.png';
import blog6 from './../assets/blog-3.png';


const handleDescriptionHover = () => {
  const title = document.querySelector('.blog-title');
  if (title) {
    title.classList.add('hovered');
  }
};

const handleDescriptionLeave = () => {
  const title = document.querySelector('.blog-title');
  if (title) {
    title.classList.remove('hovered');
  }
};


const BlogList = () => {
  // Dummy blog data
  const blogs = [
    { id: 1, title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, laborum', blogImage: blog1, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis amet placeat iusto maxime fuga laboriosam voluptatibus alias, cupiditate facilis nemo? Praesentium pariatur cupiditate commodi, officiis aspernatur tenetur eum. Veniam corporis fugit maiores commodi mollitia ullam, nulla consectetur, nihil, quaerat nam voluptatibus quos ab sit! Sed voluptatum asperiores obcaecati repellendus temporibus...' },
    { id: 2, title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, laborum', blogImage: blog2, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis amet placeat iusto maxime fuga laboriosam voluptatibus alias, cupiditate facilis nemo? Praesentium pariatur cupiditate commodi, officiis aspernatur tenetur eum. Veniam corporis fugit maiores commodi mollitia ullam, nulla consectetur, nihil, quaerat nam voluptatibus quos ab sit! Sed voluptatum asperiores obcaecati repellendus temporibus...' },
    { id: 3, title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, laborum', blogImage: blog3, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis amet placeat iusto maxime fuga laboriosam voluptatibus alias, cupiditate facilis nemo? Praesentium pariatur cupiditate commodi, officiis aspernatur tenetur eum. Veniam corporis fugit maiores commodi mollitia ullam, nulla consectetur, nihil, quaerat nam voluptatibus quos ab sit! Sed voluptatum asperiores obcaecati repellendus temporibus...' },
    { id: 4, title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, laborum', blogImage: blog4, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis amet placeat iusto maxime fuga laboriosam voluptatibus alias, cupiditate facilis nemo? Praesentium pariatur cupiditate commodi, officiis aspernatur tenetur eum. Veniam corporis fugit maiores commodi mollitia ullam, nulla consectetur, nihil, quaerat nam voluptatibus quos ab sit! Sed voluptatum asperiores obcaecati repellendus temporibus...' },
    { id: 5, title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, laborum', blogImage: blog5, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis amet placeat iusto maxime fuga laboriosam voluptatibus alias, cupiditate facilis nemo? Praesentium pariatur cupiditate commodi, officiis aspernatur tenetur eum. Veniam corporis fugit maiores commodi mollitia ullam, nulla consectetur, nihil, quaerat nam voluptatibus quos ab sit! Sed voluptatum asperiores obcaecati repellendus temporibus...' },
    { id: 6, title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, laborum', blogImage: blog6, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis amet placeat iusto maxime fuga laboriosam voluptatibus alias, cupiditate facilis nemo? Praesentium pariatur cupiditate commodi, officiis aspernatur tenetur eum. Veniam corporis fugit maiores commodi mollitia ullam, nulla consectetur, nihil, quaerat nam voluptatibus quos ab sit! Sed voluptatum asperiores obcaecati repellendus temporibus...' },
    // Add more blog data as needed
  ];
  
  return (
    <div className='blog-list'>
      <h2 className="blog-heading">Recent Blog Posts</h2>
      <div className="blog-list-container">
        {blogs.map(blog => (
          <a href="/blog-view" key={blog.id} className="blog-item">
            <img src={`${blog.blogImage}`} alt={`Blog ${blog.id}`} className="blog-image" />
            <div className="blog-content">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description" onMouseEnter={handleDescriptionHover} onMouseLeave={handleDescriptionLeave}>{`${blog.description.slice(0, 500)}...`}</p>
            </div>
          </a>
        ))}
      </div>
      <div className="blog-pagination">
        {/* Pagination buttons */}
        {/* For simplicity, assuming there are only 5 pages */}
        {[1, 2, 3, 4, 5].map(page => (
          <button key={page} className="page-button">{page}</button>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
