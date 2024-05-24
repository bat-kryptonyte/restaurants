import request from 'supertest';
import server from '../server';


afterAll((done) => {
    server.close(done);
  });

describe('GET /appetizers', () => {
  it('should filter appetizers by price and description', async () => {
    const minPrice = '7';
    const maxPrice = '10';
    const descriptionContains = 'tomato';

    const response = await request(server)
      .get('/api/appetizers')
      .query({ minPrice, maxPrice, descriptionContains })
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
  });
});

describe('GET /entrees', () => {
  it('should filter entrees by price', async () => {
    const minPrice = '15';
    const maxPrice = '30';

    const response = await request(server)
      .get('/api/entrees')
      .query({ minPrice, maxPrice })
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
  });
});

describe('GET /fajitas', () => {
  it('should filter fajitas by price and description', async () => {
    const minPrice = '10';
    const maxPrice = '20';
    const descriptionContains = 'beef';

    const response = await request(server)
      .get('/api/fajitas')
      .query({ minPrice, maxPrice, descriptionContains })
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
  });
});

describe('GET /tacos', () => {
  it('should filter tacos by description', async () => {
    const descriptionContains = 'fish';

    const response = await request(server)
      .get('/api/tacos')
      .query({ descriptionContains })
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
  });
});
