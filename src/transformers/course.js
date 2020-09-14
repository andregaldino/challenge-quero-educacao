'use strict'

const transform = (courses) => {
  return courses.map((course) => {
    return {
      course: {
        name: course.name,
        kind: course.kind,
        level: course.level,
        shift: course.shift,
      },
      university: {
        name: course.university.name,
        score: course.university.score,
        logo_url: course.university.logo_url,
      },
      campus: {
        name: course.campus.name,
        city: course.campus.city,
      },
    }
  })
}

module.exports = transform
