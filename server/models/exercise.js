'use strict'
module.exports = (sequelize, DataTypes) => {
  var Exercise = sequelize.define('Exercise', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  Exercise.uniquenessErrorMessage = () => 'Exercise already exists'

  return Exercise
}
