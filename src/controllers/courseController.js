'use strict'

const { Course } = require('../services')
const { courseTransformer } = require('../transformers')
const all = async (req, res) => {
  const courses = await Course.getAll(req.filters)
  res.send(courseTransformer(courses))
}

module.exports = {
  all,
}
