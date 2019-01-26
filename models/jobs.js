var Sequelize = require("sequelize");
var db = require("../config/connection");

var jobs = db.define("tbl_jobs", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true},
    name: Sequelize.STRING,
    description: Sequelize.STRING,
    adult_user_id: Sequelize.INTEGER,
    child_id: Sequelize.INTEGER,
    earning_amount: Sequelize.DECIMAL,
    status: Sequelize.STRING,
    piggy_bank_id: Sequelize.INTEGER
});

// .sync creates tables in mysql, using sequelize cmd
jobs.sync({ alter: true });

module.exports = jobs;