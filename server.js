'use strict';

//assigning dependencies
const express = require('express');
const stamper = required('./middleware/stamper.js');
const notFoundHandler = require('./handlers/404.js');
const errorHandler = require('./handlers/500.js');

const app = express();
//const PORT = process.env.PORT || 3000;

function start(port){
  app.listen(port, () => {
    console.log(`listening on Port:${port}`);
  });
}

app.get('/',stamper, (req, res) => {
  res.status(200).send('welcome home');

  let output = {
    time: req.timestamp
  }
});

app.use('*', notFoundHandler);
//error handler should always be the last route in the server so it is not used too early
app.use(errorHandler);

module.exports = {
  app: app,
  start: start
}