require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var path = require('path');
var db = require("./config/connection");
var apiRoutes = require("./routes/apiRoutes");

var app = express();
app.get('/', (req, res) => res.send('hello'));
var PORT = process.env.PORT || 8080;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("  public"));

// Handlebars
app.engine(
  'handlebars',
  exphbs({
    defaultLayout: "main"
  })
);
app.set('view engine', 'handlebars');

//Set static folder
app.use(express.static(path.join(__dirname, '/public/')));

// Routes
app.use('/', apiRoutes);
//app.use('/piggybank', require("./routes/apiRoutes"))
//require("./routes/htmlRoutes")(app);

// var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
// if (process.env.NODE_ENV === "test") {
//   syncOptions.force = true;
// }
// Test db.
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

// Starting the server, syncing our models ------------------------------------/
app.listen(PORT, function () {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});

module.exports = app;