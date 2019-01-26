var Sequelize = require("sequelize");
var db = require("../config/connection");

var child = db.define("tbl_child", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true},
    name: Sequelize.STRING,
    adult_user_id: Sequelize.INTEGER,
    piggy_bank_id: Sequelize.INTEGER
});

// .sync creates tables in mysql, using sequelize cmd
child.sync({ alter: true });

module.exports = child;