const express = require('express');
const spritesData = require('./src/configs/sprites.js');

const app = express();
const port = process.env.PORT || 3000;

app.get('/api/v1/world', async (req, res) => {
  try {
    const data = require('./src/configs/world.json');

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/v1/sprites', async (req, res) => {
  try {
    res.json(spritesData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/v1/gameObjects', async (req, res) => {
  try {
    const data = require('./src/configs/gameObjects.json');

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
