(function(){
  var express, app, port;
  express = require('express');
  app = express();
  app.get('/', function(req, res){
    res.send('Hello World');
  });
  app.get('/test', function(req, res){
    var body;
    body = 'Hello headers!';
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', body.length);
    return res.end(body);
  });
  port = 3000;
  app.listen(port);
  console.log("Listening on port " + port);
  console.log("Serving routes '/' and '/test'");
}).call(this);
