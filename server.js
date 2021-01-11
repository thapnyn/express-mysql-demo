const
  express = require('express'),
  app = express(),
  path = require('path'),
  bodyParser = require('body-parser'),
  port = process.env.PORT || 8000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.get('/', function(req, res) {
//   res.sendFile(path.resolve(__dirname,'views') + '/index.html');
// });

app.listen(port);
console.log('API server started on: ' + port);

//importing route
var routes = require('./app/routes/appRoutes');

//register the route
routes(app);