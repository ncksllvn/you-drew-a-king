var express = require('express')
var router = express.Router()

router.get('/', (req, res, next) => {
  res.render('index')
});

var howToPlay = {
  title: 'How to Play',
  description: 'The classic method of how to play Kings.'
}

router.get('/how-to-play', (req, res, next) => {
  res.render('how-to-play', howToPlay)
})

module.exports = router
