const Serie = require('../models').Serie
const { throwError } = require('./helper')

const create = (req, res) => Serie.create({ description: req.body.description })
  .then(createdExercise => res.status(201).send(createdExercise))
  .catch(error => throwError(error, res, Serie))

module.exports = {
  create
}
