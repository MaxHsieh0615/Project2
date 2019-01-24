module.exports = {
  development: {
    username: "root",
    password: process.env.password,
    database: "jobs_piggieDB",
    host: "localhost",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: process.env.password,
    database: "jobs_piggieDB",
    host: "localhost",
    dialect: "mysql",
    logging: false
  },
  production: {
    useEnvVariable: "JAWSDB_URL",
    dialect: "mysql"
  }
};