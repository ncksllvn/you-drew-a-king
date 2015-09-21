var express = require('express')
var slug = require('slug')
var router = express.Router()
var { Rule } = require('../models')


router.get('/rule', (req, res, next) => {
  
  Rule.findRandom().then((rule) => {
    
    res.render('rule', {
      title: 'Get a Rule',
      description: 'Get a funny or classic rule for when you draw a king and blank out.',
      image: 'http://placehold.it/200x200',
      rule: rule.getWithShareLinks(req)
    })
    
  })
  
})

router.get('/:title/:id', (req, res, next) => {
  
  var ruleId = req.params.id
  
  Rule.findById(ruleId).then((rule) => {
    
    var data = rule.get({ plain: true })
    data.rule = rule.getWithShareLinks(req)
    
    res.render('rule', data)
    
  })
  
})

module.exports = router
