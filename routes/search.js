var express = require('express')
var { Rule } = require('../models')
var router = express.Router()

router.get('/', (req, res, next) => {
	var keyword = req.query.q
	
	if (!keyword || keyword.length < 3)
	{
		return res.render('search', { rules: [], keyword: keyword })
	}
	
	Rule.searchByKeyword(keyword).then((rules)=>{
		
		res.render('search', { rules: rules, keyword: keyword })
		
	})
	
})

module.exports = router