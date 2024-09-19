const request = require('supertest');
const app = require('./server'); // Assuming server.js exports the app

describe('Server API', () => {
  /**
   * Tests the root endpoint of the server.
   * This ensures that the server responds to GET requests at the root.
   */
  test('GET / responds with welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Welcome to Dataset Hub API!');
  });

  /**
   * Edge case: Checks if the API handles non-existent routes.
   * This test ensures the server returns a 404 status for unknown routes.
   */
  test('GET unknown route returns 404', async () => {
    const response = await request(app).get('/unknown-route');
    expect(response.statusCode).toBe(404);
  });
});