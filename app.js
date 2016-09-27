var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var session = require('express-session')
var uuid = require('node-uuid')
var constants = require('./constants/locals')
var captchas = require('./util/captchas')
var errorHandling = require('./util/error-handling')

var routes = require('./routes/index')
var rule = require('./routes/rule')
var search = require('./routes/search')
var suggestion = require('./routes/suggestion')

var app = express()

app.locals = Object.assign(app.locals, constants())

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: app.locals.sessionSecret,
  genId: (req) => {
    return uuid.v1()
  }
}))

app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res, next) => {
  var session = req.session

  if (!session.captchaId){
    session.captchaId = captchas.random().id
  }

  next()
})

app.use('/', routes)
app.use('/', rule)
app.use('/search', search)
app.use('/suggestion', suggestion)

errorHandling(app)

module.exports = app
