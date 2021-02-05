module.exports = {
  development: {
    database: 'league_manager_dev',
    host: '127.0.0.1',
    dialect: 'postgres',
    port: 5432
  },
  test: {
    database: 'league_manager_dev',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    username: 'root',
    password: null,
    database: null,
    host: '127.0.0.1',
    dialect: 'postgres'
  }
}
