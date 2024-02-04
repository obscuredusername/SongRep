import React from 'react';

const Sidebar = () => {
  // Dummy data for categories
  const categoriesData = [
    { title: 'New Tracks', link: '#' },
    { title: 'New Additions', link: '#' },
    { title: 'Your Recent 20 Songs', link: '#' },
    { title: 'Songs You May Like', link: '#' },
    { title: 'Popular Tracks', link: '#' },
    { title: 'Popular Last 30 Days', link: '#' },
    { title: 'Popular Last 7 Days', link: '#' },
    { title: 'Free Karaoke', link: '#' },
    { title: 'Karaoke for Female Singers', link: '#' },
    { title: 'Karaoke for Male Singers', link: '#' },
    { title: 'Assamese', link: '#' },
    { title: 'Bengali Modern Songs', link: '#' },
    { title: 'Bhajan', link: '#' },
    { title: 'Bhojpuri', link: '#' },
  ];

  return (
    <div>
      <div className="header">
        <h1>Karaoke Songs</h1>
      </div>    
      
      <div className="main-content">
        <div className="categories">
          {categoriesData.map((category, index) => (
            <div className="category" key={index}>
              <a href={category.link}>
                {category.title}
              </a>
              {index === 0 && ( // Example: Adding a list for the first category
                <ul>
                  <li>
                    <a href="#">Male-Female Singers</a>
                  </li>
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="footer">
        &copy; 2024 Karaoke Songs
      </div>
    </div>
  );
};

export default Sidebar;
