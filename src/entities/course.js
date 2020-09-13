'use strict'

const { DataTypes } = require('sequelize')
const connection = require('../utils/connectDatabase')
const campus = require('./campus')
const university = require('./university')

const course = connection.define('Course', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  kind: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  level: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  shift: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

course.belongsTo(campus)
course.belongsTo(university)

module.exports = course
