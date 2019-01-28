require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var path = require('path');
var bodyParser = require('body-parser');
var db = require("./config/connection");
var apiRoutes = require("./routes/apiRoutes");

var app = express();
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

//Body Parser
app.use(bodyParser.urlencoded({ extended: false}));

//Set static folder
app.use(express.static(path.join(__dirname, '/public/')));


//Main content Routes
app.use('/', apiRoutes);

//Splash Routes
app.use('/splash', (req, res) => res.render('index', {layout: 'splash'}));

//app.use('/piggybank', require("./routes/apiRoutes"))
//require("./routes/htmlRoutes")(app);

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