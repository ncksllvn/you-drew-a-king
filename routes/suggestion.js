var express = require('express')
var router = express.Router()
var { Suggestion } = require('../models')

var captchas = [
	{
		id: 1,
		question: 'What is two plus two?',
		answer: 4
	},
	{
		id: 2,
		question: 'What is nine plus one hundred?',
		answer: 109
	},
	{
		id: 3,
		question: 'What is three minus one?',
		answer: 2
	},
	{
		id: 4,
		question: 'What is ten plus four?',
		answer: 14
	},
	{
		id: 5,
		question: 'What is one plus six?',
		answer: 7
	}
]

router.get('/', (req, res, next) => {
	
	var captchaIndex = Math.floor( Math.random() * 5 )
	var randomCaptcha = captchas[ captchaIndex ]
	
	res.render('suggestion', { security: randomCaptcha })
  
})

router.post('/', (req, res, next) => {
	
	var securityAnswer = req.body.security
	var securityQuestionId = req.body.securityid
	var securityQuestion = captchas.filter((sq)=>{
		return sq.id == securityQuestionId
	})[0]
	
	if (!securityQuestion || securityQuestion.answer != securityAnswer)
	{
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
		res.render('suggestion-feedback')
	})
		
})

module.exports = router