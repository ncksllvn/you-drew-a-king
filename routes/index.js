var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'King\'s Cup Rule Master' })
});

router.get('/how-to-play', (req, res, next) => {
  res.render('how-to-play')
})

module.exports = router
