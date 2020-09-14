'use strict'

const express = require('express')
const router = new express.Router()

const { courseController } = require('./controllers')

router.get('/health', (req, res) => {
  res.send({
    msg: 'ok',
  })
})

router.get('/courses', courseController.all)

module.exports = router
