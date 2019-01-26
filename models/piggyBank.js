var Sequelize = require("sequelize");
var db = require("../config/connection");

var piggyBank = db.define("tbl_piggy_bank", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true},
    description: Sequelize.STRING,
    child_id: Sequelize.INTEGER,
    earning_amount: Sequelize.DECIMAL,
});

piggyBank.sync({ alter: true });

module.exports = piggyBank