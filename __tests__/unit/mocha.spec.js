'use strict'

const { it } = require('mocha')
const { expect } = require('chai')

it('Mocha testing', () => {
  const foo = 'testing'
  expect(foo).to.equal('testing')
})
