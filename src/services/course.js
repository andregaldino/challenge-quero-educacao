'use strict'

const { Course } = require('../entities')

const getAll = async () => {
  return Course.findAll({
    include: [{ all: true }],
  })
}

module.exports = {
  getAll,
}
