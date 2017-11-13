'use strict'
module.exports = (sequelize, DataTypes) => {
  let Serie = sequelize.define('Serie', {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  })

  Serie.uniquenessErrorMessage = () => 'Serie already exists'

  return Serie
}
