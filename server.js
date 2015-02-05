var http = require('http');
var https = require('https');
var express = require('express');
var app = express();
var server = http.createServer(app);
var apiData = require('./apiData');

app.get('/users/matteomanzo', function(request,response) {
  response.json({"id": apiData.matteo.id, 
                 "login": apiData.matteo.login, 
                 "public_repos": apiData.matteo.public_repos, 
                 "location": apiData.matteo.location});
});

app.get('/users/bebbs', function(request,response) {
  response.json({"id": apiData.bebbs.id, 
                 "login": apiData.bebbs.login, 
                 "public_repos": apiData.bebbs.public_repos, 
                 "location": apiData.bebbs.location});
});

app.get('/users', function(request,response) {
  console.log(request.query.username);

  var options = {
    host: 'https://api.github.com',
    path: '/users/tansaku'
  }

  callback = function(response) {

    var str = '';


    response.on('data', function(chunk) {
      str += chunk;
     });

    response.on('end', function() {
      console.log(str);
    });
  };

  https.request(options, callback).end();
});

server.listen(9999, function() {
  console.log('Server has started bitches');
});
