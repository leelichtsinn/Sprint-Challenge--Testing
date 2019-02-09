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
