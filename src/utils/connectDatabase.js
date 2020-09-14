'use strict'

const { Sequelize } = require('sequelize')

const { database } = require('../config')
const { db, host, username, password, port, driver, logging } = database

const sequelize = new Sequelize(db, username, password, {
  host,
  port,
  dialect: driver,
  define: {
    timestamps: false,
  },
  logging: logging,
})

module.exports = sequelize
