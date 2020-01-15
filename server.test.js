
const {app, database} = require('./server');
const request = require('supertest');

beforeEach(async () => {
  // Reset seed db with primary keys reset
  await database.migrate.rollback();
  await database.migrate.latest();
  await database.seed.run();
})

afterAll(() => {
  // Stop database connection after tests are complete
  database.destroy();
})

describe('Root path', () => {
  it('the root path gives simple object', async () => {
    const response = await request(app).get('/');
    
    expect(response.status).toBe(200);
  });
});

describe('Login', () => {
  it('can login a user', async () => {
    const response = await request(app).post('/api/v1/login')
                              .set('Content-Type', 'application/json')
                              .send({email: 'alan@turing.io', password: 'promisedotyall'});

    expect(response.status).toEqual(201);
    expect(response.body).toEqual({user: {id: 1, name: 'Alan', email: 'alan@turing.io'}});
  });

  it('will give a 422 response for missing an email', async () => {
    const response = await request(app).post('/api/v1/login')
                              .set('Content-Type', 'application/json')
                              .send({password: 'promisedotyall'});

    expect(response.status).toEqual(422);
    expect(response.body).toEqual({error: 'You are missing a required parameter of email'});
  });

  it('will give a 422 response for missing an password', async () => {
    const response = await request(app).post('/api/v1/login')
                              .set('Content-Type', 'application/json')
                              .send({email: 'alan@turing.io'});

    expect(response.status).toEqual(422);
    expect(response.body).toEqual({error: 'You are missing a required parameter of password'});
  });

  it('will give a 403 for incorrect email', async () => {
    const response = await request(app).post('/api/v1/login')
                              .set('Content-Type', 'application/json')
                              .send({email: 'bigsby@turing.io', password: 'promisedotyall'});

    expect(response.status).toEqual(403);
    expect(response.body).toEqual({ error: 'Username or password is incorrect'});
  });

  it('will give a 403 for incorrect password', async () => {
    const response = await request(app).post('/api/v1/login')
                              .set('Content-Type', 'application/json')
                              .send({email: 'alan@turing.io', password: '8675309'});

    expect(response.status).toEqual(403);
    expect(response.body).toEqual({ error: 'Username or password is incorrect'});
  });
});