var tv4 = require('tv4')
var schema = require('../schemas/record.json')

function Record (data) {
	if (data) {
		var result = tv4.validateResult(data, schema)
		if (result.error) throw new Error('Data is not valid: ' + result.error.message)

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
