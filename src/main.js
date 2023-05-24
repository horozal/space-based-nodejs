var http = require('http');

http.createServer(function (req, res) {
  res.write('Hello World!');
  res.end(); //end the response
}).listen(8080);
