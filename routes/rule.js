var { Rule } = require('../models')
var express = require('express');
var router = express.Router();

/* GET random rule */
router.get('/', (req, res, next) => {
  
  var rule = {
    id:           123456,
    name:         'The Little Man',
    //image:        'http://placehold.it/200x200',
    permalink:    req.protocol + '://' + req.hostname + '/rule/' + 123456,
    description: `Before you take a drink, remove the (invisible) little man from your cup. 
                  Afterwards, put him back on. Forget either and continue taking drinks until 
                  you remember.`
  }
  
  rule.title = rule.name
  
  res.render('rule', rule)
})

module.exports = router
