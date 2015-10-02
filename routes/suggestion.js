var express = require('express')
var router = express.Router()
var { Suggestion } = require('../models')
var captchas = require('../util/captchas')

var meta = {
	title: 'Submit a Rule',
	description: 'Submit your own rule to YouDrewAKing.com'
}

router.get('/', (req, res, next) => {
	var captchaId = req.session.captchaId
	var captcha = captchas[captchaId]
	
	res.render('suggestion', 
		Object.assign({ captcha: captcha }, meta))
})

router.post('/', (req, res, next) => {
	
	var captchaId = req.session.captchaId
	var captchaAnswer = captchas[captchaId].answer
	var userAnswer = req.body['security-user-answer']
	
	// Get a new captcha regardless of if they answered right or not
	req.session.captchaId = captchas.random().id
	
	if (!userAnswer || !captchaAnswer || captchaAnswer.toLowerCase() != userAnswer.toLowerCase()){
		var err = new Error('Are you sure you\'re human?')
		err.status = 400
		return next(err)
	}
	
	var suggestion = {
		title: req.body.title,
		description: req.body.description,
		name: req.body.name,
		ip: req.ip
	} 
	
	Suggestion.create(suggestion).then((suggestion)=>{
		res.render('suggestion-feedback', meta)
	})
		
})

module.exports = router