'use strict'

const express = require('express')
const router = new express.Router()

router.get('/health', (req, res) => {
  res.send({
    msg: 'ok',
  })
})

module.exports = router
