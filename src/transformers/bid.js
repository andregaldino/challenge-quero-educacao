'use strict'

const transform = (bids) => {
  return bids.map((bid) => {
    const { course } = bid
    return {
      full_price: bid.full_price,
      price_with_discount: bid.price_with_discount,
      discount_percentage: bid.discount_percentage,
      start_date: new Date(bid.start_date).toLocaleString('pt-BR', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        timeZone: 'UTC',
      }),
      enrollment_semester: bid.enrollment_semester,
      enabled: bid.enabled,
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
