import React, { useEffect } from 'react';

const SongDetailTable = ({ songs }) => {
  useEffect(() => {
    // You can perform any additional logic or side effects based on the songs prop here
    // This effect will run whenever the songs prop changes
  }, [songs]);

  return (
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Song Title</th>
          <th>Album</th>
          <th>Duration</th>
          <th>Song Number</th>
        </tr>
      </thead>
      <tbody>
        {songs.map((song, index) => (
          <React.Fragment key={index}>
          
            <tr>
              <td>{song.picture}</td>
              <td>{song.song_name}</td>
              <td>{song.film_album}</td>
              <td>{song.duration}</td>
              <td>{song.song_number}</td>
            </tr>
            <tr>
              <td colSpan="5">
                Category: {song.category} | Year: {song.year} | Music Director: {song.musicDirector} | Lyricist: {song.lyricist} | Actors: {song.actors}
              </td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
}

export default SongDetailTable;
