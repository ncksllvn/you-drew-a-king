var express = require('express')
var slug = require('slug')
var router = express.Router()
var { Rule } = require('../models')

var renderRule = (req, res, rule) => {
  
  rule = rule.get({ plain: true })
  
  var ruleId = rule.id
  var ruleTitle = slug(rule.title)
  var permalink = req.protocol + '://' + req.get('host') + '/rule/' + ruleTitle + '/' + ruleId
  var ruleWithPermalink = Object.assign({
    permalink: permalink
  }, rule)
  
  res.render('rule', ruleWithPermalink)
  
}

/* GET random rule */
router.get('/', (req, res, next) => {
  
  Rule.findRandom().then((rule) => {
    renderRule(req, res, rule)
  })
  
})

router.get('/:title/:id', (req, res, next) => {
  
  var ruleId = req.params.id
  
  Rule.findById(ruleId).then((rule) => {
    renderRule(req, res, rule)
  })
  
})

module.exports = router
