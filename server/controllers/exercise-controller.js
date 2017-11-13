const Exercise = require('../models').Exercise
const { throwError } = require('./helper')

const create = (req, res) => Exercise.create({ name: req.body.name })
  .then(createdExercise => res.status(201).send(createdExercise))
  .catch(error => throwError(error, res, Exercise))

const findAll = (req, res) => Exercise.findAll()
  .then(exercises => res.status(200).send(exercises))
  .catch(error => throwError(error, res, Exercise))

const find = (req, res) => Exercise.findById(req.params.exerciseId)
  .then(exercise => res.status(200).send(exercise))
  .catch(error => throwError(error, res, Exercise))

const destroy = (req, res) => Exercise.findById(req.params.exerciseId)
  .then(exercise => {
    if (!exercise) {
      return res.status(400).send({ message: "Exercise doesn't exists" })
    }

    exercise.destroy()
    return res.status(200).send({ message: 'Exercise removed' })
  })

module.exports = {
  create,
  findAll,
  find,
  destroy
}
