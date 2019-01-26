// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var piggy = {
  all: function(cb) {
    orm.all("piggys", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("piggys", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("piggys", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("piggys", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (piggysController.js).
module.exports = piggy;
