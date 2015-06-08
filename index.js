var app = require('./src/app')

app.listen(process.env.PORT || 5000, function () {
	var target = this.address()
	console.log('Listening on http://%s:%s', target.address, target.port)
})
