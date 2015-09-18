var { Rule } = require('../models')
var express = require('express');
var router = express.Router();

/* GET random rule */
router.get('/', (req, res, next) => {
  
  Rule.findAll().then((rules) => {
    
    var rule = rules[0]
    
    res.render('rule', rule.get({ plain: true }))
    
  })
  
})

module.exports = router
