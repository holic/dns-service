var validator = require('is-my-json-valid')
var schema = require('../schemas/record.json')

var validate = validator(schema)

function Record (data) {
	if (data) {
		var result = validate(data)
		if (!validate(data)) throw new Error('Data is not valid: ' + validate.errors)

		for (var k in data) {
			if (data.hasOwnProperty(k)) {
				this[k] = data[k]
			}
		}
	}
}

Record.prototype.save = function (done) {
	CouchDB.put('records', this, done)
}


module.exports = Record
