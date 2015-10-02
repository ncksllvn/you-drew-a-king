var express = require('express')
var router = express.Router()
var captchaGenerator = require('ascii-captcha')
var { Suggestion } = require('../models')


var captchas = (function(){
	
	var length = 100
	var captchas = {
		random: function(){
			var n = Math.ceil( Math.random() * length )
			
			return this[n]
		}
	}
	
	for (var i=1; i < (length + 1); i++){
		
		var answer = captchaGenerator.generateRandomText(5)
		
		captchas[i] = {
			id: i,
			image: captchaGenerator.word2Transformedstr(answer),
			answer: answer
		}
		
	}
	
	return captchas
	
})()

var meta = {
	title: 'Submit a Rule',
	description: 'Submit your own rule to YouDrewAKing.com'
}

router.get('/', (req, res, next) => {
	res.render('suggestion', 
		Object.assign({ captcha: captchas.random() }, meta))
})

router.post('/', (req, res, next) => {
	
	var captchaId = req.body['security-id']
	var captchaAnswer = captchas[captchaId].answer
	var userAnswer = req.body['security-user-answer']
	
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