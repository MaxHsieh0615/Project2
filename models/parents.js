var Sequelize = require("sequelize");
var db = require("../config/connection");

var parents = db.define("tbl_adult_user", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true},
    name: Sequelize.STRING,
    password: Sequelize.STRING
});

// .sync creates tables in mysql, using sequelize cmd
parents.sync({ alter: true });

module.exports = parents;