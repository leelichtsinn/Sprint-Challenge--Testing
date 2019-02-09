const request = require('supertest');

const server = require('./server.js');

describe('the route handlers', () => {
  describe('get /', () => {
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

});
