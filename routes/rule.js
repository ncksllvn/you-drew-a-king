var express = require('express')
var slug = require('slug')
var router = express.Router()
var { Rule } = require('../models')


router.get('/rule', (req, res, next) => {
  
  var lastRuleId = req.query.last
  var whereClause = lastRuleId && {
    id: {
      $ne: lastRuleId  
    }
  }
  
  Rule.findRandom(whereClause).then((rule) => {
    
    res.render('rule', {
      title: 'Get a Rule',
      description: 'Get a funny or classic rule for when you draw a king and blank out.',
      image: 'http://placehold.it/200x200',
      rule: rule
    })
    
  })
  
})

router.get('/:title/:id', (req, res, next) => {
  
  var ruleId = req.params.id
  
  Rule.findById(ruleId).then((rule) => {
    
    res.render('rule', {
      title: rule.title,
      description: rule.description,
      image: rule.image,
      rule: rule
    })
    
  })
  
})

module.exports = router
