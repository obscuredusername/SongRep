import React, { useState } from 'react';

const Search = ({ onSearchResponse }) => {
  const [searchCriteria, setSearchCriteria] = useState('title');
  const [sortOption, setSortOption] = useState('title');
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = () => {
    // Fetch data from the API with search criteria and input as parameters using POST method
    fetch('http://localhost:1000/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        criteria: searchCriteria,
        input: searchInput,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Call the onSearchResponse function to update the state in the Main component
        onSearchResponse(data);
      })
      .catch(error => console.error('Error searching data:', error));
  };

  return (
    <div>
      <div style={styles.searchBar}>
        <input
          type="text"
          placeholder="Search for karaoke songs"
          style={styles.input}
          onChange={(e) => setSearchInput(e.target.value)}
        />

        <select
          value={searchCriteria}
          style={styles.select}
          onChange={(e) => setSearchCriteria(e.target.value)}
        >
          <option value="title">Title</option>
          <option value="album">Album</option>
          <option value="songwriter">Songwriter</option>
          <option value="actor">Actor in Song</option>
        </select>

        <select
          value={sortOption}
          style={styles.select}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="title">Sort by Title</option>
          <option value="film">Sort by Film</option>
          <option value="alphabet">Sort by Alphabets</option>
        </select>

        <button style={styles.button} onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

const styles = {
  searchBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: '#f2f2f2',
    marginBottom: '20px',
  },
  input: {
    flex: 1,
    marginRight: '10px',
    padding: '8px',
  },
  select: {
    padding: '8px',
    marginRight: '10px',
  },
  button: {
    padding: '8px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Search;
