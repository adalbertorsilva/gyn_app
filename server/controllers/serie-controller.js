const Serie = require('../models').Serie
const { throwError } = require('./helper')

const create = (req, res) => Serie.create({ description: req.body.description })
  .then(createdExercise => res.status(201).send(createdExercise))
  .catch(error => throwError(error, res, Serie))

const findAll = (req, res) => Serie.findAll()
  .then(series => res.status(200).send(series))
  .catch(error => throwError(error, res, Serie))

const find = (req, res) => Serie.findById(req.params.serieId)
  .then(serie => res.status(200).send(serie))
  .catch(error => throwError(error, res, Serie))

const destroy = (req, res) => Serie.findById(req.params.serieId)
  .then(serie => {
    if (!serie) {
      return res.status(400).send({ message: "Serie doesn't exists" })
    }
    serie.destroy()
    return res.status(200).send({ message: 'Serie removed' })
  })
  .catch(error => throwError(error, res, Serie))
module.exports = {
  create,
  findAll,
  find,
  destroy
}
