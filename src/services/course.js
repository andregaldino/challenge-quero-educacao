'use strict'

const { Course, University, Campus } = require('../entities')

const getAll = async (filters) => {
  const { where } = filters
  const { relationships } = filters
  const { university, campus } = relationships || []
  const relationshipUniversity = {
    model: University,
  }

  const relationshipCampus = {
    model: Campus,
  }

  if (university) {
    relationshipUniversity.where = university
  }

  if (campus) {
    relationshipCampus.where = campus
  }
  return Course.findAll({
    where,
    include: [relationshipUniversity, relationshipCampus],
  })
}

module.exports = {
  getAll,
}
