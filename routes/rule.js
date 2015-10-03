var express = require('express')
var slug = require('slug')
var router = express.Router()
var { Rule } = require('../models')
var prevRulesMaxLength = 55

router.get('/rule', (req, res, next) => {
  
  var prevRules = req.session.prevRules = req.session.prevRules || []
  
  Rule.findRandom({
    id: {
      $notIn: prevRules.length > 0 ? prevRules : [-1]
    }
  }).then((rule) => {
    
    prevRules.push(rule.id)
    
    if (prevRules.length > prevRulesMaxLength)
      req.session.prevRules = prevRules.slice(1)
    
    res.render('rule', {
      title: 'Get a Rule',
      description: 'Get a funny or classic rule for when you draw a king and blank out.',
      rule: rule
    })
    
  })
  
})

router.get('/:title/:id', (req, res, next) => {
  
  var ruleId = req.params.id
  
  if (isNaN(ruleId)) return next()
  
  Rule.findById(ruleId).then((rule) => {
    
    if (!rule) return next()
    
    res.render('rule', {
      title: rule.title,
      description: rule.description,
      image: rule.image,
      rule: rule
    })
    
  })
  
})

module.exports = router
