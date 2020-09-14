'use strict'

const transform = (bids) => {
  return bids.map((bid) => {
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
        name: bid.course.name,
        kind: bid.course.kind,
        level: bid.course.level,
        shift: bid.course.shift,
      },
      university: {
        name: bid.course.university.name,
        score: bid.course.university.score,
        logo_url: bid.course.university.logo_url,
      },
      campus: {
        name: bid.course.campus.name,
        city: bid.course.campus.city,
      },
    }
  })
}

module.exports = transform
