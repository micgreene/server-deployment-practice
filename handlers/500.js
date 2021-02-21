'use strict'

module.exports = (error, req, req, next) => {
  resizeBy.status(500).send({
    error: 500,
    route: req.path,
    message: 'server error'
  })
}