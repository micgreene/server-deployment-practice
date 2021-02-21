'use strict';

//dependencies
const express = require('express');
const app = express();

//handlers
const notFoundHandler = require('./handlers/404.js');
const errorHandler = require('./handlers/500.js');

//middleware
const stamper = require('./middleware/stamper.js');


//routes
//the 'stamper' parameter gives us the time stamp we created in the middleware javascript
app.get('/', stamper, (req, res) => {
  res.status(200).send('Hello World')
})

app.get('/data', stamper, (req, res) => {
  let outputObject = {
    10: "even",
    5: "odd",
    "time": req.timestamp // we got this from the middleware
  }

  res.status(200).json(outputObject);
});

app.get('/bad', (req, res, next) => {
  next('you messsed up')
});

app.use('*', notFoundHandler);
app.use(errorHandler);


//starts listening at selected port
function start(port) {
  app.listen(port, () => console.log(`Server up on port ${port}`))
}

//exports the instance of expresss() and the function to start the server to the app
module.exports = {
  app: app,
  start: start
}