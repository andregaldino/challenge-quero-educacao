'use strict'

const filter = (req, res, next) => {
  const filters = {
    where: {},
    relationships: [],
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

  filters.where = Object.assign(
    filters.where,
    ...keysConditions.map((key) => {
      return { [key]: req.query[key] }
    }),
  )

  filters.relationships = Object.assign(
    filters.relationships,
    ...keysRelations.map((key) => {
      return { [key]: req.query[key] }
    }),
  )

  const { sort } = req.query
  filters.sort = Object.keys(sort || {}).map((key) => {
    return [key, sort[key]]
  })

  req.filters = filters

  next()
}

module.exports = filter
