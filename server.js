var express = require('express')
  , logger = require('morgan')
  , app = express()
  , template = require('jade').compileFile(__dirname + '/views/homepage.jade')

app.use(logger('dev'))
app.use(express.static(__dirname + '/static'))

app.get('/', function (req, res, next) {
  try {
    var html = template({ title: 'Home' })
    res.send(html)
  } catch (e) {
    next(e)
  }
})


app.get('/', function (req, res, next) {
  try {
    var html = template({ title: 'Home' })
    res.send(html)
  } catch (e) {
    next(e)
  }
})

app.get('/theBigDay', function (req, res, next) {
  try {
    bigDay = require('jade').compileFile(__dirname + '/views/theBigDay.jade')
    var html = bigDay({ title: 'theBigDay' })
    res.send(html)
  } catch (e) {
    next(e)
  }
})

app.get('/party', function (req, res, next) {
  try {
    party = require('jade').compileFile(__dirname + '/views/party.jade')
    var html = party({ title: 'party' })
    res.send(html)
  } catch (e) {
    next(e)
  }
})

app.get('/giftRegistry', function (req, res, next) {
  try {
    giftRegistry = require('jade').compileFile(__dirname + '/views/giftRegistry.jade')
    var html = giftRegistry({ title: 'giftRegistry' })
    res.send(html)
  } catch (e) {
    next(e)
  }
})

app.get('/RSVP', function (req, res, next) {
  try {
    RSVP = require('jade').compileFile(__dirname + '/views/RSVP.jade')
    var html = RSVP({ title: 'RSVP' })
    res.send(html)
  } catch (e) {
    next(e)
  }
})

app.get('/Travels', function (req, res, next) {
  try {
    Travels = require('jade').compileFile(__dirname + '/views/Travels.jade')
    var html = Travels({ title: 'Travels' })
    res.send(html)
  } catch (e) {
    next(e)
  }
})



app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})
