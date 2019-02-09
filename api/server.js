const express = require('express');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
  try {
    res.status(200).json({ api: 'up and running' });
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = server;


let games = [
  {
    title: 'Tetris', // required
    genre: 'Puzzle', // required
    releaseYear: 1984 // not required
  },
  {
    title: 'Minecraft', // required
    genre: 'Sandbox', // required
    releaseYear: 2011 // not required
  },
  {
    title: 'Grand Theft Auto V', // required
    genre: 'Action-Adventure', // required
    releaseYear: 2013 // not required
  },
  {
    title: 'Wii Sports', // required
    genre: 'Sports', // required
    releaseYear: 2006 // not required
  },
  {
    title: 'Pokemon', // required
    genre: 'RPG', // required
    releaseYear: 1996 // not required
  },
  {
    title: 'PlayerUnkown\'s Battlegrounds', // required
    genre: 'Battle Royal', // required
    releaseYear: 2017 // not required
  },
];
