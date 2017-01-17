var chalk = require('chalk');
const express = require( 'express' );
const app = express(); // creates an instance of an express application
const morgan = require('morgan');
const volleyball = require('volleyball')

const http = require('http');
const server = http.createServer();
const PORT = 3000;

const logger = volleyball.custom({ debug: 'hi there' })

app.use('/', volleyball)

// app.use('/', function (req, res, next) {
//   console.log('Request Type:', req.method)
//   console.log('Route:', req.originalUrl)
//   next()
// })

// app.use('/special', function (req, res, next) {
//   console.log('Special Area!');
// })

app.get('/news', function (req, res) {
  res.send('News Page')
})

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(PORT, function () {
  console.log(`Yo dawg, listening on port number ${PORT}`);
})


