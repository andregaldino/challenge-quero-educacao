'use strict'

const { DataTypes } = require('sequelize')
const connection = require('../utils/connectDatabase')

const campus = connection.define('Campus', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

module.exports = campus
