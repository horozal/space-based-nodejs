const Component = require('./components/Component');
const Space = require('./spaces/Space');
const InMemoryGrid = require('./data-grid/InMemoryGrid');

// Create instances of components, spaces, and data grid
const component = new Component();
const space = new Space();
const dataGrid = new InMemoryGrid();

const http = require('http');

http.createServer(function (req, res) {
  res.write('Hello World!');
  res.write(`\nComponent: ${component}`);
  res.write(`\nSpace: ${space}`);
  res.write(`\nData Grid: ${dataGrid}`);
  res.end(); //end the response
}).listen(8080);
