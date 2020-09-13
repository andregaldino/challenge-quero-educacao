'use strict'

const supertest = require('supertest')
const glob = require('glob')
const { describe, it } = require('mocha')
const app = require('../../src/server')

describe('Acceptance test - all endpoints', () => {
  glob(`${__dirname}/fixtures/*.json`, {}, (err, files) => {
    let index
    for (index = 0; index < files.length; index += 1) {
      const file = files[index]
      // eslint-disable-next-line global-require
      const raw = require(file)
      const { title, request, response } = raw
      const { endpoint } = request
      const { statusCode, body } = response
      it(title, (done) => {
        supertest(app).get(endpoint).expect(statusCode, body, done)
      })
    }
  })
})
