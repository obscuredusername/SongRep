const express = require('express');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 1000;

app.use(bodyParser.json());
app.use(cors());

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'new_schema',
});

// Route for searching songs based on criteria and input using POST method
app.post('/search', async (req, res) => {
  try {
    const { criteria, input } = req.body;

    let sqlQuery = 'SELECT * FROM song WHERE ';

    switch (criteria) {
      case 'title':
        sqlQuery += `song_name LIKE ?`;
        break;
      case 'album':
        sqlQuery += `album LIKE ?`;
        break;
      case 'songwriter':
        sqlQuery += `songwriter LIKE ?`;
        break;
      case 'actor':
        sqlQuery += `actor LIKE ?`;
        break;
      default:
        res.status(400).send('Invalid criteria');
        return;
    }

    const [rows] = await pool.query(sqlQuery, [`%${input}%`]);
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// New route to fetch all songs
app.get('/allsongs', async (req, res) => {
  console.log("whats up")
  try {
    const [rows] = await pool.query('SELECT * FROM song');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/songsdetails', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM song');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
