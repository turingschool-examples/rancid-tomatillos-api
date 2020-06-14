
const {app, databaseV1} = require('../server');
const request = require('supertest');

beforeEach(async () => {
  // Reset seed db with primary keys reset
  await databaseV1.migrate.rollback({directory: './db/v1/migrations'});
  await databaseV1.migrate.latest({directory: './db/v1/migrations'});
  await databaseV1.seed.run({directory: './db/v1/seeds/test'});
})

afterAll(() => {
  // Stop database connection after tests are complete
  databaseV1.destroy();
})

describe('Root path', () => {
  it('the root path gives simple object', async () => {
    const response = await request(app).get('/');

    expect(response.status).toBe(200);
  });
});

describe('Login', () => {
  it('should login a user', async () => {
    const response = await request(app).post('/api/v1/login')
                              .set('Content-Type', 'application/json')
                              .send({email: 'alan@turing.io', password: 'promisedotyall'});

    expect(response.status).toEqual(201);
    expect(response.body).toEqual({user: {id: 1, name: 'Alan', email: 'alan@turing.io'}});
  });

  it('should give a 422 response for missing an email', async () => {
    const response = await request(app).post('/api/v1/login')
                              .set('Content-Type', 'application/json')
                              .send({password: 'promisedotyall'});

    expect(response.status).toEqual(422);
    expect(response.body).toEqual({error: 'You are missing a required parameter of email'});
  });

  it('should give a 422 response for missing an password', async () => {
    const response = await request(app).post('/api/v1/login')
                              .set('Content-Type', 'application/json')
                              .send({email: 'alan@turing.io'});

    expect(response.status).toEqual(422);
    expect(response.body).toEqual({error: 'You are missing a required parameter of password'});
  });

  it('should give a 403 for incorrect email', async () => {
    const response = await request(app).post('/api/v1/login')
                              .set('Content-Type', 'application/json')
                              .send({email: 'bigsby@turing.io', password: 'promisedotyall'});

    expect(response.status).toEqual(403);
    expect(response.body).toEqual({ error: 'Username or password is incorrect'});
  });

  it('should give a 403 for incorrect password', async () => {
    const response = await request(app).post('/api/v1/login')
                              .set('Content-Type', 'application/json')
                              .send({email: 'alan@turing.io', password: '8675309'});

    expect(response.status).toEqual(403);
    expect(response.body).toEqual({ error: 'Username or password is incorrect'});
  });
});

describe('Movies', () => {
  it('should return all the movies with ratings', async () => {
     const response = await request(app).get('/api/v1/movies');

     expect(response.status).toBe(200);
     expect(response.body.movies).toHaveLength(2);
     // add expectation for properties and values of first element

  });
});
