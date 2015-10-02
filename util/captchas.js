var captchaGenerator = require('ascii-captcha')

module.exports = (function(){
	
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