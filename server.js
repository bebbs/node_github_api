var http = require('http');
var https = require('https');
var express = require('express');
var app = express();
var server = http.createServer(app);

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.render('index');
});

app.get('/users/:username', function(request, response) {

  var username = request.params.username;

  var options = {
    host: 'api.github.com',
    path: '/users/' + username,
    headers: {'User-Agent': 'NodeHubAPI'},
    method:'GET'
  };

  callback = function(res) {
    var str = '';

    res.on('data', function(chunk) {
      str += chunk;
    });

    res.on('end', function() {
      response.json(JSON.parse(str));
    });

    res.on('error', function(e) {
      console.log('Got error: ' + e);
    });
  };

  https.request(options, callback).end();

});

server.listen(9999, function() {
  console.log('Server running on port 9999');
});
