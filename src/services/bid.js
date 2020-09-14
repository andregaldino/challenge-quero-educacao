'use strict'

const { Course, University, Campus, Bid } = require('../entities')

const getAll = async (filters) => {
  const { where } = filters
  const { relationships } = filters
  const { university, campus, course } = relationships || []
  const relationshipUniversity = {
    model: University,
  }

  const relationshipCampus = {
    model: Campus,
  }

  const relationshipCourse = {
    model: Course,
  }

  if (university) {
    relationshipUniversity.where = university
  }

  if (campus) {
    relationshipCampus.where = campus
  }

  if (course) {
    relationshipCourse.where = course
  }

  relationshipCourse.include = [relationshipUniversity, relationshipCampus]

  return Bid.findAll({
    where,
    include: relationshipCourse,
  })
}

module.exports = {
  getAll,
}
