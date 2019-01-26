const Sequelize = require('sequelize');
const db = new Sequelize('Piggy_BusinessDB', 'root', process.env.sqlPassword, {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});


// Export connection for our ORM to use.
module.exports = db;
