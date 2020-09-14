'use strict'

const { Campus, University } = require('../../entities')
const data = require('../../../db.json')

const coursesJson = data.map((bid) => {
  const { course, university, campus } = bid
  return { course, university, campus }
})

module.exports = {
  up: async (queryInterface) => {
    const allUniversities = University.findAll({
      attributes: ['id', 'name'],
    })
    const allCampus = Campus.findAll()

    const universities = await allUniversities
    const campuses = await allCampus
    const courses = coursesJson.map((item) => {
      const { name, kind, level, shift } = item.course

      const university = universities.find(
        (element) => element.name === item.university.name,
      )

      const campus = campuses.find(
        (element) =>
          element.name === item.campus.name &&
          element.city === item.campus.city,
      )

      return {
        name,
        kind,
        level,
        shift,
        campusId: campus.id,
        universityId: university.id,
      }
    })

    await queryInterface.bulkInsert('courses', courses)
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('courses', null, {})
  },
}
