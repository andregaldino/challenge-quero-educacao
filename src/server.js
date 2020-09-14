'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')
const { filters } = require('./middleware')
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(filters)
app.use('/v1', routes)

module.exports = app
