'use strict';

//exports the status to send when a page can't be found
module.exports = (req, res) => {
  res.status(404).send({
    error: 404,
    route: req.path,
    message: "Not Found"
  })
}