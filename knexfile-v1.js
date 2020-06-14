module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/rancid_tomatillos_v1',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/test'
    },
    useNullAsDefault: true
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/rancid_tomatillos_v1',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/test'
    },
    useNullAsDefault: true
  },
  production: {
    client: 'pg',
    connection: process.env.HEROKU_POSTGRESQL_NAVY_URL + '?ssl=true',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  }
};
