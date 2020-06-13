module.exports = {
  development: {
    v1: {
      client: 'pg',
      connection: 'postgres://localhost/rancid_tomatillos',
      migrations: {
        directory: './db/migrations'
      },
      seeds: {
        directory: './db/seeds/test'
      },
      useNullAsDefault: true
    },
    v2: {

    }
  },
  test: {
    v1: {
      client: 'pg',
      connection: 'postgres://localhost/rancid_tomatillos',
      migrations: {
        directory: './db/migrations'
      },
      seeds: {
        directory: './db/seeds/test'
      },
      useNullAsDefault: true
    },
    v2: {

    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  }
};
