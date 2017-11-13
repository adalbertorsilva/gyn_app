const ValidationError = require('sequelize').ValidationError

const isDuplicateConstraintError = (error) => error
  .errors
  .find(element => element.type === 'unique violation') !== undefined

const throwError = (error, res, model) => {
  console.error(error.errors)
  if (error instanceof ValidationError && isDuplicateConstraintError(error)) {
    return res.status(400).send({ message: model.uniquenessErrorMessage() })
  }
  return res.status(500).send(error)
}

module.exports = {
  throwError
}
