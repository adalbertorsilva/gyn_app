const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(logger('dev'))
app.use(expressValidator())

require('./server/routes/exercise-routes')(app)

module.exports = app
