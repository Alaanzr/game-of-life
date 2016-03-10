var express = require('express');

module.exports = function() {
  var app = express();

  app.use(express.static(__dirname + '/../public'));

  require('../app/routes/routes.js')(app);

  return app;
};
