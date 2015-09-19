var express = require('express')
var router = express.Router()

var index = {
  title: 'You Drew A King.',
  description: 'For when you blank out on a fun rule while playing Kings.',
  image: 'http://placehold.it/200x200'
}

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', index)
});

var howToPlay = {
  title: 'How to Play',
  description: 'Just in case you don\'t know how to play or you forget what a card means.',
  image: 'http://placehold.it/200x200'
}

router.get('/how-to-play', (req, res, next) => {
  res.render('how-to-play', howToPlay)
})

module.exports = router
