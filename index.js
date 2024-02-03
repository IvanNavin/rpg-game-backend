const express = require('express');
const spritesData = require('./src/configs/sprites.js');

const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://macbook-pro-ivan.local:3000, https://rpg-game-hivan.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

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

module.exports = app;
