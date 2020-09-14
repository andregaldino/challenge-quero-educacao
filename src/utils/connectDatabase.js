'use strict'

const { Sequelize } = require('sequelize')

const { database } = require('../config')
const { db, host, username, password, port, driver } = database

const sequelize = new Sequelize(db, username, password, {
  host,
  port,
  dialect: driver,
  define: {
    timestamps: false,
  },
})

module.exports = sequelize
