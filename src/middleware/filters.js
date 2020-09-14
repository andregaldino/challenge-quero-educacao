'use strict'

const filters = (req, res, next) => {
  const filter = {
    where: {},
    relationships: {},
  }

  const keysConditions = Object.keys(req.query).filter(
    (key) =>
      !Array.isArray(req.query[key]) && typeof req.query[key] !== 'object',
  )

  const keysRelations = Object.keys(req.query).filter(
    (key) =>
      (Array.isArray(req.query[key]) || typeof req.query[key] === 'object') &&
      key !== 'sort',
  )

  filter.where = Object.assign(
    filter.where,
    ...keysConditions.map((key) => {
      return { [key]: req.query[key] }
    }),
  )

  filter.relationships = Object.assign(
    filter.relationships,
    ...keysRelations.map((key) => {
      return { [key]: req.query[key] }
    }),
  )

  const { sort = {} } = req.query
  filter.sort = Object.keys(sort).map((key) => {
    return [key, sort[key]]
  })

  req.filters = filter

  next()
}

module.exports = filters
