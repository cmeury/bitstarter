var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

var encoding = "utf-8";
var filename = "index.html";

app.get('/', function(request, response) {
  buffer = fs.readFileSync(filename);
  index = buffer.toString(encoding);
  response.send(index);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
