var express = require('express')
var slug = require('slug')
var router = express.Router()
var { Rule } = require('../models')
var prevRulesMaxLength = 50

router.use((req, res, next) => {
  req.session.prevRules = req.session.prevRules || []
  
  if (req.session.prevRules.length >= prevRulesMaxLength)
    req.session.prevRules = req.session.prevRules.slice(1)
  
  next()
})

router.get('/rule', (req, res, next) => {
  
  var exclusions = req.session.prevRules.length ? req.session.prevRules : null
  
  Rule.findRandomAndNext({ exclusions: exclusions }).then((rule) => {
    
    req.session.prevRules.push(rule.id)
    
    res.render('rule', {
      title: 'Get a Rule',
      description: 'Get a funny or classic rule for when you draw a king and blank out.',
      rule: rule
    })
    
  }).catch(next)
  
})

router.get('/rules', (req, res, next) => {
  
  Rule.findAll({
    attributes: ['id', 'title', 'image'],
    order: ['title']
  }).then((rules) => {
    
    res.render('rules', {
      title: 'Rules Index',
      description: 'All of the rules your heart desires.',
      rules: rules
    })
    
  }).catch(next)
  
})

router.get('/:title/:id', (req, res, next) => {
  
  var exclusions = req.session.prevRules.length ? req.session.prevRules : null
  var ruleId = req.params.id
  
  if (isNaN(ruleId)) return next()
  
  Rule.findByIdAndRandomNext({ id: ruleId, exclusions: exclusions }).then((rule) => {
    
    if (!rule) return next()
    
    req.session.prevRules.push(rule.id)
    
    res.render('rule', {
      title: rule.title,
      description: rule.description,
      image: rule.image,
      rule: rule
    })
    
  }).catch(next)
  
})

module.exports = router
