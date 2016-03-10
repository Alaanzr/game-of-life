var express = require('./config/express.js');

var app = express();
var port = process.env.port || 3000;

app.listen(port);
console.log('Server running on port ' + port);
