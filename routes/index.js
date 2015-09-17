var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'You Drew A King.' })
});

router.get('/how-to-play', (req, res, next) => {
  res.render('how-to-play', { title: 'How to play' })
})

module.exports = router
