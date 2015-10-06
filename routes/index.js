var express = require('express')
var { Rule } = require('../models')
var moment = require('moment')
var router = express.Router()

router.get('/', (req, res, next) => {
  res.render('index')
});

router.get('/how-to-play', (req, res, next) => res.render('how-to-play', {
  title: 'How to Play',
  description: 'The classic method of how to play Kings.'
}))

router.get('/sitemap.xml', (req, res, next) => {
  
  Rule.findAll().then((rules)=>{
    
    res.type('xml')
    res.render('sitemap', { rules: rules, moment: moment })
    
  })
  
})

module.exports = router