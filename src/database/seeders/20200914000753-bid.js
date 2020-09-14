/* eslint-disable camelcase */

'use strict'

const { Course } = require('../../entities')
const bidsJson = require('../../../db.json')

module.exports = {
  up: async (queryInterface) => {
    const allCourses = Course.findAll({
      include: [{ all: true }],
    })

    const courses = await allCourses

    const bids = bidsJson.map((item) => {
      const {
        full_price,
        price_with_discount,
        discount_percentage,
        start_date,
        enrollment_semester,
        enabled,
      } = item
      const course = courses.find(
        (element) =>
          element.name === item.course.name &&
          element.kind === item.course.kind &&
          element.level === item.course.level &&
          element.shift === item.course.shift &&
          element.campus.name === item.campus.name &&
          element.campus.city === item.campus.city &&
          element.university.name === item.university.name,
      )

      const [day, month, year] = start_date.split('/')
      return {
        full_price,
        price_with_discount,
        discount_percentage,
        start_date: new Date(year, month - 1, day),
        enrollment_semester,
        enabled,
        courseId: course.id,
      }
    })

    await queryInterface.bulkInsert('bids', bids)
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('bids', null, {})
  },
}
