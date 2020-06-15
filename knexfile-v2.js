module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/rancid_tomatillos_v2',
    migrations: {
      directory: './db/v2/migrations'
    },
    seeds: {
      directory: './db/v2/seeds/dev'
    },
    useNullAsDefault: true
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/rancid_tomatillos_v2',
    migrations: {
      directory: './db/v2/migrations'
    },
    seeds: {
      directory: './db/v2/seeds/test'
    },
    useNullAsDefault: true
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true',
    migrations: {
      directory: './db/v2/migrations'
    },
    seeds: {
      directory: './db/v2/seeds/dev'
    },
    useNullAsDefault: true
  }
};
