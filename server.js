var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);
var apiData = require('./apiData');

app.get('/users/matteomanzo', function(request,response) {
  response.json({"id": apiData.matteo.id, "login": apiData.matteo.login, "public_repos": apiData.matteo.public_repos, "location": apiData.matteo.location});
});

server.listen(9999, function() {
  console.log('Server has started bitches');
});
