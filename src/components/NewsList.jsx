// NewsList.jsx

import React from 'react';
import './../css/NewsList.css';
import news1 from './../assets/blog-1.png';
import news2 from './../assets/blog-2.png';
import news3 from './../assets/blog-3.png';
import news4 from './../assets/blog-1.png';
import news5 from './../assets/blog-2.png';
import news6 from './../assets/blog-3.png';

const NewsList = () => {
  // Dummy news data
  const newsData = [
    { id: 1, title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, laborum', newsImage: news1, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis amet placeat iusto maxime fuga laboriosam voluptatibus alias, cupiditate facilis nemo? Praesentium pariatur cupiditate commodi, officiis aspernatur tenetur eum. Veniam corporis fugit maiores commodi mollitia ullam, nulla consectetur, nihil, quaerat nam voluptatibus quos ab sit! Sed voluptatum asperiores obcaecati repellendus temporibus...' },
    { id: 2, title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, laborum', newsImage: news2, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis amet placeat iusto maxime fuga laboriosam voluptatibus alias, cupiditate facilis nemo? Praesentium pariatur cupiditate commodi, officiis aspernatur tenetur eum. Veniam corporis fugit maiores commodi mollitia ullam, nulla consectetur, nihil, quaerat nam voluptatibus quos ab sit! Sed voluptatum asperiores obcaecati repellendus temporibus...' },
    { id: 3, title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, laborum', newsImage: news3, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis amet placeat iusto maxime fuga laboriosam voluptatibus alias, cupiditate facilis nemo? Praesentium pariatur cupiditate commodi, officiis aspernatur tenetur eum. Veniam corporis fugit maiores commodi mollitia ullam, nulla consectetur, nihil, quaerat nam voluptatibus quos ab sit! Sed voluptatum asperiores obcaecati repellendus temporibus...' },
    { id: 4, title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, laborum', newsImage: news4, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis amet placeat iusto maxime fuga laboriosam voluptatibus alias, cupiditate facilis nemo? Praesentium pariatur cupiditate commodi, officiis aspernatur tenetur eum. Veniam corporis fugit maiores commodi mollitia ullam, nulla consectetur, nihil, quaerat nam voluptatibus quos ab sit! Sed voluptatum asperiores obcaecati repellendus temporibus...' },
    { id: 5, title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, laborum', newsImage: news5, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis amet placeat iusto maxime fuga laboriosam voluptatibus alias, cupiditate facilis nemo? Praesentium pariatur cupiditate commodi, officiis aspernatur tenetur eum. Veniam corporis fugit maiores commodi mollitia ullam, nulla consectetur, nihil, quaerat nam voluptatibus quos ab sit! Sed voluptatum asperiores obcaecati repellendus temporibus...' },
    { id: 6, title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, laborum', newsImage: news6, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis amet placeat iusto maxime fuga laboriosam voluptatibus alias, cupiditate facilis nemo? Praesentium pariatur cupiditate commodi, officiis aspernatur tenetur eum. Veniam corporis fugit maiores commodi mollitia ullam, nulla consectetur, nihil, quaerat nam voluptatibus quos ab sit! Sed voluptatum asperiores obcaecati repellendus temporibus...' },
    // Add more news data as needed
  ];
  
  return (
    <div className='news-list'>
      <h2 className="news-heading">Recent Updates</h2>
      <div className="news-list-container">
        {newsData.map(news => (
          <div key={news.id} className="news-item">
            <img src={`${news.newsImage}`} alt={`News ${news.id}`} className="news-image" />
            <div className="news-content">
              <h3 className="news-title">{news.title}</h3>
              <p className="news-description">{`${news.description.slice(0, 500)}...`}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="news-pagination">
        {/* Pagination buttons */}
        {/* For simplicity, assuming there are only 5 pages */}
        {[1, 2, 3, 4, 5].map(page => (
          <button key={page} className="page-button">{page}</button>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
