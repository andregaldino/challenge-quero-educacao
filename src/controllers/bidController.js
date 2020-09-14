'use strict'

const { Bid } = require('../services')
const { bidTransformer } = require('../transformers')
const all = async (req, res) => {
  const courses = await Bid.getAll(req.filters)
  res.send(bidTransformer(courses))
}

module.exports = {
  all,
}
