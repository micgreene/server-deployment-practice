'use strict';

//sends this list of objects and an error message if no other routes could be accessed
module.exports = (error, req, res, next) => {
  res.status(500).send({
    error: 500,
    route: req.path,
    query: req.query,
    body: req.body,
    message: `SERVER ERROR: ${error.message}`
  })
}