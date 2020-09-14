'use strict'

const express = require('express')
const router = new express.Router()

const { courseController, bidController } = require('./controllers')

router.get('/health', (req, res) => {
  res.send({
    msg: 'ok',
  })
})

router.get('/courses', courseController.all)
router.get('/bids', bidController.all)

module.exports = router
