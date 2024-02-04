import React, { useState, useEffect } from 'react';

const SongDetail = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:3000/songs')
      .then(response => response.json())
      .then(data => setSongs(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <div className="search-bar">
        <input type="text" placeholder="Search for karaoke songs" />
        <button>Search</button>
      </div>
      <div className="results">
        <table>
          <thead>
            <tr>
              <th>Song Title</th>
              <th>Film/Album</th>
              <th>Duration</th>
              <th>Song Number</th>
            </tr>
          </thead>
          <tbody>
            {songs.map(song => (
              <tr key={song.song_number}>
                <td>{song.song_name}</td>
                <td>{song.film_album}</td>
                <td>{song.duration}</td>
                <td>{song.song_number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SongDetail;
