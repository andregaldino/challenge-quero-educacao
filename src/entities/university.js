'use strict'

const { DataTypes } = require('sequelize')
const connection = require('../utils/connectDatabase')

const university = connection.define('university', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  score: {
    type: DataTypes.FLOAT,
  },
  logo_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

module.exports = university
