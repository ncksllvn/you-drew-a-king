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
	
	res.render('suggestion', Object.assign({ 
		captcha: captcha, 
		suggestion: {} 
	}, meta))
})

router.post('/', (req, res, next) => {
	
	var captchaId = req.session.captchaId
	
	if (!captchaId)
	{
		var err = new Error('Are you sure you\'re human?')
		err.status = 400
		return next(err)
	}
	
	var captcha = captchas[captchaId]
	var captchaAnswer = captcha.answer
	var userAnswer = req.body['security-user-answer']
	var suggestion = {
		title: req.body.title,
		description: req.body.description,
		name: req.body.name,
		ip: req.ip
	}
	
	// Get a new captcha regardless of if they answered right or not
	var newCaptcha = captchas.random()
	
	req.session.captchaId = newCaptcha.id
	
	// Incorrect Captcha answer
	if (userAnswer.toLowerCase() != captchaAnswer.toLowerCase()){
		return res.render('suggestion', Object.assign({
			captcha: newCaptcha,
			suggestion: suggestion,
			message: 'Uh oh, you sure you\'re human? Try that anti-robot question again.'
		}, meta))
	}
	
	Suggestion.create(suggestion).then((suggestion)=>{
		res.render('suggestion-feedback', meta)
	})
		
})

module.exports = router