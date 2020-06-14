module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/rancid_tomatillos_v1',
    migrations: {
      directory: './db/v1/migrations'
    },
    seeds: {
      directory: './db/v1/seeds/dev'
    },
    useNullAsDefault: true
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/rancid_tomatillos_v1',
    migrations: {
      directory: './db/v1/migrations'
    },
    seeds: {
      directory: './db/v1/seeds/test'
    },
    useNullAsDefault: true
  },
  production: {
    client: 'pg',
    connection: process.env.HEROKU_POSTGRESQL_NAVY_URL + '?ssl=true',
    migrations: {
      directory: './db/v1/migrations'
    },
    seeds: {
      directory: './db/v1/seeds/dev'
    },
    useNullAsDefault: true
  }
};
