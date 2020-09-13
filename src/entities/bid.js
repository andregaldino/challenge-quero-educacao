'use strict'

const { DataTypes } = require('sequelize')
const connection = require('../utils/connectDatabase')
const course = require('./course')

const bid = connection.define('Bid', {
  full_price: {
    type: DataTypes.FLOAT,
  },
  price_with_discount: {
    type: DataTypes.FLOAT,
  },
  discount_percentage: {
    type: DataTypes.FLOAT,
  },
  start_date: {
    type: DataTypes.DATEONLY,
  },
  enrollment_semester: {
    type: DataTypes.STRING,
  },
  enabled: {
    type: DataTypes.BOOLEAN,
  },
})

bid.belongsTo(course)

module.exports = bid
