const express = require('express');
const { Snowfl, Sort } = require('snowfl-api');

const app = express();
const snowfl = new Snowfl();

// Define your route with query parameters
app.get('/tor', async (req, res) => {
  const { query, nsfw } = req.query;

  try {
    let data = await fetchData(query, nsfw);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Function to fetch data
async function fetchData(query, nsfw) {
  try {
    let options = {
      sort: Sort.MAX_SEED,
      nsfw: nsfw === 'true' // Convert string to boolean
    };
    let res = await snowfl.parse(query || 'JoJo', options);
    return res;
  } catch (error) {
    throw error;
  }
}

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
