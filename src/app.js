var express = require('express')

var app = express()


// TODO: body parser
// TODO: json error handler
// TODO: translate CouchDB errors


app.get('/:domain/records', function (req, res, next) {
	var domain = req.params.domain

	db.view('records/by_domain', { key: domain }, function (err, docs) {
		if (err) return next(err)
		res.json(docs)
	})
})

app.post('/:domain/records', function (req, res, next) {
	var domain = req.params.domain
	var record = req.body

	// TODO: validate record
	// TODO: generate record UUID

	db.get(domain, function (err, data) {
		if (err) return next(err)

		if (!data) data = {}
		if (!data.records) data.records = []

		// TODO: validate record against others (e.g. CNAME conflicts)

		data.records.push(record)

		db.save(domain, data._rev, data, function (err, next) {
			if (err) return next(err)

			// TODO: sync with InternetX
			res.send(201)
		})
	})
})

app.put('/:domain/records', function (req, res, next) {
	// TODO: validate records, make sure no conflicts
	// TODO: get existing records
	// TODO: save new records
	// TODO: sync with InternetX
})

app.delete('/:domain/records/:id', function (req, res, next) {
	var id = req.params.id
	// TODO: get domain records
	// TODO: remove record
	// TODO: sync with InternetX
})

app.get('/:domains/zone')
// TODO: app.put('/:domains/zone')


module.exports = app
