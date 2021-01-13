const
  express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  port = process.env.PORT || 8000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set view engine
app.set('view engine', 'pug');
app.set('views', './views');

app.listen(port);

// Importing route
var routes = require('./app/routes/appRoutes');

// Register the route
routes(app);