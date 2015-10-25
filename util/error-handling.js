module.exports = (app) => {
	
	// catch 404 and forward to error handler
	app.use((req, res, next) => {
		var err = new Error('Not found')
		err.status = 404
		next(err)
	})
	
	// DEVELOPMENT ERROR HANDLER
	if (app.get('env') === 'development') {
		
		app.use((err, req, res, next) => {
			
			res.status(err.status || 500)
			
			res.render('error', {
				message: err.message,
				status: err.status || '???',
				stack: err.stack
			})
			
		})
		
	}
	
	// PRODUCTION ERROR HANDLER
	app.use((err, req, res, next) => {
	
		var status = err.status || 500
		var message
		
		switch (status) {
			case 404:
				message = 'Looks like you made a wrong turn.'
				break
			case 503:
				message = 'Sorry ladies and gents - we\'re down right now. Please try again in a few.'
				break
			default:
				message = 'You broke us!'
		}
		
		res.status(status)
		
		res.render('error', {
			message: message,
			status: status,
			stack: '' // no stacktraces leaked to user
		})
	
	})
	
}