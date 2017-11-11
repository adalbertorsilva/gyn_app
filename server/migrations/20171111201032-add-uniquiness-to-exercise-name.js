'use strict'

const constraintName = 'exercise_name_unique_constraint'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Exercises', ['name'], {
      type: 'unique',
      name: constraintName
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Exercises', constraintName)
  }
}
