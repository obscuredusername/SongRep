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
    <div style={styles.sidebar}>
      <div className="header" style={styles.header}>
        <h2 style={styles.headerText}>Categories</h2>
      </div>
      
      <div className="main-content" style={styles.mainContent}>
        <div className="categories" style={styles.categories}>
          {categoriesData.map((category, index) => (
            <div className="category" style={styles.category} key={index}>
              <a href={category.link} style={styles.categoryLink}>
                {category.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  sidebar: {
    width: '250px',
    height: '100%',
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
  },
  header: {
    marginBottom: '20px',
    borderBottom: '1px solid #555',
  },
  headerText: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: '0',
  },
  mainContent: {
    padding: '10px',
  },
  categories: {
    display: 'flex',
    flexDirection: 'column',
  },
  category: {
    marginBottom: '10px',
  },
  categoryLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
  },
};

export default Sidebar;
