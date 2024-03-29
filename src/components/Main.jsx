import React, { useState, useEffect } from 'react';
import './styles.css'; // Import the stylesheet
import Search from './Song';  // Fix the import statement
import Sidebar from './Sidebar';
import SongDetailTable from './SongDetailTable';  // Change the component name to SongTable

const Main = () => {
  const [searchResponse, setSearchResponse] = useState([]);

  const handleSearchResponse = (response) => {
    setSearchResponse(response);
  };

  useEffect(() => {
    // Fetch data from the local API initially
    fetch('http://localhost:1000/songsdetails')
      .then(response => response.json())
      .then(data => setSearchResponse(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Search onSearchResponse={handleSearchResponse} />
        <SongDetailTable songs={searchResponse} />  {/* Change to SongTable */}
      </div>
    </div>
  );
}

export default Main;
