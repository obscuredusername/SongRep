import React, { useEffect, useState } from 'react';

const SongTable = () => {
  const [songs, setSongs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:1000/allsongs')
      .then(response => {
        if (!response.ok) {
          console.error('Server response:', response);
          throw new Error(`Failed to fetch data (HTTP Status: ${response.status})`);
        }
        return response.json();
      })
      .then(data => setSongs(data))
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Determine the number of columns you want to display
  const numColumns = 3;

  // Create an array of arrays to organize songs into columns
  const organizedSongs = Array.from({ length: numColumns }, (_, columnIndex) =>
    songs.filter((_, index) => index % numColumns === columnIndex)
  );

  return (
    <table style={{ width: '100%' }}>
      <thead>
        <tr>
          <th>Title and Picture</th>
          <th>Another Column</th>
          <th>Yet Another Column</th>
        </tr>
      </thead>
      <tbody>
        {organizedSongs[0].map((_, rowIndex) => (
          <tr key={rowIndex}>
            {organizedSongs.map((column, columnIndex) => (
              <td key={columnIndex}>
                {column[rowIndex] && (
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src={column[rowIndex].songPicture}
                      alt={`Song ${column[rowIndex].song_name}`}
                      style={{ width: '50px', height: '50px', marginRight: '10px' }}
                    />
                    <span>{column[rowIndex].song_name}</span>
                  </div>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SongTable;
