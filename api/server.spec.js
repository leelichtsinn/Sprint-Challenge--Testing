const request = require('supertest');

const server = require('./server.js');

describe('the route handlers', () => {
  describe('GET /', () => {
    it('responds with 200 status', async () => {
      const response = await request(server).get('/');
      expect(response.status).toBe(200);
    });

    it('responds with json', async () => {
      const response = await request(server).get('/');
      expect(response.type).toMatch(/json/i);
    });

    it('sends correct response object', async () => {
      const response = await request(server).get('/');
      expect(response.body).toEqual({ api: 'up and running' });
    });

  });

  describe('GET /games', () => {
    it('responds with 200 status', async () => {
      const response = await request(server).get('/games');
      expect(response.status).toBe(200);
    });

    it('responds with json', async () => {
      const response = await request(server).get('/games');
      expect(response.type).toMatch(/json/i);
    });

    it('sends correct response object', async () => {
    const response = await request(server).get('/games');
    expect(response.body).toEqual([]);
    });

  });

  describe('POST /games', () => {
    it('responds with 201 when body is correct', async () => {
      const body = {
        title: 'Pacman',
        genre: 'Arcade',
        releaseYear: 1980
      };
      const response = await request(server).post('/games').send(body);
      expect(response.status).toBe(201);
    });

  });

});
