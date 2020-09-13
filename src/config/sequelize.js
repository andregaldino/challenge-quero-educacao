'use strict'

const { database } = require('./index')
const { db, host, username, password, port, driver } = database

module.exports = {
  development: {
    username,
    password,
    database: db,
    host,
    port,
    dialect: driver,
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
  test: {
    username,
    password,
    database: db,
    host,
    port,
    dialect: driver,
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
  production: {
    username,
    password,
    database: db,
    host,
    port,
    dialect: driver,
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
}
