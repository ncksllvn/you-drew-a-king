var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

var routes = require('./routes/index')
var rule = require('./routes/rule')
var search = require('./routes/search')

var app = express()

app.locals = Object.assign(app.locals, require('./constants/locals'))

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', routes)
app.use('/', rule)
app.use('/search', search)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not found')
  err.status = 404
  next(err)
})

// error handlers

// DEVELOPMENT ERROR HANDLER
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    
    res.status(err.status || 500)
    
    res.render('error', {
      message: err.message,
      status: err.status || '???',
      stack: err.stack
    })
    
  })
}

// PRODUCTION ERROR HANDLER
app.use((err, req, res, next) => {
  
  var status = err.status || 500
  
  res.status(status)

  res.render('error', {
    message: status == 404 ? 'Looks like you made a wrong turn.' : 'You broke us!',
    status: status,
    stack: '' // no stacktraces leaked to user
  })
  
})


module.exports = app
